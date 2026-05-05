import { readFileSync } from "node:fs";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore, FieldValue } from "firebase-admin/firestore";

const filePath = process.argv[2];
// read game JSON data
const gameData = JSON.parse(readFileSync(filePath, 'utf-8'));

// Validating Game Object and all top level and low level fields are expected
function validateCompletedGame(gameData) {
    const errors = [];

    // validate if gameData object is an object
    const isValidObject =
    gameData &&
    typeof gameData === "object" &&
    !Array.isArray(gameData);

    if (!isValidObject) {
    errors.push("Game data must be a valid object");

    return {
        isValid: false,
        errors,
    };
}

    // validate if top level-fields exist
    const requiredFields = [
    "id",
    "division",
    "week",
    "date",
    "time",
    "status",
    "homeTeamId",
    "awayTeamId",
    "homeScore",
    "awayScore",
    "boxScore",
    ];


    for (const field of requiredFields) {
        if (!(field in gameData)) {
            errors.push(`Missing field: ${field}`);
        }
    }

    // validate top-level field types

    const expectedTypes = {
    "id": "string",
    "division": "string",
    "week": "number",
    "date": "string",
    "time": "string",
    "status": "string",
    "homeTeamId": "string",
    "awayTeamId": "string",
    "homeScore": "number",
    "awayScore": "number",
    "boxScore": "object"
    }

    for (const field in expectedTypes ) {
        const expectedType = expectedTypes[field];
        const actualValue = gameData[field];
        if (typeof actualValue !== expectedType){
        errors.push(`${field} field is incorrect`);
        }
    }

    // 4. Validate if top-level values make sense
    if (gameData.status === "completed" && gameData.homeTeamId !== gameData.awayTeamId && gameData.week >= 1 && gameData.homeScore >= 0 && gameData.awayScore >= 0) {
        // valid

    } else {
        errors.push(`One of the top-level values do not make sense`);
    }

    // 5. Validate the box score shape
    if (
    !gameData.boxScore ||
    typeof gameData.boxScore !== "object" ||
    Array.isArray(gameData.boxScore)
    ) {
    errors.push("boxScore must be a valid object");
    } else {
        const homeBoxScore = gameData.boxScore[gameData.homeTeamId];
        const awayBoxScore = gameData.boxScore[gameData.awayTeamId];

        if (!(gameData.homeTeamId in gameData.boxScore)) {
            errors.push(`Missing boxScore for home team: ${gameData.homeTeamId}`);
        }

        if (!(gameData.awayTeamId in gameData.boxScore)) {
            errors.push(`Missing boxScore for away team: ${gameData.awayTeamId}`);
        }

        if (gameData.homeTeamId in gameData.boxScore && !Array.isArray(homeBoxScore)) {
            errors.push(`boxScore for home team ${gameData.homeTeamId} must be an array`);
        }

        if (gameData.awayTeamId in gameData.boxScore && !Array.isArray(awayBoxScore)) {
            errors.push(`boxScore for away team ${gameData.awayTeamId} must be an array`);
        }

        if (Array.isArray(homeBoxScore) && homeBoxScore.length === 0) {
            errors.push(`boxScore for home team ${gameData.homeTeamId} cannot be empty`);
        }

        if (Array.isArray(awayBoxScore) && awayBoxScore.length === 0) {
            errors.push(`boxScore for away team ${gameData.awayTeamId} cannot be empty`);
        }

        // 6. Validate that team scores match player point totals

        if (Array.isArray(homeBoxScore)) {
            const homePlayerPointsTotal = homeBoxScore.reduce((total, player) => {
                if (player.absence === true) return total;
                return total + player.pts;
            }, 0);

            if (homePlayerPointsTotal !== gameData.homeScore) {
                errors.push(
                    `Home score does not match player points total. Expected ${gameData.homeScore}, got ${homePlayerPointsTotal}`
                );
            }
        }

        if (Array.isArray(awayBoxScore)) {
            const awayPlayerPointsTotal = awayBoxScore.reduce((total, player) => {
                if (player.absence === true) return total;
                return total + player.pts;
            }, 0);

            if (awayPlayerPointsTotal !== gameData.awayScore) {
                errors.push(
                    `Away score does not match player points total. Expected ${gameData.awayScore}, got ${awayPlayerPointsTotal}`
                );
            }
        }

        // 7. Validate each player row
        const requiredPlayerFields = [
            "playerId",
            "pts",
            "reb",
            "ast",
            "stl",
            "blk",
            "twoPm",
            "twoPa",
            "ftm",
            "fta",
            "tpm",
            "tpa",
            "to",
        ];

        function validatePlayerRows(teamId, teamBoxScore) {
        teamBoxScore.forEach((player, index) => {
            // make sure each player row is an object
            if (!player || typeof player !== "object" || Array.isArray(player)) {
                errors.push(`Invalid player row for ${teamId} at index ${index}`);
                return;
            }

            // make sure playerId is a string
            if (typeof player.playerId !== "string") {
                errors.push(`playerId must be a string for ${teamId} player at index ${index}`);
            }

            // validate absence field if present
            if ("absence" in player && typeof player.absence !== "boolean") {
                errors.push(`absence must be a boolean for ${teamId} player at index ${index}`);
            }

            // skip stat validation for absent players
            if (player.absence === true) return;

            // make sure all required player fields exist
            for (const field of requiredPlayerFields) {
                if (!(field in player)) {
                    errors.push(`Missing ${field} for ${teamId} player at index ${index}`);
                }
            }

            // make sure stat fields are numbers
            for (const field of requiredPlayerFields) {
                if (field === "playerId") continue;

                if (typeof player[field] !== "number") {
                    errors.push(`${field} must be a number for ${teamId} player at index ${index}`);
                }

                if (player[field] < 0) {
                    errors.push(`${field} cannot be negative for ${teamId} player at index ${index}`);
                }
            }

            // validate points formula
            if (
                typeof player.twoPM === "number" &&
                typeof player.tpm === "number" &&
                typeof player.ftm === "number" &&
                typeof player.pts === "number"
            ) {
                const calculatedPoints =
                    player.twoPM * 2 +
                    player.tpm * 3 +
                    player.ftm;

                if (calculatedPoints !== player.pts) {
                    errors.push(
                        `Points mismatch for ${player.playerId}. Expected ${player.pts}, calculated ${calculatedPoints}`
                    );
                }
            }
        });
        
    }

    if (Array.isArray(homeBoxScore)) {
        validatePlayerRows(gameData.homeTeamId, homeBoxScore);
    }

    if (Array.isArray(awayBoxScore)) {
        validatePlayerRows(gameData.awayTeamId, awayBoxScore);
    }
    }

    return {
        isValid: errors.length === 0,
        errors,
    }

}

