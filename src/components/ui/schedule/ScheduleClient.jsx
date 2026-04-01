"use client"
import {useState, useEffect} from 'react';
import ScheduleFilter from './ScheduleFilter';
import ScheduleTable from './ScheduleTable';
import { getTeamsFromFirestore } from '@/lib/firebase/teams';
import { getGamesFromFirestore } from '@/lib/firebase/games';

export default function ScheduleClient({division}) {

    const [selectedWeek, setSelectedWeek] = useState(1);
    const [selectedTeamId, setSelectedTeamId] = useState("All");
    const [teams, setTeams] = useState([]);
    const [games, setGames] = useState([]);

    useEffect(() => {
              async function loadTeams() {
                  const data = await getTeamsFromFirestore(division);
                  console.log("Firestore teams:", data);
                  setTeams(data);
              }

              async function loadGames() {
                  const data = await getGamesFromFirestore(division);
                  console.log("Firestore Games:", data);
                  setGames(data);

              }
              loadTeams();
              loadGames();
      }, [division]);
    


    return (
        <div className="">
            <ScheduleFilter
                division={division}
                week={selectedWeek}
                teamId={selectedTeamId}
                setWeek={setSelectedWeek}
                setTeam={setSelectedTeamId}
                teams={teams}
            />

            <ScheduleTable
                division={division}
                week={selectedWeek}
                teamId={selectedTeamId}
                teams={teams}
                games={games} />
        </div>
      )

}