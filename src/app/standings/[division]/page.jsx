import StandingsTable from "@/components/ui/StandingsTable";

export default async function StandingsPage({ params }) {
   const { division } = await params;
           
  return (
    
    <div className="min-h-screen max-w-6xl mx-auto text-white">

      <p className="">division param: {division}</p>

      <h1 className="text-4xl font-bold">
        {division === "competitive"
          ? "Competitive Standings"
          : "Yo Standings"}
      </h1>

      {/* standings table here */}
      <StandingsTable />
    </div>
  );
}
