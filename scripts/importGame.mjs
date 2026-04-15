import { readFileSync } from "node:fs";

const filePath = process.argv[2];
// read game JSON data
const gameData = JSON.parse(readFileSync(filePath, 'utf-8'));

// console.log(JSON.stringify(gameData,null, 2));

// check if the game Object is what we expect
function validateCompletedGame(gameData) {
    const errors = [];

    // validate if gameData object is an object
    const isValidObject =
    gameData &&
    typeof gameData === "object" &&
    !Array.isArray(gameData);

    if (!isValidObject) {
        errors.push("Game data must be a valid object");
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

    return {
        isValid: errors.length === 0,
        errors,
    }
}

validateCompletedGame(gameData);