"use client"
import {useEffect, useState} from 'react';
import { searchPlayersInArray } from '@/lib/data/helpers';
import StatisticsFilter from './StatisticsFilter';
import StatisticsTable from './StatisticsTable';
import PlayerStatsModal from './PlayerStatsModal';
import { getPlayersFromFirestore } from '@/lib/firebase/players';
import { getTeamsFromFirestore } from '@/lib/firebase/teams';

export default function StatisticsClient({division}) {

    const handleSelectPlayer = (player) => {
    setSelectedPlayer(player);     // pass full player object
    setModal(true);            // open modal
    setSearchTerm("");             // optional: clears input (closes dropdown)
    };

    const [players, setPlayers] = useState([]); // contains all players from respective division
    const [teams, setTeams] = useState([]);
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
            // console.log("Firestore players:", data);
            setPlayers(data);
        }
        async function loadTeams() {
            const data = await getTeamsFromFirestore(division);
            // console.log("Firestore teams:", data);
            setTeams(data);
            }
        loadPlayers();
        loadTeams();
    }, [division]);

    // console.log("players in client", players);

    return (
        <div className="">
            <StatisticsFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} resultedPlayers={firestoreFilteredResults} onSelectPlayer={handleSelectPlayer} teams={teams}/>            
            <h2 className="text-xl font-semibold text-center mt-5">Leaders</h2>
            <StatisticsTable players={players} teams={teams}/>
            
            {isModalOpen && <PlayerStatsModal player={selectedPlayer} setModal={setModal} teams={teams}/>}
        </div>
      )

}