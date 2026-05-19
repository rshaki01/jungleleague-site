"use client"

import { useState, useEffect } from "react";
import TeamModal from "./TeamModal";
import { getTeamsFromFirestore } from "@/lib/firebase/teams";
import { getPlayersFromFirestore } from "@/lib/firebase/players";
import { sortTeamsByWinsThenDiff } from "@/lib/data/helpers";

export default function StandingsTable({division, initialTeams, initialPlayers}) {

  const [teams, setTeams] = useState(sortTeamsByWinsThenDiff(initialTeams));
  const [players,setPlayers] = useState(initialPlayers);
  const [showModal, setShowModal] = useState(false);
  const [teamID, setTeamID] = useState('');

//   useEffect(() => {
//           async function loadTeams() {
//               const data = await getTeamsFromFirestore(division);
//               console.log("Firestore teams:", data);
//               setTeams(sortTeamsByWinsThenDiff(data));
//           }
        
//           async function loadPlayers() {
//               const data = await getPlayersFromFirestore(division);
//               setPlayers(data);
//           }
//           loadTeams();
//           loadPlayers();
//   }, [division]);

  {/* Get Mock Teams */}
  // const teams = mockStandings.filter((team) => team.division === division);


  return (
    <div className="w-full m-auto mt-5 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl overflow-hidden">
        <TeamModal open={showModal} onClose={() => setShowModal(false)} teamID={teamID} teams={teams} players={players}/>
        
        {/* Table Head */}
        <div className="hidden sm:grid grid-cols-7 gap-4 p-3 text-xs md:text-sm font-semibold text-gray-300 bg-gradient-to-br from-blue-400/10 to-blue-600/10 ">
            <div className="col-span-3 ">Team</div>
            <div className="col-span-1 text-center">W</div>
            <div className="col-span-1 text-center">L</div>
            <div className="col-span-1 text-center">PCT</div>        
            <div className="col-span-1 text-center  lg:block">DIFF</div>
            
        </div>

        {/* Table Body - dynamically display each row*/}
        {teams.map((team, index) => (<div key={team.id} onClick={() => { setShowModal(true); setTeamID(team.id)}} className="grid grid-cols-7 p-3 gap-4 border-b border-gray-500/30 text-xs font-semibold hover:bg-gray-700/30 transition-all duration-200 cursor-pointer">
            <div className="col-span-3 ">{`#${index+1} ${team.name}`}</div>
            <div className="col-span-1 text-center text-green-400">{team.wins}</div>
            <div className="col-span-1 text-center text-red-400">{team.losses}</div>
            <div className="col-span-1 text-center">{team.pct}</div>
            <div className="col-span-1 text-center  lg:block">{team.diff}</div>
        </div>)
        )}        
    </div>
  );
}
