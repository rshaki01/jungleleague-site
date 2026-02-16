export default function StandingsTable() {
  const teams = [
    { name: "East End Eagles", wins: 8, losses: 2, pct: ".800", diff: "+42", streak: "W3" },
    { name: "Northside Titans", wins: 7, losses: 3, pct: ".700", diff: "+28", streak: "W1" },
    { name: "Downtown Ballers", wins: 5, losses: 5, pct: ".500", diff: "-3", streak: "L2" },
    { name: "Westside Wolves", wins: 3, losses: 7, pct: ".300", diff: "-35", streak: "L4" },
  ];

  return (
    <div className="mx-0 flex justify-center bg-[rgb(200, 154, 154)] p-6 border-4 border border-white">
      <table className="w-1/2 border-collapse text-left text-sm md:text-base">
        
        {/* Table Head */}
        <thead className="border-b border-white/10  uppercase text-xs tracking-wider">
          <tr>
            <th className="px-6 py-4">Team</th>
            <th className="px-6 py-4 text-center">Wins</th>
            <th className="px-6 py-4 text-center">Losses</th>
            <th className="px-6 py-4 text-center">PCT</th>
            <th className="px-6 py-4 text-center">Diff</th>
            <th className="px-6 py-4 text-center">Streak</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {teams.map((team, index) => (
            <tr
              key={team.name}
              className="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              {/* Team Name */}
              <td className="px-6 py-4 font-semibold">
                <span className="bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  {team.name}
                </span>
              </td>

              {/* Wins */}
              <td className="px-6 py-4 text-center font-medium text-green-400">
                {team.wins}
              </td>

              {/* Losses */}
              <td className="px-6 py-4 text-center font-medium text-red-400">
                {team.losses}
              </td>

              {/* Percentage */}
              <td className="px-6 py-4 text-center font-medium text-white">
                {team.pct}
              </td>

              {/* Point Differential */}
              <td
                className={`px-6 py-4 text-center font-medium ${
                  team.diff.startsWith("+") ? "text-green-400" : "text-red-400"
                }`}
              >
                {team.diff}
              </td>

              {/* Streak */}
              <td className="px-6 py-4 text-center font-semibold text-yellow-400">
                {team.streak}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
