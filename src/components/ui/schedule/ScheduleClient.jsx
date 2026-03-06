"use client"
import {useState} from 'react';
import ScheduleFilter from './ScheduleFilter';
import ScheduleTable from './ScheduleTable';

import { getTeamById, getPlayersByTeamId } from '@/lib/data/helpers';

export default function ScheduleClient({division}) {

    const [selectedWeek, setSelectedWeek] = useState(1);
    const [selectedTeamId, setSelectedTeamId] = useState('east-end-eagles');

    //  const players = getPlayersByTeamId(teamID);
    //  const team = getTeamById(teamID);

     // bg-gradient-to-br from-blue-400/10 to-blue-600/10 border border-blue-400/20

    return (
        <div className="">
            <ScheduleFilter
                division={division}
                week={selectedWeek}
                team={selectedTeamId}
                setWeek={setSelectedWeek}
                setTeam={setSelectedTeamId}
            />

            <ScheduleTable division={division} week={selectedWeek} teamId={selectedTeamId} />
        </div>
      )

}