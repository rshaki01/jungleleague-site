"use client"
import {useState, useEffect} from 'react';
import ScoresFilter from '././ScoresFilter';
import ScoresTable from './ScoresTable';
import { getTeamsFromFirestore } from '@/lib/firebase/teams';
import { getGamesFromFirestore } from '@/lib/firebase/games';


export default function ScoresClient({division, initialTeams, initialGames, initialPlayers}) {

    const [selectedWeek, setSelectedWeek] = useState(1);
    const [selectedTeamId, setSelectedTeamId] = useState("All");
    const [teams, setTeams] = useState(initialTeams);
    const [games, setGames] = useState(initialGames);
    const [players, setPlayers] =useState(initialPlayers)

    // useEffect(() => {
    //               async function loadTeams() {
    //                   const data = await getTeamsFromFirestore(division);
    //                   console.log("Firestore teams:", data);
    //                   setTeams(data);
    //               }
    
    //               async function loadGames() {
    //                   const data = await getGamesFromFirestore(division);
    //                   console.log("Firestore Games:", data);
    //                   setGames(data);
    
    //               }
    //               loadTeams();
    //               loadGames();
    //       }, [division]);


    return (
        <div className="">
            <ScoresFilter
                division={division}
                week={selectedWeek}
                team={selectedTeamId}
                setWeek={setSelectedWeek}
                setTeam={setSelectedTeamId}
                teams={teams}
            />
            <ScoresTable division={division} week={selectedWeek} teamId={selectedTeamId} teams={teams} games={games} players={players}/>
        </div>
      )

}