"use client"

import { useState } from "react";
import { getTeamById, getGames, getTeamsByDivision, getPlayersByTeamId, getGamesByWeekAndTeam, getGamesByWeek } from "@/lib/data/helpers";

export default function ScheduleTable({division, week, teamId}) {

  
  const games = getGames(division,week,teamId);

  return (
    <div className="w-full m-auto mt-5">
        
        {/* Table Head */}
 
        <p>{division} {week} {teamId} </p>
        {/* Table Body - dynamically display each row*/}
        {games.map((game) => (<div key={game.id}  className="flex flex-col gap-3 p-5 mb-5 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl overflow-hidden text-xs font-semibold hover:bg-gray-700/30 transition-all duration-200 cursor-pointer">
            <div className="flex gap-3 border-b border-gray-100/30 mx-auto">
              <div className="text-xl pb-2 text-center">{getTeamById(game.homeTeamId).name}</div>
              <div className="text-xl bg-gradient-to-br from-yellow-400 to-yellow-300 bg-clip-text text-transparent">vs</div>
              <div className="text-xl text-center">{getTeamById(game.awayTeamId).name}</div>
            </div>
            
            <div className="flex gap-3 mx-auto text-gray-400/80">
              <div className="">Week: {game.week}</div>
              <div className="">Date: {game.date}</div>
              <div className="">Time: {game.time}</div>
            </div>
            
        </div>)
        )}        
    </div>
  );
}
