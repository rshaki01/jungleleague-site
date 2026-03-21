"use client"
import {useState} from 'react';
import { searchPlayers } from '@/lib/data/helpers';
import StatisticsFilter from './StatisticsFilter';
import StatisticsTable from './StatisticsTable';
import PlayerStatsModal from './PlayerStatsModal';



export default function StatisticsClient({division}) {

    const handleSelectPlayer = (player) => {
    setSelectedPlayer(player);     // pass full player object
    setModalOpen(true);            // open modal
    setSearchTerm("");             // optional: clears input (closes dropdown)
    };

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPlayer, setSelectedPlayer] = useState("");
    const [isModalOpen, setModalOpen] = useState(false);
    const filteredResults = searchPlayers(division, searchTerm);


    console.log(selectedPlayer);

     // bg-gradient-to-br from-blue-400/10 to-blue-600/10 border border-blue-400/20

    return (
        <div className="">
            <StatisticsFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} resultedPlayers={filteredResults} onSelectPlayer={handleSelectPlayer}/>            
            <StatisticsTable division={division} />
            
            {isModalOpen && <PlayerStatsModal />}
        </div>
      )

}