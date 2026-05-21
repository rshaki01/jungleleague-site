"use client"

export default function TeamTable({players}) {

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
            {players.map((player) => {
                
                // calculate per game stats and set to 0 if games played = 0
                const ppg = player.gp > 0 ? (player.pts / player.gp).toFixed(1) : 0
                const rpg = player.gp > 0 ? (player.reb / player.gp).toFixed(1) : 0
                const apg = player.gp > 0 ? (player.ast / player.gp).toFixed(1) : 0

                return (
                <div key={player.id} className="hidden sm:grid grid-cols-6 gap-4 p-3 text-xs md:text-sm font-semibold text-gray-300 border-b border-gray-500/30">
                    <div className="col-span-2">#{player.number} - {player.name}</div>
                    <div className="col-span-1 text-center">{ppg}</div>
                    <div className="col-span-1 text-center">{rpg}</div>
                    <div className="col-span-1 text-center">{apg}</div>        
                    <div className="col-span-1 text-center">{player.gp}</div>
                </div>)
            })}
            
            {/* Mobile Table Body - dynamically display each row*/}
            {players.map((player) => { 

                 // calculate per game stats and set to 0 if games played = 0
                const ppg = player.gp > 0 ? (player.pts / player.gp).toFixed(1) : 0
                const rpg = player.gp > 0 ? (player.reb / player.gp).toFixed(1) : 0
                const apg = player.gp > 0 ? (player.ast / player.gp).toFixed(1) : 0
                
                return (
                <div key={player.id} className="flex flex-col sm:hidden gap-1 p-3 text-xs md:text-sm font-semibold border-b border-gray-500/30">
                    <div className="col-span-2 flex gap-2">
                        {player.name}
                        <span className="text-yellow-300/80">#{player.number}</span>
                    </div>
                    <div className="col-span-1 text-center flex gap-2 text-green-400">PPG:
                        <span className="text-gray-100 font-normal">{ppg}</span>
                    </div>
                    <div className="col-span-1 text-center flex gap-2 text-blue-400">RPG:
                        <span className="text-gray-100 font-normal">{rpg}</span>
                    </div>
                    <div className="col-span-1 text-center flex gap-2 text-orange-400">APG:
                        <span className="text-gray-100 font-normal">{apg}</span>
                    </div>
                    <div className="col-span-1 text-center flex gap-2 text-red-400">GP:
                        <span className="text-gray-100 font-normal">{player.gp}</span>
                    </div>
                </div>)
            })}
                  
        </div>   
    )

}