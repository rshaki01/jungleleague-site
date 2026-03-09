"use client"
import {useState} from 'react';
import ScoresFilter from '././ScoresFilter';
import ScoresTable from './ScoresTable';


export default function ScoresClient({division}) {

    const [selectedWeek, setSelectedWeek] = useState(1);
    const [selectedTeamId, setSelectedTeamId] = useState("All");

     // bg-gradient-to-br from-blue-400/10 to-blue-600/10 border border-blue-400/20

    return (
        <div className="">
            <ScoresFilter
                division={division}
                week={selectedWeek}
                team={selectedTeamId}
                setWeek={setSelectedWeek}
                setTeam={setSelectedTeamId}
            />
            <ScoresTable division={division} week={selectedWeek} teamId={selectedTeamId}/>
        </div>
      )

}