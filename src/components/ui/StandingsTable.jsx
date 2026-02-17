"use client"

export default function StandingsTable() {
  const teams = [
    { name: "East End Eagles", wins: 8, losses: 2, pct: ".800", diff: "+42", streak: "W3" },
    { name: "Northside Titans", wins: 7, losses: 3, pct: ".700", diff: "+28", streak: "W1" },
    { name: "Downtown Ballers", wins: 5, losses: 5, pct: ".500", diff: "-3", streak: "L2" },
    { name: "Westside Wolves", wins: 3, losses: 7, pct: ".300", diff: "-35", streak: "L4" },
  ];

  return (
    <div className="w-1/2 m-auto bg-zinc-800 rounded-xl overflow-hidden">
      
        
        {/* Table Head */}

        <div className="hidden sm:grid grid-cols-9 gap-4 p-4 text-xs md:text-sm font-semibold text-gray-300">
            <div className="col-span-3">Team</div>
            <div className="col-span-1 text-center">W</div>
            <div className="col-span-1 text-center">L</div>
            <div className="col-span-1 text-center">PCT</div>
            
            <div className="col-span-1 text-center hidden lg:block">DIFF</div>
            <div className="col-span-1 text-center">STRK</div>
            <div className="col-span-1 text-center hidden sm:block">L5</div>
        </div>

        <div className="  hover:bg-gray-700/30 transition-all duration-200 cursor-pointer">
            <div className="px-4">text</div>
        </div>

        <div className="  hover:bg-gray-700/30 transition-all duration-200 cursor-pointer ">
            <div className="px-4">text</div>
        </div>

       
        
        {/* Table Body */}
        
    </div>
  );
}
