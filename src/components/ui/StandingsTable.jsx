"use client"

import { useState } from "react";
import TeamModal from "./TeamModal";

export default function StandingsTable() {

  const [showModal, setShowModal] = useState(false);

  const teams = [
    { name: "East End Eagles", wins: 8, losses: 2, pct: ".800", diff: "+42", streak: "W3" },
    { name: "Northside Titans", wins: 7, losses: 3, pct: ".700", diff: "+28", streak: "W1" },
    { name: "Downtown Ballers", wins: 5, losses: 5, pct: ".500", diff: "-3", streak: "L2" },
    { name: "Westside Wolves", wins: 3, losses: 7, pct: ".300", diff: "-35", streak: "L4" },
    { name: "Scarborough Storm", wins: 9, losses: 1, pct: ".900", diff: "+61", streak: "W5" },
    { name: "Midtown Monarchs", wins: 6, losses: 4, pct: ".600", diff: "+14", streak: "W2" },
    { name: "Southside Spartans", wins: 4, losses: 6, pct: ".400", diff: "-12", streak: "L1" },
    { name: "Uptown Underdogs", wins: 2, losses: 8, pct: ".200", diff: "-58", streak: "L6" },
    { name: "Central City Kings", wins: 6, losses: 4, pct: ".600", diff: "+9", streak: "W1" },
    { name: "Harbour Heat", wins: 5, losses: 5, pct: ".500", diff: "+2", streak: "W3" },
  ];

  return (
    <div className="w-full m-auto mt-5 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl overflow-hidden">
      
        <TeamModal open={showModal} />
        
        {/* Table Head */}

        <div className="hidden sm:grid grid-cols-8 gap-4 p-3 text-xs md:text-sm font-semibold text-gray-300 bg-gradient-to-br from-blue-400/10 to-blue-600/10 ">
            <div className="col-span-3 ">Team</div>
            <div className="col-span-1 text-center">W</div>
            <div className="col-span-1 text-center">L</div>
            <div className="col-span-1 text-center">PCT</div>
            
            <div className="col-span-1 text-center  lg:block">DIFF</div>
            <div className="col-span-1 text-center">STREAK</div>
            
        </div>

        {/* Table Body - dynamically display each row*/}
        {teams.map((team, index) => (<div key={index} onClick={setShowModal(true)} className="grid grid-cols-8 p-3 gap-4 border-b border-gray-500/30 text-xs font-semibold hover:bg-gray-700/30 transition-all duration-200 cursor-pointer">
            
            <div className="col-span-3 ">{`#${index+1} ${team.name}`}</div>
            <div className="col-span-1 text-center text-green-400">{team.wins}</div>
            <div className="col-span-1 text-center text-red-400">{team.losses}</div>
            <div className="col-span-1 text-center">{team.pct}</div>
            <div className="col-span-1 text-center  lg:block">{team.diff}</div>
            <div className="col-span-1 text-center text-gray-400">{team.streak}</div>
            
        </div>)
        )}
        {console.log(showModal)}
        
        
        
    </div>
  );
}
