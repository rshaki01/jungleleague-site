"use client"
import { getTeamById } from "@/lib/data/helpers";


export default function SearchResultsDropDown({resultedPlayers, onSelectPlayer, teams}) {
   
    return (
        <div className=" ">
            {resultedPlayers.map((p) => <div key={p.id} className="flex flex-col  w-full rounded-md mt-2 p-2 text-sm font-semibold  bg-gradient-to-br from-yellow-400/50 to-yellow-600/90 border border-yellow-400/90 hover:bg-gray-700/30 transition-all duration-200 cursor-pointer">
                <div className="flex flex-col" onClick={() => onSelectPlayer(p)}>
                    <span>{p.name}</span>
                    <span className="text-xs text-black opacity-40">{getTeamById(p.teamId, teams).name}</span>
                </div>
            </div>
            )}
        </div>
      )

}


