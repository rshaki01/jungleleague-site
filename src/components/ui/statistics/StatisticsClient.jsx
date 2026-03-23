"use client"
import {useEffect, useState} from 'react';
import { searchPlayersInArray } from '@/lib/data/helpers';
import StatisticsFilter from './StatisticsFilter';
import StatisticsTable from './StatisticsTable';
import PlayerStatsModal from './PlayerStatsModal';
import { getPlayersFromFirestore } from '@/lib/firebase/players';



export default function StatisticsClient({division}) {

    const handleSelectPlayer = (player) => {
    setSelectedPlayer(player);     // pass full player object
    setModal(true);            // open modal
    setSearchTerm("");             // optional: clears input (closes dropdown)
    };

    const [players, setPlayers] = useState([]); // contains all players from respective division
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPlayer, setSelectedPlayer] = useState("");
    const [isModalOpen, setModal] = useState(false);
    const firestoreFilteredResults = searchPlayersInArray(players, searchTerm);
    {/* Searching Mock Players */}
    // const filteredResults = searchPlayers(division, searchTerm);

    // Testing fetch from Firebase and fetch again if division changes
    useEffect(() => {
        async function loadPlayers() {
            const data = await getPlayersFromFirestore(division);
            console.log("Firestore players:", data);
            setPlayers(data);
        }
        loadPlayers();
    }, [division]);

    console.log("players in client", players);

    return (
        <div className="">
            <StatisticsFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} resultedPlayers={firestoreFilteredResults} onSelectPlayer={handleSelectPlayer}/>            
            <StatisticsTable players={players} />
            
            {isModalOpen && <PlayerStatsModal player={selectedPlayer} setModal={setModal}/>}
        </div>
      )

}