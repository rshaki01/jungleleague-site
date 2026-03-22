import { collection, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase/client";

export async function getPlayersFromFirestore() {
    const snapshot = await getDocs(collection(db, "players"));

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
}