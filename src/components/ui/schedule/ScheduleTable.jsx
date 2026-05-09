"use client"

import { useState, useEffect } from "react";
import { getTeamById, getGames, getTeamsByDivision, getPlayersByTeamId, getGamesByWeekAndTeam, getGamesByWeek } from "@/lib/data/helpers";

export default function ScheduleTable({division, week, teamId, teams, games}) {

  
  const scheduledGames = getGames(division,week,teamId, games);

  return (
    <div className="w-full m-auto mt-5">
        
        {/* Table Head */}
 
        
        {/* Table Body - dynamically display each row*/}
        {scheduledGames.map((game) => (<div key={game.id}  className="flex flex-col gap-3 p-5 mb-5 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl border border-yellow-400/20 overflow-hidden text-xs font-semibold hover:bg-gray-700/30 transition-all duration-200">
            <div className="flex gap-3 border-b border-gray-100/30 mx-auto">
              <div className="text-xl pb-2 text-center">{getTeamById(game.homeTeamId, teams) != null ? getTeamById(game.homeTeamId, teams).name : ''}</div>
              <div className="text-xl bg-gradient-to-br from-yellow-400 to-yellow-300 bg-clip-text text-transparent">vs</div>
              <div className="text-xl text-center">{getTeamById(game.awayTeamId, teams) != null ? getTeamById(game.awayTeamId, teams).name : ''}</div>
            </div>
            
            <div className="flex gap-3 mx-auto text-gray-400/80">
              <div className="text-yellow-400">Week: {game.week}</div>
              <div className="text-blue-400">Date: {game.date}</div>
              <div className="text-red-400">Time: {game.time}</div>
            </div>
            
        </div>)
        )}        
    </div>
  );
}
