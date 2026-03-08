"use client"

import { useState } from "react";
import { getTeamById, getGames, getTeamsByDivision, getPlayersByTeamId, getGamesByWeekAndTeam, getGamesByWeek } from "@/lib/data/helpers";

export default function ScoresTable({division, week, teamId}) {

  
  const games = getGames(division,week,teamId);

  return (
    <div className="w-full m-auto mt-5">
        
        {/* Table Head */}
 
        <p>{division} {week} {teamId} </p>
        {/* Table Body - dynamically display each row*/}
        {games.map((game) => (<div key={game.id}  className="flex flex-col gap-3 w- p-5 mb-5 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl border border-yellow-400/20 overflow-hidden text-xs font-semibold hover:bg-gray-700/30 transition-all duration-200 cursor-pointer">
            
            <div className="flex gap-3 pb-2 border-b border-gray-100/30 text-xs mx-auto text-gray-400/80">
              <div className="">Week: {game.week}</div>
              <div className="">Date: {game.date}</div>
              <div className="">Time: {game.time}</div>
            </div>
            
            <div className="flex flex-col gap-3 mx-auto w-5/6 justify-between text-base">
              <div className="pb-2 flex justify-between">
                <span>{getTeamById(game.homeTeamId).name}</span>
                <span>{game.homeScore}</span>
              </div>
              <div className="flex justify-between">
                <span>{getTeamById(game.awayTeamId).name}</span>
                <span>{game.awayScore}</span>
              </div>
            </div>

      
            
            
            
        </div>)
        )}        
    </div>
  );
}
