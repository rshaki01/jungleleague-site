import admin from "firebase-admin";
import { readFileSync } from "node:fs";
import { mockStandings } from "../src/lib/data/mockStandings.js";

// load service account json
const serviceAccount = JSON.parse(
  readFileSync("./secrets/jungle-league-service-account.json", "utf8")
);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function seedTeams() {
  try {
    for (const team of mockStandings) {
      const teamId = team.id;

      await db.collection("teams").doc(teamId).set(team);
      console.log(`Seeded ${teamId}`);
    }

    console.log("Done seeding teams.");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding team:", error);
    process.exit(1);
  }
}

seedTeams();