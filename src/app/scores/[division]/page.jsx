import ScoresClient from "@/components/ui/scores/ScoresClient";


export default async function ScoresPage({ params }) {
   const { division } = await params;
   
  return (
    
    <div className="min-h-screen max-w-5xl px-3 mx-auto text-white">
      <h1 className="mt-10 flex justify-center text-3xl font-bold bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-transparent text-center">
        {division === "competitive"
          ? "Competitive Scores"
          : "Recreational Scores"}
      </h1>
      <p className="my-3 text-xs sm:text-sm text-gray-300 max-w-3xl mx-auto text-center">View results for each game. Filter by team or week.</p>
      <ScoresClient division={division} />
      
    </div>
  );
}
