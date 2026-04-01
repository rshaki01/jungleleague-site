import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase/client";

export async function getGamesFromFirestore(division) {

    const q = query(
        collection(db, "games"),
        where("division", "==", division)
    );

    const snapshot = await getDocs(q);

    console.log("query division:", division);
    console.log("snapshot size:", snapshot.size);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }))
}


