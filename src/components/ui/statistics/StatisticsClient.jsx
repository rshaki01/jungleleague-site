"use client"
import {useState} from 'react';
import { searchPlayers } from '@/lib/data/helpers';
import StatisticsFilter from './StatisticsFilter';
import StatisticsTable from './StatisticsTable';

export default function StatisticsClient({division}) {

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPlayer, setSelectedPlayer] = useState('');
    const filteredResults = searchPlayers(division, searchTerm);


    console.log(filteredResults);


     // bg-gradient-to-br from-blue-400/10 to-blue-600/10 border border-blue-400/20

    return (
        <div className="">
            <StatisticsFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} resultedPlayers={filteredResults}/>            
            <StatisticsTable division={division} />
        </div>
      )

}