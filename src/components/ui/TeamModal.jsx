"use client"
import {useState} from 'react';
import { mockStandings } from '@/lib/data/mockStandings';
import { mockPlayerAggregates } from '@/lib/data/mockPlayerAggregates';
import { getTeamById, getPlayersByTeamId } from '@/lib/data/helpers';

export default function TeamModal({open, onClose, teamID}) {

     if (!open) return null

     const players = getPlayersByTeamId(teamID);
     const team = getTeamById(teamID);

     // bg-gradient-to-br from-blue-400/10 to-blue-600/10 border border-blue-400/20

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 flex items-center justify-center" onClick={onClose}>
          <div className="max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 m-8 p-8 rounded-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between py-2 w-full bg-blue-500 hover:bg-blue-400 text-white font-bold  px-4 rounded">
              <div className='flex flex-col'>
                <h1 className="text-slate-50 text-xl font-bold text-shadow-lg">{team.name}</h1>
                <span className='text-sm items-align '>({team.wins} - {team.losses})</span>
              </div>
              <button className="text-slate-50 cursor-pointer flex items-align " onClick=      {onClose}>x</button>
            </div>
            <div className='my-2 gap-2'>
              <form >
                <label className="block mb-2 text-slate-400">Name</label>
                <input className="rounded-lg border border-gray-700 bg-transparent w-full p-2 text-slate-300 hover:bg-slate-800" type="text" 
                />
                <div className='grid grid-cols-1 md:grid-cols-2 my-2 gap-3'>

             
                </div>
      
              </form>
            </div>
          </div>
    
        </div>
      )

}