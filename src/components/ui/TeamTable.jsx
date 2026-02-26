"use client"
import {useState} from 'react';
import { mockStandings } from '@/lib/data/mockStandings';
import { mockPlayerAggregates } from '@/lib/data/mockPlayerAggregates';
import { getTeamById, getPlayersByTeamId } from '@/lib/data/helpers';

export default function TeamTable({teamID}) {

     if (!open) return null

     const players = getPlayersByTeamId(teamID);

     // bg-gradient-to-br from-blue-400/10 to-blue-600/10 border border-blue-400/20

    return (
        <div className="w-full m-auto mt-5 bg-gradient-to-br from-blue-400/10 to-blue-600/10 border border-blue-400/20 rounded-xl overflow-hidden"> 
            
            {/* Table Head */}
            <div className="hidden sm:grid grid-cols-6 gap-4 p-3 text-xs md:text-sm font-semibold text-gray-300 bg-gradient-to-br from-blue-400/10 to-blue-600/10 ">
                <div className="col-span-2">Player</div>
                <div className="col-span-1 text-center">PPG</div>
                <div className="col-span-1 text-center">RPG</div>
                <div className="col-span-1 text-center">APG</div>        
                <div className="col-span-1 text-center">GP</div>
            </div>
    
            {/* Table Body - dynamically display each row*/}
            {players.map((player) => (
            <div key={player.id} className="hidden sm:grid grid-cols-6 gap-4 p-3 text-xs md:text-sm font-semibold text-gray-300 border-b border-gray-500/30">
                <div className="col-span-2">{player.name}</div>
                <div className="col-span-1 text-center">{player.ppg.toFixed(1)}</div>
                <div className="col-span-1 text-center">{player.rpg.toFixed(1)}</div>
                <div className="col-span-1 text-center">{player.apg.toFixed(1)}</div>        
                <div className="col-span-1 text-center">{player.gp}</div>
            </div>)
            )}
            
            {/* Mobile Table Body - dynamically display each row*/}
            {players.map((player) => (
            <div key={player.id} className="flex flex-col sm:hidden gap-1 p-3 text-xs md:text-sm font-semibold border-b border-gray-500/30">
                <div className="col-span-2 flex gap-2">
                    {player.name}
                    <span className="text-yellow-300/80">#{player.number}</span>
                </div>
                <div className="col-span-1 text-center flex gap-2 text-green-400">PPG:
                    <span className="text-gray-100 font-normal">{player.ppg.toFixed(1)}</span>
                </div>
                <div className="col-span-1 text-center flex gap-2 text-blue-400">RPG:
                    <span className="text-gray-100 font-normal">{player.rpg.toFixed(1)}</span>
                </div>
                <div className="col-span-1 text-center flex gap-2 text-orange-400">APG:
                    <span className="text-gray-100 font-normal">{player.apg.toFixed(1)}</span>
                </div>
                <div className="col-span-1 text-center flex gap-2 text-red-400">GP:
                    <span className="text-gray-100 font-normal">{player.gp}</span>
                </div>
            </div>)
            )}
                  
        </div>   
    )

}