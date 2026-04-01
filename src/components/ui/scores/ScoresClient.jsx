"use client"
import {useState, useEffect} from 'react';
import ScoresFilter from '././ScoresFilter';
import ScoresTable from './ScoresTable';


export default function ScoresClient({division}) {

    const [selectedWeek, setSelectedWeek] = useState(1);
    const [selectedTeamId, setSelectedTeamId] = useState("All");


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