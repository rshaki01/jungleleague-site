"use client"

import { useState } from "react";
import { getTeamById, getTeamsByDivision, getPlayersByTeamId, getGamesByWeekAndTeam } from "@/lib/data/helpers";

export default function ScheduleTable({division, week, teamId}) {


  const games = getGamesByWeekAndTeam(week, teamId);
  console.log(games);

  return (
    <div className="w-full m-auto mt-5 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl overflow-hidden">
        
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
        {games.map((game) => (<div key={game.id}  className="grid grid-cols-8 p-3 gap-4 border-b border-gray-500/30 text-xs font-semibold hover:bg-gray-700/30 transition-all duration-200 cursor-pointer">
            <div className="col-span-3 ">{game.id}</div>
            <div className="col-span-1 text-center text-green-400">{game.id}</div>
            <div className="col-span-1 text-center text-red-400">{game.id}</div>
            <div className="col-span-1 text-center">{game.id}</div>
            <div className="col-span-1 text-center  lg:block">{game.id}</div>
            <div className="col-span-1 text-center text-gray-400">{game.id}</div>
        </div>)
        )}        
    </div>
  );
}
