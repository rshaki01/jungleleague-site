import admin from "firebase-admin";
import { readFileSync } from "node:fs";
import { mockGames } from "../src/lib/data/mockGames.js";

// load service account json
const serviceAccount = JSON.parse(
  readFileSync("./secrets/jungle-league-service-account.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function seedGames() {
  try {
    for (const game of mockGames) {
      const gameId = game.id;
      const homeTeamId = game.homeTeamId;
      const awayTeamId = game.awayTeamId;

      await db.collection("games").doc(gameId).set(game);
      console.log(`Seeded ${gameId}:  ${homeTeamId} vs ${awayTeamId}`);
    }

    console.log("Done seeding teams.");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding teams:", error);
    process.exit(1);
  }
}

seedGames();