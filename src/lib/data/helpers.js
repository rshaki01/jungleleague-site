// src/lib/data/helpers.js
import { mockStandings } from "./mockStandings";
import { mockPlayerAggregates } from "./mockPlayerAggregates";

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

export function getPlayersByTeamId(teamId) {
  return mockPlayerAggregates.filter((p) => p.teamId === teamId);
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
