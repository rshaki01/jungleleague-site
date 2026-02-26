"use client"
import {useState} from 'react';
import { mockStandings } from '@/lib/data/mockStandings';
import { mockPlayerAggregates } from '@/lib/data/mockPlayerAggregates';
import { getTeamById, getPlayersByTeamId } from '@/lib/data/helpers';
import TeamTable from './TeamTable';

export default function TeamModal({open, onClose, teamID}) {

     if (!open) return null

     const players = getPlayersByTeamId(teamID);
     const team = getTeamById(teamID);

     // bg-gradient-to-br from-blue-400/10 to-blue-600/10 border border-blue-400/20

    return (
        <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm transition-opacity duration-500 flex items-center justify-center " onClick={onClose}>
          <div className="max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-zinc-900 to-black  m-8 p-8 rounded-xl border border-gray-500/50" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between py-2 w-full bg-gradient-to-br from-yellow-300/80 to-yellow-600/80 border border-yellow-400/20 text-white font-bold  px-4 rounded">
              <div className='flex flex-col'>
                <h1 className="text-slate-50 text-xl font-bold text-shadow-lg">{team.name}</h1>
                <span className='text-sm items-align '>({team.wins} - {team.losses})</span>
                
              </div>         
            </div>
            <TeamTable teamID={teamID}/>

          </div>

    
        </div>
      )

}