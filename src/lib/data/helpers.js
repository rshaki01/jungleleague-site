// src/lib/data/helpers.js
import { mockStandings } from "./mockStandings";
import { mockPlayerAggregates } from "./mockPlayerAggregates";
import { mockGames } from "./mockGames";

// --- Teams ---
export function getTeams() {
  return mockStandings;
}

export function getTeamsByDivision(division) {
  return mockStandings.filter((t) => t.division === division);
}

export function getTeamById(teamId) {
  return mockStandings.find((t) => t.id === teamId) ?? null;
}

// --- Players ---
export function getPlayers() {
  return mockPlayerAggregates;
}

export function getPlayerByPlayerId(playerId) {
  return mockPlayerAggregates.find((p) => p.id === playerId);
}

export function getPlayersByDivision(division) {
  return mockPlayerAggregates.filter((p) => p.division === division);
}

export function getPlayersByTeamId(teamId) {
  return mockPlayerAggregates.filter((p) => p.teamId === teamId);
}

export function getPlayersSortedByPoints(players) {
  return [...players].sort((a, b) => b.ppg - a.ppg);
}

export function searchPlayers(division, searchTerm) {

  const cleanSearchTerm = searchTerm.toLowerCase().trim();

  if (cleanSearchTerm === "") {
    return [];
  }

  return mockPlayerAggregates.filter((p) => p.division === division && p.name.toLowerCase().includes(cleanSearchTerm)).slice(0,5)
}

// --- Sorting helpers (optional but handy) ---
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

export function sortPlayersByPPG(players) {
  return [...players].sort((a, b) => (b.ppg ?? 0) - (a.ppg ?? 0));
}

// --- Games ---

export function getGames(division, week, teamId) {
  return mockGames.filter((g) => {
    const matchesDivision = g.division === division;
    const matchesWeek = g.week === Number(week);
    const matchesTeam =
      teamId === "All" ||
      g.homeTeamId === teamId ||
      g.awayTeamId === teamId;

    return matchesDivision && matchesWeek && matchesTeam;
  });
}

export function getGamesByWeek(week) {
  return mockGames.filter((g) => g.week === week)
}

export function getGamesByWeekAndTeam(week, teamId) {
  return mockGames.filter((g) => g.week === week & g.homeTeamId === teamId || g.awayTeamId == teamId)
}


// --- Scores ---

