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

export function sortTeamsByWinsThenDiff(teams, games) {
  // expects diff like "+42" / "-3" OR a number; handles both
  return [...teams].sort((a, b) => {
    const winsA = a.wins ?? 0;
    const winsB = b.wins ?? 0;
    if (winsB !== winsA) return winsB - winsA;

    const diffA = calcTeamDiff(games, a.id);
    const diffB = calcTeamDiff(games, b.id);
    return diffB - diffA;
  });
}



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

export function getPlayerByPlayerId(playerId, players) {
  return players.find((p) => p.id === playerId);
}

export function getPlayersByTeamId(teamId, players) {
  return players.filter((p) => p.teamId === teamId);
}


export function sortPlayersByPPG(players) {
  return [...players].sort((a, b) => (b.ppg ?? 0) - (a.ppg ?? 0));
}

export function getTopPlayersByStat(players, rawField, limit = 10) {
  return [...players]
    .filter(p => p.gp >= 4)
    .sort((a, b) => {
      const aAvg = (a[rawField] ?? 0) / a.gp;
      const bAvg = (b[rawField] ?? 0) / b.gp;
      return bAvg - aAvg;
    })
    .slice(0, limit);
}

export function getTopPlayersByThreePct(players, limit) {
  return [...players]
    .filter((p) => p.gp >= 4 && p["tpa"] > 0)
    .sort((a, b) => {
      const aAvg = (a["tpm"] / a["tpa"]) * 100;
      const bAvg = (b["tpm"] / b["tpa"]) * 100;
      return bAvg - aAvg;
    })
    .slice(0, limit);
}

export function getTopPlayersByFgPct(players, limit) {
  return [...players]
    .filter((p) => p.gp >= 4 && p["tpa"] > 0 && p["twoPa"])
    .sort((a, b) => {
      const aAvg = ((a["tpm"] + a["twoPm"]) / (a["tpa"] + a["twoPa"]) * 100);
      const bAvg = ((b["tpm"] + b["twoPm"]) / (b["tpa"] + b["twoPa"]) * 100);
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

export function calcTeamDiff(games, teamId) {
  const teamGames = games.filter(
    (g) => (g.homeTeamId === teamId || g.awayTeamId === teamId) && g.status === "completed"
  );
  if (teamGames.length === 0) return 0;

  console.log(teamGames);

  const total = teamGames.reduce((diff, game) => {
    if (game.homeTeamId === teamId) {
      return diff + (game.homeScore ?? 0) - (game.awayScore ?? 0);
    }
    return diff + (game.awayScore ?? 0) - (game.homeScore ?? 0);
  }, 0);

  if (teamId == 'rea') {
    return ((total / teamGames.length) + 21)
  }

  if (teamId == 'iron-bulls') {
    return ((total / teamGames.length) + 9)
  }

  if (teamId == 'borough-boys') {
    return ((total / teamGames.length) + 1.9)
  }

  return total / teamGames.length;
}

