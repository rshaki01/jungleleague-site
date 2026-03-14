"use client"
import { useState } from 'react';
import { mockStandings } from '@/lib/data/mockStandings';
import { getTeamsByDivision } from '@/lib/data/helpers';

export default function StatisticsFilter({division, searchTerm, setSearchTerm}) {

    return (
        <div className="mt-5 m-auto w-full bg-gradient-to-b from-yellow-300/80 to-yellow-500/80 rounded-xl p-5" >
          {/* Heading */}
          <div className="flex">
            <span className="font-semibold text-shadow-lg text-base border-b border-black/20 w-full pb-1">Search & Filter</span>
          </div>
          {/*Search input for filtering by player */}
          
          <div className="mt-3 flex flex-col gap-2">
            <input 
                type="text"
                placeholder="Search players..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} className="w-full px-4 py-3 bg-gray-200/80 border border-orange-200/50  rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>
      )

}