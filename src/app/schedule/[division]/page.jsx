import ScheduleFilter from "@/components/ui/ScheduleFilter";


export default async function SchedulePage({ params }) {
   const { division } = await params;
   
  return (
    
    <div className="min-h-screen max-w-5xl px-3 mx-auto text-white">
      <h1 className="mt-10 flex justify-center text-3xl font-bold bg-gradient-to-br from-yellow-300 to-yellow-500 bg-clip-text text-transparent text-center">
        {division === "competitive"
          ? "Competitive Schedule"
          : "Recreational Schedule"}
      </h1>
      <p className="my-3 text-xs sm:text-sm text-gray-300 max-w-3xl mx-auto text-center">Stay updated with every upcoming match. Filter by team or week.</p>
      <ScheduleFilter division={division}/>
    </div>
  );
}
