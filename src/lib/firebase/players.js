import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/client";

export async function getPlayersFromFirestore(division) {

    const q = query(
        collection(db, "players"),
        where("division", "==", division)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
}

export async function getPlayerByIdFromFirestore(playerId) {
  
    const q = query(
        collection(db, "players"),
        where("id", "==", playerId)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
}

export async function getPlayersByTeamFromFirestore(teamId) {
  
    const q = query(
        collection(db, "players"),
        where("teamId", "==", teamId)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))

}