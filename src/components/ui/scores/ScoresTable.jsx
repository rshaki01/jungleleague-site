"use client"

import { useState } from "react";
import { getTeamById, getGames, getPlayerByPlayerId, getPlayersByTeamId, getGamesByWeekAndTeam, getGamesByWeek } from "@/lib/data/helpers";

export default function ScoresTable({division, week, teamId}) {

  const [openGameId, setOpenGameId] = useState(null);

  
  const games = getGames(division,week,teamId);

  console.log(games);
  return (
    <div className="w-full m-auto mt-5">
        
        {/* Table Head */}
 
        <p>{division} {week} {teamId} </p>
        {/* Table Body - dynamically display each row*/}
        {games.map((game) => (<div key={game.id} className="flex flex-col gap-3 w- p-5 mb-5 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl border border-yellow-400/20 overflow-hidden text-xs font-semibold hover:bg-gray-800/20 transition-all duration-200">
            
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

            <button onClick={() => setOpenGameId(openGameId === game.id ? null : game.id)} className="flex mx-auto space-x-2 px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition-colors cursor-pointer"><span>Box Score</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 transition-transform "><path d="m6 9 6 6 6-6"></path></svg></button>

            {/* Box Score Dropdown */}
            {openGameId === game.id && (
            <div className="mt-3 border-t border-gray-700 pt-4 p-5 bg-blue-400/10 border rounded-lg">
              <div className="text-xl text-gray-300 mb-2 font-bold">
                {getTeamById(game.homeTeamId).name}
              </div>

              {/* Home Team Box Score */}
              {game.boxScore[game.homeTeamId].map((player) => (
                <div
                  key={player.playerId}
                  className="grid grid-cols-4 gap-2 text-sm text-gray-200 py-1"
                >
                  <span>{getPlayerByPlayerId(player.playerId).name}</span>
                  <span>PTS: {player.points}</span>
                  <span>REB: {player.rebounds}</span>
                  <span>AST: {player.assists}</span>
                </div>
              ))}
              
              <div className=" text-xl text-gray-300 mt-4 mb-2 font-bold">
                {getTeamById(game.awayTeamId).name}
              </div>

              {/* Home Team Box Score */}
              {game.boxScore[game.awayTeamId].map((player) => (
                <div
                  key={player.playerId}
                  className="grid grid-cols-4 gap-2 text-sm text-gray-200 py-1"
                >
                  <span>{getPlayerByPlayerId(player.playerId).name}</span>
                  <span>PTS: {player.points}</span>
                  <span>REB: {player.rebounds}</span>
                  <span>AST: {player.assists}</span>
                </div>
              ))}
            </div>
          )}
          
        </div>)
        )}        
    </div>
  );
}
