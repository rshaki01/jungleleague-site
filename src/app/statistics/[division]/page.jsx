import StatisticsClient from "@/components/ui/statistics/StatisticsClient";
import { getPlayersFromFirestore } from '@/lib/firebase/players';
import { getTeamsFromFirestore } from '@/lib/firebase/teams';


export default async function StatisticsPage({ params }) {
   const { division } = await params;
   
   const players = await getPlayersFromFirestore(division);
   const teams = await getTeamsFromFirestore(division);

           
  return (
    
    <div className="min-h-screen max-w-6xl px-3 mx-auto text-white">
      <h1 className="mt-10 flex justify-center text-3xl font-bold bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-transparent text-center">
        {division === "competitive"
          ? "Competitive Stats"
          : "Player Statistics"}
      </h1>
      <p className="my-3 text-xs sm:text-sm text-gray-300 max-w-3xl mx-auto text-center">View the current leaders and player statistics. For player information, search and click on any player.</p>
      <StatisticsClient division={division} initialPlayers={players} initialTeams={teams}/>
      
    </div>
  );
}
