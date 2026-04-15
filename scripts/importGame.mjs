import { readFileSync } from "node:fs";

const filePath = process.argv[2];
// read game JSON data
const gameData = JSON.parse(readFileSync(filePath, 'utf-8'));

// console.log(JSON.stringify(gameData,null, 2));

// check if the game Object is what we expect
function validateCompletedGame(gameData) {
    const errors = [];

    // validate if gameData object is an object
    if (
    gameData &&
    typeof gameData === "object" &&
    !Array.isArray(gameData)
    ) {
        // valid object
    } else {
    errors.push("Game data must be a valid object");
    }



    return {
        isValid: errors.length === 0,
        errors,
    }
}