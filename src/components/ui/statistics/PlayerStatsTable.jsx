import React from 'react'

export default function PlayerStatsTable({player}) {

  console.log(player);

  return (
    <div className="mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{player.ppg}</div>
            <div className="text-gray-400 font-semibold text-xs">PPG</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{player.rpg}</div>
            <div className="text-gray-400 font-semibold text-xs">RPG</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{player.apg}</div>
            <div className="text-gray-400 font-semibold text-xs">APG</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{player.spg}</div>
            <div className="text-gray-400 font-semibold text-xs">SPG</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{player.bpg}</div>
            <div className="text-gray-400 font-semibold text-xs">BPG</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{player.fgPct}%</div>
            <div className="text-gray-400 font-semibold text-xs">FG%</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{player.tpPct}%</div>
            <div className="text-gray-400 font-semibold text-xs">3P%</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1 ">{player.ftPct}%</div>
            <div className="text-gray-400 font-semibold text-xs">FT%</div>
        </div>

    </div>
  )
}

