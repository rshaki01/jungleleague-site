"use client"

import { useState,  } from "react";
import { getTeamById, getGames, getPlayerByPlayerId } from "@/lib/data/helpers";

export default function ScoresTable({division, week, teamId, teams, games, players}) {

  const [openGameId, setOpenGameId] = useState(null);

  
  const filteredGames = getGames(division,week,teamId,games);

  return (
    <div className="w-full m-auto mt-5">
        
        {/* Table Head */}
 
        {/* <p>{division} {week} {teamId} </p> */}
        {/* Table Body - dynamically display each row*/}
        {filteredGames.map((game) => {

        const homeWon = game.homeScore > game.awayScore;
        const awayWon = game.awayScore > game.homeScore;
          
        return ( game.status == "completed" && (<div key={game.id} className="flex flex-col gap-3 w- p-5 mb-5 bg-gradient-to-br from-gray-800/50 to-gray-900/30 rounded-xl border border-yellow-400/20 overflow-hidden text-xs font-semibold hover:bg-gray-800/20 transition-all duration-200">

        
            
            <div className="flex gap-3 pb-2 border-b border-gray-100/30 text-xs mx-auto text-gray-400/80">
              <div className="">Week: {game.week}</div>
              <div className="">Date: {game.date}</div>
              <div className="">Time: {game.time}</div>
            </div>
            
            <div className="flex flex-col gap-3 mx-auto w-5/6 justify-between text-base">
              <div className="pb-2 flex justify-between">
                <span>{getTeamById(game.homeTeamId, teams).name}</span>
                <span className={homeWon ? "text-green-400 font-bold" : ""}>{game.homeScore}</span>
              </div>
              <div className="flex justify-between">
                <span>{getTeamById(game.awayTeamId, teams).name}</span>
                <span className={awayWon ? "text-green-400 font-bold" : ""}>{game.awayScore}</span>
              </div>
            </div>

            <button onClick={() => setOpenGameId(openGameId === game.id ? null : game.id)} className="flex mx-auto space-x-2 px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition-colors cursor-pointer"><span>Box Score</span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 transition-transform "><path d="m6 9 6 6 6-6"></path></svg></button>

            {/* Box Score Dropdown */}
            {openGameId === game.id && (
            <div className="mt-3 border-t border-gray-700 pt-4 space-y-5">

              {/* Home Team */}
              <div>
                <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2 px-1">
                  {getTeamById(game.homeTeamId, teams).name}
                </div>
                <div className="overflow-x-auto rounded-lg border border-gray-700/50">
                  <div className="min-w-[340px]">
                    <div className="grid grid-cols-8 gap-2 text-xs text-gray-400 uppercase tracking-wider px-3 py-2 border-b border-gray-700/60 bg-gray-800/60">
                      <span className="col-span-2">Player</span>
                      <span className="text-center">PTS</span>
                      <span className="text-center">REB</span>
                      <span className="text-center">AST</span>
                      <span className="text-center">STL</span>
                      <span className="text-center">BLK</span>
                      <span className="text-center">TO</span>
                    </div>
                    {game.boxScore[game.homeTeamId].map((player, i) => (
                      <div
                        key={player.playerId}
                        className={`grid grid-cols-8 gap-2 text-sm px-3 py-2 ${i % 2 === 0 ? "bg-white/5" : "bg-transparent"}`}
                      >
                        <span className="col-span-2 text-gray-200 truncate">{player.substitute && <span className="mr-1 text-yellow-400/70">★</span>}#{getPlayerByPlayerId(player.playerId, players).number} - {getPlayerByPlayerId(player.playerId, players).name}{player.substitute && <span className="ml-1 text-yellow-400/70 text-xs">(Sub)</span>}</span>
                        <span className="text-center text-gray-300">{player.pts}</span>
                        <span className="text-center text-gray-300">{player.reb}</span>
                        <span className="text-center text-gray-300">{player.ast}</span>
                        <span className="text-center text-gray-300">{player.stl}</span>
                        <span className="text-center text-gray-300">{player.blk}</span>
                        <span className="text-center text-gray-300">{player.to}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Away Team */}
              <div>
                <div className="text-xs font-bold text-yellow-400 uppercase tracking-widest mb-2 px-1">
                  {getTeamById(game.awayTeamId, teams).name}
                </div>
                <div className="overflow-x-auto rounded-lg border border-gray-700/50">
                  <div className="min-w-[340px]">
                    <div className="grid grid-cols-8 gap-2 text-xs text-gray-400 uppercase tracking-wider px-3 py-2 border-b border-gray-700/60 bg-gray-800/60">
                      <span className="col-span-2">Player</span>
                      <span className="text-center">PTS</span>
                      <span className="text-center">REB</span>
                      <span className="text-center">AST</span>
                      <span className="text-center">STL</span>
                      <span className="text-center">BLK</span>
                      <span className="text-center">TO</span>
                    </div>
                    {game.boxScore[game.awayTeamId].map((player, i) => (
                      <div
                        key={player.playerId}
                        className={`grid grid-cols-8 gap-2 text-sm px-3 py-2 ${i % 2 === 0 ? "bg-white/5" : "bg-transparent"}`}
                      >
                        <span className="col-span-2 text-gray-200 truncate">{player.substitute && <span className="mr-1 text-yellow-400/70">★</span>}#{getPlayerByPlayerId(player.playerId, players).number} - {getPlayerByPlayerId(player.playerId, players).name}{player.substitute && <span className="ml-1 text-yellow-400/70 text-xs">(Sub)</span>}</span>
                        <span className="text-center text-gray-300">{player.pts}</span>
                        <span className="text-center text-gray-300">{player.reb}</span>
                        <span className="text-center text-gray-300">{player.ast}</span>
                        <span className="text-center text-gray-300">{player.stl}</span>
                        <span className="text-center text-gray-300">{player.blk}</span>
                        <span className="text-center text-gray-300">{player.to}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-500 pt-1">★ = player substitute</p>
            </div>
          )}

        </div>)
        )})}        
    </div>
  );
}
