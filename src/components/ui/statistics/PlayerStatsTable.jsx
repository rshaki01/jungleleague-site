import React from 'react'

export default function PlayerStatsTable({player}) {

  console.log(player);

  const ppg = player.gp > 0 ? (player.pts / player.gp).toFixed(1) : 0
  const rpg = player.gp > 0 ? (player.reb / player.gp).toFixed(1) : 0
  const apg = player.gp > 0 ? (player.ast / player.gp).toFixed(1) : 0
  const spg = player.gp > 0 ? (player.stl / player.gp).toFixed(1) : 0
  const bpg = player.gp > 0 ? (player.blk / player.gp).toFixed(1) : 0
  const fgm = (player.twoPm + player.tpm)
  const fga = (player.twoPa + player.tpa)
  const fgPct = fga > 0 ? (fgm / fga).toFixed(3) : 0
  const tpPct = player.tpa > 0 ? (player.tpm / player.tpa).toFixed(3) : 0
  const ftPct = player.fta > 0 ?(player.ftm / player.fta).toFixed(3) : 0


  return (
    <div className="mt-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{ppg}</div>
            <div className="text-gray-400 font-semibold text-xs">PPG</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{rpg}</div>
            <div className="text-gray-400 font-semibold text-xs">RPG</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{apg}</div>
            <div className="text-gray-400 font-semibold text-xs">APG</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{spg}</div>
            <div className="text-gray-400 font-semibold text-xs">SPG</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{bpg}</div>
            <div className="text-gray-400 font-semibold text-xs">BPG</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{fgPct}%</div>
            <div className="text-gray-400 font-semibold text-xs">FG%</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{tpPct}%</div>
            <div className="text-gray-400 font-semibold text-xs">3P%</div>
        </div>
        <div className="bg-gray-700/30 rounded-lg p-3 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">{ftPct}%</div>
            <div className="text-gray-400 font-semibold text-xs">FT%</div>
        </div>

    </div>
  )
}

