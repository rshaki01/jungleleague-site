"use client"
import { getTeamsByDivision } from '@/lib/data/helpers';

export default function ScoresFilter({division, week, team, setWeek, setTeam, teams}) {

    // Calculate weeks to display based on division selected
    const weeksInSeason = division === "recreational" ? 7 : 10;

    return (
        <div className="mt-5 m-auto w-full bg-gradient-to-b from-yellow-300/80 to-yellow-500/80 rounded-xl p-5" >
          {/* Heading */}
          <div className="flex">
            <span className="font-semibold text-shadow-lg text-base border-b border-black/20 w-full pb-1">Filters </span>
          </div>
          {/*Dropbox input for filters */}
          <div className="mt-3 flex flex-col gap-2">
            <label className="font-semibold text-shadow-sm text-black">WEEK</label>
            <select
            value={week}
            onChange={(e) => setWeek(Number(e.target.value))} 
            className="w-full px-4 py-2 bg-gray-200/80 border border-orange-200/50 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
                {Array.from({ length: weeksInSeason }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    Week {i + 1}
                  </option>
                ))}
                <option key={8} value={8}>
                    Quarter-Finals
                </option>
                <option key={9} value={9}>
                    Semi-Finals
                </option>
                <option key={10} value={10}>
                    Finals
                </option>
              </select>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <label className="font-semibold  text-shadow-sm text-black">TEAM</label>
            <select
            value={team}
            onChange={(e) => setTeam(e.target.value)} 
            className="w-full px-4 py-2 bg-gray-200/80 border border-orange-200/50 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="All">All teams</option>
                {teams.map((team) => <option value={team.id} key={team.id}>{team.name}</option>)}
            </select>
          </div>
        </div>
      )

}