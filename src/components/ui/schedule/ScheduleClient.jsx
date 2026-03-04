"use client"
import {useState} from 'react';
import ScheduleFilter from './ScheduleFilter';

import { getTeamById, getPlayersByTeamId } from '@/lib/data/helpers';

export default function ScheduleClient({division}) {

    const [selectedWeek, setSelectedWeek] = useState('1');
    const [selectedTeam, setSelectedTeam] = useState('All');

    //  const players = getPlayersByTeamId(teamID);
    //  const team = getTeamById(teamID);

     // bg-gradient-to-br from-blue-400/10 to-blue-600/10 border border-blue-400/20

    return (
        <div className="">
            <ScheduleFilter
                division={division}
                week={selectedWeek}
                team={selectedTeam}
                setWeek={setSelectedWeek}
                setTeam={setSelectedTeam}
            />
            <p>{selectedWeek} | {selectedTeam}</p>
        </div>
      )

}