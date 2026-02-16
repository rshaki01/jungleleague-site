export default function StandingsPage({ params }) {
  const { division } = params;

  return (
    <div>
      <h1 className="text-4xl font-bold">
        {division === "competitive"
          ? "Competitive Standings"
          : "Recreational Standings"}
      </h1>

      {/* standings table here */}
    </div>
  );
}
