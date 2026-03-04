"use client"

import { useState } from "react";
import { getTeamById, getTeamsByDivision, getPlayersByTeamId, getGamesByWeekAndTeam } from "@/lib/data/helpers";

export default function ScheduleTable({division, week, teamId}) {


  const games = getGamesByWeekAndTeam(week, teamId);

  return (
    <div className="w-full m-auto mt-5 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl overflow-hidden">
        
        {/* Table Head */}
 

        {/* Table Body - dynamically display each row*/}
        {games.map((game) => (<div key={game.id}  className="flex gap-3 border-b border-gray-500/30 text-xs font-semibold hover:bg-gray-700/30 transition-all duration-200 cursor-pointer">
            <div className="">{game.id}</div>
            <div className="">{game.homeTeamId}</div>
            <div className="">{game.awayTeamId}</div>
            <div className="">{game.week}</div>
            <div className="">{game.date}</div>
            <div className="">{game.time}</div>

          
        </div>)
        )}        
    </div>
  );
}
