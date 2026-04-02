"use client"

import { getPlayersSortedByPoints, getTeamById } from "@/lib/data/helpers"

export default function StatisticsTable({players, teams}) {

  const sortedPlayers = getPlayersSortedByPoints(players).slice(0,10);
  const topNinePlayers = sortedPlayers.slice(1,10);

  return (
    <div className="w-full m-auto mt-5  p-3 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/30 border border-yellow-400/20">
      
      {/* Header that includes leader*/}
      <div className="font-semibold  overflow-hidden">
        <div className="border-b border-gray-300 py-1 text-sm sm:text-base">POINTS PER GAME</div>
        <div className="pt-2 text-sm flex justify-between">
          <span>
            {sortedPlayers.length > 1 ? sortedPlayers[0].name : ''}
          </span>
          <span>
            {sortedPlayers.length > 1 ? sortedPlayers[0].ppg : '' }
          </span>
        </div>
        <span className="text-[9px] text-yellow-500/60">{sortedPlayers.length > 1 ?  getTeamById(sortedPlayers[0].teamId, teams).name : ''}</span>
      </div>

      {/* Rows */}
      <div className="bg-slate-900 rounded-md">
        {topNinePlayers.map((p) =>
        <div key={p.id} className="w-full p-2  text-xs font-semibold border-b pb-2 border-gray-300/30 ">
          <div className="flex justify-between">
            <div >{p.name}</div>
            <div>{p.ppg}</div>
          </div>
            
        </div>
        )}
      </div>
      

      
     

      

    </div>
  )
}