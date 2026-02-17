import StandingsTable from "@/components/ui/StandingsTable";

export default async function StandingsPage({ params }) {
   const { division } = await params;
           
  return (
    
    <div className="min-h-screen max-w-5xl px-3 mx-auto text-white">

      

      <h1 className="mt-10 flex justify-center text-3xl font-bold bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-transparent text-center">
        {division === "competitive"
          ? "Competitive Standings"
          : "Recreational Standings"}
      </h1>
      <p className="my-3 text-xs sm:text-sm text-gray-300 max-w-3xl mx-auto text-center">View the current leaders and team standings. For player information, select any team.</p>

      {/* standings table here */}
      <StandingsTable />
    </div>
  );
}
