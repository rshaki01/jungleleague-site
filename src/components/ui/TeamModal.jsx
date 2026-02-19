"use client"
import {useState} from 'react';
import { mockStandings } from '@/lib/data/mockStandings';
import { mockPlayerAggregates } from '@/lib/data/mockPlayerAggregates';
import { getTeamById, getPlayersByTeamId } from '@/lib/data/helpers';

export default function TeamModal({open, onClose, teamID}) {

     if (!open) return null

     const team = getPlayersByTeamId(teamID);
     console.log (team);

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 flex items-center justify-center" onClick={onClose}>
          <div className="max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-slate-900 m-8 p-8 rounded-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between">
              <h1 className="text-slate-50 text-xl font-bold pb-4">Player: {team[1].name}</h1>
              <button className="text-slate-50 cursor-pointer" onClick={onClose}>x</button>
            </div>
            <div className='my-2 gap-2'>
              <form >
                <label className="block mb-2 text-slate-400">Name</label>
                <input className="rounded-lg border border-gray-700 bg-transparent w-full p-2 text-slate-300 hover:bg-slate-800" type="text" 
                />
                <div className='grid grid-cols-1 md:grid-cols-2 my-2 gap-3'>
                  
                    
             
                </div>
                <input type="submit" className="mt-8 w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" value="Add Expense"/>
              </form>
            </div>
          </div>
    
        </div>
      )

}