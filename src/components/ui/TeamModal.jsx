"use client"
import { getPlayersByTeamId, getTeamById } from '@/lib/data/helpers';
import TeamTable from './TeamTable';

export default function TeamModal({open, onClose, teamID, teams, players}) {

    const team = getTeamById(teamID, teams);
    const teamPlayers = getPlayersByTeamId(teamID, players);
    if (!open) return null

    return (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm transition-opacity duration-500 flex items-center justify-center" onClick={onClose}>
          <div className="max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-zinc-900 to-black  m-8 p-8 rounded-xl border border-gray-500/50" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between py-2 w-full bg-gradient-to-br from-yellow-300/80 to-yellow-600/80 border border-yellow-400/20 text-white font-bold  px-4 rounded">
              <div className='flex flex-col'>
                <h1 className="text-slate-50 text-xl font-bold text-shadow-lg">{team.name}</h1>
                <span className='text-sm items-align '>({team.wins} - {team.losses})</span>
                
              </div>         
            </div>
            <TeamTable players={teamPlayers}/>
          </div>
        </div>
      )

}