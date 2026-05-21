// src/lib/data/helpers.js
import { mockStandings } from "./mockData/mockStandings";
import { mockPlayerAggregates } from "./mockData/mockPlayerAggregates";


{/* --- Firestore Helpers --- */}

// --- Firestore Players

export function searchPlayersInArray(players, searchTerm) {
  const cleanSearchTerm = searchTerm.toLowerCase().trim();

  if (cleanSearchTerm === "") {
    return [];
  }

  return players.filter((p) =>
    p.name.toLowerCase().includes(cleanSearchTerm)
  );
}

export function getPlayersSortedByPoints(players) {
  return [...players].sort((a, b) => b.ppg - a.ppg);
}

// -- Teams --

export function sortTeamsByWinsThenDiff(teams) {
  // expects diff like "+42" / "-3" OR a number; handles both
  return [...teams].sort((a, b) => {
    const winsA = a.wins ?? 0;
    const winsB = b.wins ?? 0;
    if (winsB !== winsA) return winsB - winsA;

    const diffA = typeof a.diff === "string" ? Number(a.diff) : (a.diff ?? 0);
    const diffB = typeof b.diff === "string" ? Number(b.diff) : (b.diff ?? 0);
    return diffB - diffA;
  });
}

{/* --- Mock Data Helpers --- */}

// --- Teams ---
export function getTeams() {
  return mockStandings;
}

export function getTeamsByDivision(division) {
  return mockStandings.filter((t) => t.division === division);
}

export function getTeamById(teamId, teams) {
  return teams.find((t) => t.id === teamId) ?? null;
}

// --- Players ---
// export function getPlayers() {
//   return mockPlayerAggregates;
// }

export function getPlayerByPlayerId(playerId, players) {
  return players.find((p) => p.id === playerId);
}

// export function getPlayersByDivision(division) {
//   return mockPlayerAggregates.filter((p) => p.division === division);
// }

export function getPlayersByTeamId(teamId, players) {
  return players.filter((p) => p.teamId === teamId);
}

// export function searchPlayers(division, searchTerm) {

//   const cleanSearchTerm = searchTerm.toLowerCase().trim();

//   if (cleanSearchTerm === "") {
//     return [];
//   }

//   return mockPlayerAggregates.filter((p) => p.division === division && p.name.toLowerCase().includes(cleanSearchTerm)).slice(0,5)
// }



export function sortPlayersByPPG(players) {
  return [...players].sort((a, b) => (b.ppg ?? 0) - (a.ppg ?? 0));
}

export function getTopPlayersByStat(players, rawField, limit = 10) {
  return [...players]
    .filter(p => p.gp > 0)
    .sort((a, b) => {
      const aAvg = (a[rawField] ?? 0) / a.gp;
      const bAvg = (b[rawField] ?? 0) / b.gp;
      return bAvg - aAvg;
    })
    .slice(0, limit);
}

// --- Games ---

export function getGames(division, week, teamId, games) {
  return games.filter((g) => {
    const matchesDivision = g.division === division;
    const matchesWeek = g.week === Number(week);
    const matchesTeam =
      teamId === "All" ||
      g.homeTeamId === teamId ||
      g.awayTeamId === teamId;

    return matchesDivision && matchesWeek && matchesTeam;
  });
}

// export function getGamesByWeek(week) {
//   return mockGames.filter((g) => g.week === week)
// }

// export function getGamesByWeekAndTeam(week, teamId) {
//   return mockGames.filter((g) => g.week === week & g.homeTeamId === teamId || g.awayTeamId == teamId)
// }


// --- Scores ---

