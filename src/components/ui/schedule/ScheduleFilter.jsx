"use client"
import {useState} from 'react';
import { mockStandings } from '@/lib/data/mockStandings';
import { getTeamsByDivision } from '@/lib/data/helpers';

export default function ScheduleFilter({division}) {

    const teams = getTeamsByDivision(division);

    return (
        <div className="mt-5 m-auto w-full bg-gradient-to-b from-yellow-300/80 to-yellow-500/80 rounded-xl p-5" >
          {/* Heading */}
          <div className="flex">
            <span className="font-semibold text-shadow-lg text-base border-b border-black/20 w-full pb-1">Filters </span>
          </div>
          {/*Dropbox input for filters */}
          <div className="mt-3 flex flex-col gap-2">
            <label className="font-semibold text-shadow-sm text-black">WEEK</label>
            <select className="w-full px-4 py-2 bg-gray-200/80 border border-orange-200/50 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="1">Week 1</option>
                <option value="2">Week 2</option>
                <option value="3">Week 3</option>
                <option value="4">Week 4</option>
                <option value="5">Week 5</option>
                <option value="6">Week 6</option>
                <option value="7">Week 7</option>
                <option value="8">Week 8</option>
                <option value="9">Week 9</option>
                <option value="10">Week 10</option></select>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            <label className="font-semibold  text-shadow-sm text-black">TEAM</label>
            <select className="w-full px-4 py-2 bg-gray-200/80 border border-orange-200/50 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-yellow-400">
                <option value="1">All teams</option>
                {teams.map((team, index) => <option value={index+2} key={team.id}>{team.name}</option>)}
            </select>
          </div>
        </div>
      )

}