import admin from "firebase-admin";
import { readFileSync } from "node:fs";
import { mockPlayerAggregates } from "../src/lib/data/mockPlayerAggregates.js";
import { jlPlayers} from "@/lib/data/jlPlayers.js";
// load service account json
const serviceAccount = JSON.parse(
  readFileSync("./secrets/jungle-league-service-account.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function seedPlayers() {
  try {
    for (const player of mockPlayerAggregates) {
      const playerId = player.id;

      await db.collection("players").doc(playerId).set(player);
      console.log(`Seeded ${playerId}`);
    }

    console.log("Done seeding players.");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding players:", error);
    process.exit(1);
  }
}

seedPlayers();