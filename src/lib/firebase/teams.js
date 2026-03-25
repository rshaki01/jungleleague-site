import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/client";

export async function getTeamsFromFirestore(division) {

    const q = query(
        collection(db, "teams"),
        where("division", "==", division)
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
}

