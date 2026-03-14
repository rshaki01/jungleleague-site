"use client"

import { useState } from "react"
import { getPlayersByDivision, getPlayersSortedByPoints, paginatePlayers } from "@/lib/data/helpers"

export default function StatisticsTable({division}) {

  const players = getPlayersByDivision(division);
  const sortedPlayers = getPlayersSortedByPoints(players).slice(0,10);

  return (
    <div className="w-full">

      {/* Header */}
      <div className="grid grid-cols-6 font-semibold border-b pb-2">
        <div>#</div>
        <div>Player</div>
        <div>Team</div>
        <div>PPG</div>
        <div>RPG</div>
        <div>APG</div>
      </div>

      {/* Rows */}
      {sortedPlayers.map((p) =>
        <div key={p.id} className="grid grid-cols-6 font-semibold border-b pb-2">
            <div>{p.name}</div>
            <div>{p.ppg}</div>
        </div>
      )}
     

      

    </div>
  )
}