// run validation
const result = validateCompletedGame(gameData);

if (!result.isValid) {
    console.log("Game validation failed:");
    console.log(result.errors);
    process.exit(1);
}

console.log("Game validation passed.");

// importing game

initializeApp({ credential: cert("./secrets/jungle-league-service-account.json") });
const db = getFirestore();

async function importGame(gameData) {

    const batch = db.batch();

    const gameRef = db.collection("games").doc(gameData.id);
    batch.set(gameRef, gameData);

    // increment each player's stats

    const statFields = ["pts", "reb", "ast", "stl", "blk", "twoPa", "twoPm", "ftm", "fta", "tpm", "tpa", "to"];

    for (const teamId of [gameData.homeTeamId, gameData.awayTeamId]) {
        for (const player of gameData.boxScore[teamId]) {
            if (player.substitute === true) continue;
            if (player.absence === true) continue;
            const playerRef = db.collection("players").doc(player.playerId);
            const updates = { gp: FieldValue.increment(1) };
            for (const field of statFields) {
                updates[field] = FieldValue.increment(player[field]);
            }
            batch.update(playerRef, updates);
        }
    }

    // update team standings
    const winnerId = gameData.homeScore > gameData.awayScore ? gameData.homeTeamId : gameData.awayTeamId;
    const loserId = gameData.homeScore > gameData.awayScore ? gameData.awayTeamId : gameData.homeTeamId;

    batch.update(db.collection("teams").doc(winnerId), { wins: FieldValue.increment(1) });
    batch.update(db.collection("teams").doc(loserId), { losses: FieldValue.increment(1) });

    await batch.commit();
    console.log(`Game ${gameData.id} imported successfully.`);
}

importGame(gameData).catch((err) => {
    console.error("Import failed:", err);
    process.exit(1);
});
