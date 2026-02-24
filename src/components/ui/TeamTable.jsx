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
            <div key={player.id} className="hidden sm:grid grid-cols-6 gap-4 p-3 text-xs md:text-sm font-semibold text-gray-300 border-b border-gray-500/30 ">
                <div className="col-span-2">{player.name}</div>
                <div className="col-span-1 text-center">{player.ppg}</div>
                <div className="col-span-1 text-center">{player.rpg}</div>
                <div className="col-span-1 text-center">{player.apg}</div>        
                <div className="col-span-1 text-center">{player.gp}</div>
            </div>)
            )}
                  
        </div>   
    )

}