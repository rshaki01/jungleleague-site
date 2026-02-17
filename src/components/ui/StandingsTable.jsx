"use client"

export default function StandingsTable() {
  const teams = [
    { name: "East End Eagles", wins: 8, losses: 2, pct: ".800", diff: "+42", streak: "W3" },
    { name: "Northside Titans", wins: 7, losses: 3, pct: ".700", diff: "+28", streak: "W1" },
    { name: "Downtown Ballers", wins: 5, losses: 5, pct: ".500", diff: "-3", streak: "L2" },
    { name: "Westside Wolves", wins: 3, losses: 7, pct: ".300", diff: "-35", streak: "L4" },
  ];

  return (
    <div className="w-full m-auto mt-5 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden">
      
        
        {/* Table Head */}

        <div className="hidden sm:grid grid-cols-8 gap-4 p-3 text-xs md:text-sm font-semibold text-gray-300 bg-gradient-to-br from-blue-400/10 to-blue-600/10 ">
            <div className="col-span-3 ">Team</div>
            <div className="col-span-1 text-center">W</div>
            <div className="col-span-1 text-center">L</div>
            <div className="col-span-1 text-center">PCT</div>
            
            <div className="col-span-1 text-center  lg:block">DIFF</div>
            <div className="col-span-1 text-center">STREAK</div>
            
        </div>

        {/* Table Body */}
        {teams.map((team) => (<div className="grid grid-cols-8 p-3 gap-4 text-xs font-semibold hover:bg-gray-700/30 transition-all duration-200 cursor-pointer">
            <div className="col-span-3 ">{team.name}</div>
            <div className="col-span-1 text-center">{team.wins}</div>
            <div className="col-span-1 text-center">{team.losses}</div>
            <div className="col-span-1 text-center">{team.pct}</div>
            
            <div className="col-span-1 text-center  lg:block">{team.diff}</div>
            <div className="col-span-1 text-center">{team.streak}</div>
            
        </div>)
        )}
        
        
    </div>
  );
}
