// 18 teams × 5 players = 90 players
// Stats tracked: ppg, rpg, apg, spg, bpg, fgm, fga, fgPct, ftm, fta, ftPct, tpm, tpa, tpPct, gp

export const mockPlayerAggregates = [
  // -------------------------
  // east-end-eagles (5)
  // -------------------------
  { id: "east-end-eagles-p1", teamId: "east-end-eagles", division: "competitive", number: 0, name: "Aiden Cole", gp: 1, ppg: 18.6, rpg: 6.4, apg: 4.8, spg: 1.4, bpg: 0.6, fgm: 73, fga: 150, fgPct: 48.7, ftm: 32, fta: 40, ftPct: 80.0, tpm: 18, tpa: 52, tpPct: 34.6 },
  { id: "east-end-eagles-p2", teamId: "east-end-eagles", division: "competitive", number: 1, name: "Marcus Reid", gp: 1, ppg: 14.2, rpg: 5.1, apg: 3.2, spg: 1.0, bpg: 0.4, fgm: 56, fga: 118, fgPct: 47.5, ftm: 18, fta: 25, ftPct: 72.0, tpm: 14, tpa: 40, tpPct: 35.0 },
  { id: "east-end-eagles-p3", teamId: "east-end-eagles", division: "competitive", number: 10, name: "Noah Bennett", gp: 1, ppg: 11.8, rpg: 7.6, apg: 2.1, spg: 0.8, bpg: 1.2, fgm: 46, fga: 92, fgPct: 50.0, ftm: 12, fta: 18, ftPct: 66.7, tpm: 6, tpa: 18, tpPct: 33.3 },
  { id: "east-end-eagles-p4", teamId: "east-end-eagles", division: "competitive", number: 8, name: "Jalen Price", gp: 1, ppg: 9.7, rpg: 3.4, apg: 4.9, spg: 1.6, bpg: 0.2, fgm: 37, fga: 85, fgPct: 43.5, ftm: 9, fta: 12, ftPct: 75.0, tpm: 10, tpa: 30, tpPct: 33.3 },
  { id: "east-end-eagles-p5", teamId: "east-end-eagles", division: "competitive", number: 7, name: "Ethan Shaw", gp: 1, ppg: 7.9, rpg: 4.2, apg: 1.7, spg: 0.6, bpg: 0.7, fgm: 30, fga: 70, fgPct: 42.9, ftm: 8, fta: 14, ftPct: 57.1, tpm: 5, tpa: 17, tpPct: 29.4 },

  // -------------------------
  // northside-titans (5)
  // -------------------------
  { id: "northside-titans-p1", teamId: "northside-titans", division: "competitive", number: 0, name: "Jordan Blake", gp: 1, ppg: 20.1, rpg: 5.9, apg: 6.2, spg: 1.8, bpg: 0.5, fgm: 77, fga: 160, fgPct: 48.1, ftm: 39, fta: 48, ftPct: 81.3, tpm: 19, tpa: 55, tpPct: 34.5 },
  { id: "northside-titans-p2", teamId: "northside-titans", division: "competitive", number: 1, name: "Khalil Grant", gp: 1, ppg: 15.4, rpg: 6.8, apg: 3.0, spg: 1.1, bpg: 0.9, fgm: 58, fga: 120, fgPct: 48.3, ftm: 20, fta: 28, ftPct: 71.4, tpm: 12, tpa: 33, tpPct: 36.4 },
  { id: "northside-titans-p3", teamId: "northside-titans", division: "competitive", number: 17, name: "Dylan Morris", gp: 1, ppg: 12.3, rpg: 8.2, apg: 2.4, spg: 0.7, bpg: 1.4, fgm: 48, fga: 95, fgPct: 50.5, ftm: 10, fta: 16, ftPct: 62.5, tpm: 5, tpa: 15, tpPct: 33.3 },
  { id: "northside-titans-p4", teamId: "northside-titans", division: "competitive", number: 20, name: "Isaiah Young", gp: 1, ppg: 10.6, rpg: 3.1, apg: 5.6, spg: 1.3, bpg: 0.2, fgm: 38, fga: 88, fgPct: 43.2, ftm: 11, fta: 14, ftPct: 78.6, tpm: 9, tpa: 28, tpPct: 32.1 },
  { id: "northside-titans-p5", teamId: "northside-titans", division: "competitive", number: 15, name: "Owen Clarke", gp: 1, ppg: 8.4, rpg: 4.6, apg: 1.5, spg: 0.6, bpg: 0.6, fgm: 31, fga: 72, fgPct: 43.1, ftm: 7, fta: 10, ftPct: 70.0, tpm: 6, tpa: 20, tpPct: 30.0 },

  // -------------------------
  // downtown-ballers (5)
  // -------------------------
  { id: "downtown-ballers-p1", teamId: "downtown-ballers", division: "competitive", number: 0, name: "Tyrese King", gp: 1, ppg: 17.8, rpg: 4.8, apg: 5.1, spg: 1.5, bpg: 0.4, fgm: 66, fga: 145, fgPct: 45.5, ftm: 28, fta: 36, ftPct: 77.8, tpm: 20, tpa: 60, tpPct: 33.3 },
  { id: "downtown-ballers-p2", teamId: "downtown-ballers", division: "competitive", number: 7, name: "Devin Ross", gp: 1, ppg: 13.9, rpg: 6.0, apg: 2.8, spg: 1.0, bpg: 0.8, fgm: 52, fga: 112, fgPct: 46.4, ftm: 16, fta: 24, ftPct: 66.7, tpm: 11, tpa: 34, tpPct: 32.4 },
  { id: "downtown-ballers-p3", teamId: "downtown-ballers", division: "competitive", number: 0, name: "Caleb White", gp: 1, ppg: 12.1, rpg: 7.9, apg: 2.0, spg: 0.7, bpg: 1.1, fgm: 46, fga: 98, fgPct: 46.9, ftm: 12, fta: 18, ftPct: 66.7, tpm: 7, tpa: 22, tpPct: 31.8 },
  { id: "downtown-ballers-p4", teamId: "downtown-ballers", division: "competitive", number: 0, name: "Mateo Cruz", gp: 1, ppg: 9.9, rpg: 3.3, apg: 4.7, spg: 1.2, bpg: 0.2, fgm: 36, fga: 84, fgPct: 42.9, ftm: 10, fta: 13, ftPct: 76.9, tpm: 8, tpa: 26, tpPct: 30.8 },
  { id: "downtown-ballers-p5", teamId: "downtown-ballers", division: "competitive", number: 0, name: "Ryan Patel", gp: 1, ppg: 7.6, rpg: 4.1, apg: 1.6, spg: 0.5, bpg: 0.6, fgm: 29, fga: 69, fgPct: 42.0, ftm: 6, fta: 9, ftPct: 66.7, tpm: 6, tpa: 21, tpPct: 28.6 },
  { id: "downtown-ballers-p6", teamId: "downtown-ballers", division: "competitive", number: 0, name: "Tyrese Ross", gp: 1, ppg: 17.8, rpg: 4.8, apg: 5.1, spg: 1.5, bpg: 0.4, fgm: 66, fga: 145, fgPct: 45.5, ftm: 28, fta: 36, ftPct: 77.8, tpm: 20, tpa: 60, tpPct: 33.3 },
  { id: "downtown-ballers-p7", teamId: "downtown-ballers", division: "competitive", number: 0, name: "Devin White", gp: 1, ppg: 13.9, rpg: 6.0, apg: 2.8, spg: 1.0, bpg: 0.8, fgm: 52, fga: 112, fgPct: 46.4, ftm: 16, fta: 24, ftPct: 66.7, tpm: 11, tpa: 34, tpPct: 32.4 },
  { id: "downtown-ballers-p8", teamId: "downtown-ballers", division: "competitive", number: 0, name: "Caleb Cruz", gp: 1, ppg: 12.1, rpg: 7.9, apg: 2.0, spg: 0.7, bpg: 1.1, fgm: 46, fga: 98, fgPct: 46.9, ftm: 12, fta: 18, ftPct: 66.7, tpm: 7, tpa: 22, tpPct: 31.8 },
  { id: "downtown-ballers-p9", teamId: "downtown-ballers", division: "competitive", number: 0, name: "Mateo Patel", gp: 1, ppg: 9.9, rpg: 3.3, apg: 4.7, spg: 1.2, bpg: 0.2, fgm: 36, fga: 84, fgPct: 42.9, ftm: 10, fta: 13, ftPct: 76.9, tpm: 8, tpa: 26, tpPct: 30.8 },
  { id: "downtown-ballers-p10", teamId: "downtown-ballers", division: "competitive", number: 0, name: "Ryan Singh", gp: 1, ppg: 7.6, rpg: 4.1, apg: 1.6, spg: 0.5, bpg: 0.6, fgm: 29, fga: 69, fgPct: 42.0, ftm: 6, fta: 9, ftPct: 66.7, tpm: 6, tpa: 21, tpPct: 28.6 },

  // -------------------------
  // westside-wolves (5)
  // -------------------------
  { id: "westside-wolves-p1", teamId: "westside-wolves", division: "competitive", number: 0, name: "Jasper Green", gp: 1, ppg: 16.2, rpg: 5.2, apg: 4.3, spg: 1.3, bpg: 0.4, fgm: 60, fga: 138, fgPct: 43.5, ftm: 24, fta: 34, ftPct: 70.6, tpm: 18, tpa: 58, tpPct: 31.0 },
  { id: "westside-wolves-p2", teamId: "westside-wolves", division: "competitive", number: 0, name: "Miles Carter", gp: 1, ppg: 12.7, rpg: 6.7, apg: 2.4, spg: 0.9, bpg: 1.0, fgm: 47, fga: 110, fgPct: 42.7, ftm: 14, fta: 22, ftPct: 63.6, tpm: 10, tpa: 32, tpPct: 31.3 },
  { id: "westside-wolves-p3", teamId: "westside-wolves", division: "competitive", number: 0, name: "Henry Lewis", gp: 1, ppg: 11.3, rpg: 8.1, apg: 1.8, spg: 0.6, bpg: 1.3, fgm: 44, fga: 100, fgPct: 44.0, ftm: 10, fta: 17, ftPct: 58.8, tpm: 4, tpa: 14, tpPct: 28.6 },
  { id: "westside-wolves-p4", teamId: "westside-wolves", division: "competitive", number: 0, name: "Avery Scott", gp: 1, ppg: 9.4, rpg: 3.0, apg: 4.1, spg: 1.1, bpg: 0.2, fgm: 34, fga: 86, fgPct: 39.5, ftm: 9, fta: 12, ftPct: 75.0, tpm: 7, tpa: 26, tpPct: 26.9 },
  { id: "westside-wolves-p5", teamId: "westside-wolves", division: "competitive", number: 0, name: "Leo Nguyen", gp: 1, ppg: 7.2, rpg: 4.0, apg: 1.2, spg: 0.5, bpg: 0.6, fgm: 27, fga: 72, fgPct: 37.5, ftm: 6, fta: 10, ftPct: 60.0, tpm: 5, tpa: 20, tpPct: 25.0 },

  // -------------------------
  // scarborough-storm (5)
  // -------------------------
  { id: "scarborough-storm-p1", teamId: "scarborough-storm", division: "competitive", number: 0, name: "Zion Walker", gp: 1, ppg: 22.4, rpg: 6.1, apg: 5.4, spg: 1.7, bpg: 0.7, fgm: 82, fga: 165, fgPct: 49.7, ftm: 40, fta: 52, ftPct: 76.9, tpm: 21, tpa: 60, tpPct: 35.0 },
  { id: "scarborough-storm-p2", teamId: "scarborough-storm", division: "competitive", number: 0, name: "Malik Owens", gp: 1, ppg: 16.5, rpg: 7.2, apg: 2.9, spg: 1.0, bpg: 1.1, fgm: 61, fga: 122, fgPct: 50.0, ftm: 18, fta: 26, ftPct: 69.2, tpm: 10, tpa: 28, tpPct: 35.7 },
  { id: "scarborough-storm-p3", teamId: "scarborough-storm", division: "competitive", number: 0, name: "Cameron Scott", gp: 1, ppg: 13.2, rpg: 8.6, apg: 2.1, spg: 0.8, bpg: 1.5, fgm: 52, fga: 103, fgPct: 50.5, ftm: 10, fta: 15, ftPct: 66.7, tpm: 6, tpa: 18, tpPct: 33.3 },
  { id: "scarborough-storm-p4", teamId: "scarborough-storm", division: "competitive", number: 0, name: "Eli Harper", gp: 1, ppg: 10.8, rpg: 3.6, apg: 4.8, spg: 1.2, bpg: 0.2, fgm: 40, fga: 88, fgPct: 45.5, ftm: 9, fta: 12, ftPct: 75.0, tpm: 8, tpa: 24, tpPct: 33.3 },
  { id: "scarborough-storm-p5", teamId: "scarborough-storm", division: "competitive", number: 0, name: "Jonah Park", gp: 1, ppg: 8.1, rpg: 4.4, apg: 1.5, spg: 0.6, bpg: 0.7, fgm: 31, fga: 68, fgPct: 45.6, ftm: 6, fta: 10, ftPct: 60.0, tpm: 5, tpa: 16, tpPct: 31.3 },

  // -------------------------
  // midtown-monarchs (5)
  // -------------------------
  { id: "midtown-monarchs-p1", teamId: "midtown-monarchs", division: "competitive", number: 0, name: "Theo Martin", gp: 1, ppg: 19.3, rpg: 5.3, apg: 5.8, spg: 1.6, bpg: 0.4, fgm: 71, fga: 155, fgPct: 45.8, ftm: 32, fta: 41, ftPct: 78.0, tpm: 20, tpa: 62, tpPct: 32.3 },
  { id: "midtown-monarchs-p2", teamId: "midtown-monarchs", division: "competitive", number: 0, name: "Jamal Hughes", gp: 1, ppg: 14.8, rpg: 6.5, apg: 3.1, spg: 1.0, bpg: 0.9, fgm: 55, fga: 120, fgPct: 45.8, ftm: 18, fta: 25, ftPct: 72.0, tpm: 12, tpa: 36, tpPct: 33.3 },
  { id: "midtown-monarchs-p3", teamId: "midtown-monarchs", division: "competitive", number: 0, name: "Bennett Clark", gp: 1, ppg: 12.6, rpg: 8.0, apg: 2.2, spg: 0.7, bpg: 1.2, fgm: 49, fga: 100, fgPct: 49.0, ftm: 10, fta: 16, ftPct: 62.5, tpm: 5, tpa: 16, tpPct: 31.3 },
  { id: "midtown-monarchs-p4", teamId: "midtown-monarchs", division: "competitive", number: 0, name: "Samir Ali", gp: 1, ppg: 10.1, rpg: 3.2, apg: 4.3, spg: 1.1, bpg: 0.2, fgm: 36, fga: 84, fgPct: 42.9, ftm: 9, fta: 12, ftPct: 75.0, tpm: 8, tpa: 25, tpPct: 32.0 },
  { id: "midtown-monarchs-p5", teamId: "midtown-monarchs", division: "competitive", number: 0, name: "Finn Rogers", gp: 1, ppg: 7.5, rpg: 4.2, apg: 1.4, spg: 0.5, bpg: 0.6, fgm: 28, fga: 67, fgPct: 41.8, ftm: 6, fta: 9, ftPct: 66.7, tpm: 5, tpa: 18, tpPct: 27.8 },

  // -------------------------
  // southside-spartans (5)
  // -------------------------
  { id: "southside-spartans-p1", teamId: "southside-spartans", division: "competitive", number: 0, name: "Anthony Brooks", gp: 1, ppg: 17.1, rpg: 5.7, apg: 4.6, spg: 1.3, bpg: 0.5, fgm: 63, fga: 142, fgPct: 44.4, ftm: 26, fta: 36, ftPct: 72.2, tpm: 16, tpa: 52, tpPct: 30.8 },
  { id: "southside-spartans-p2", teamId: "southside-spartans", division: "competitive", number: 0, name: "Darius Hill", gp: 1, ppg: 13.4, rpg: 6.6, apg: 2.7, spg: 0.9, bpg: 1.0, fgm: 50, fga: 115, fgPct: 43.5, ftm: 14, fta: 22, ftPct: 63.6, tpm: 10, tpa: 34, tpPct: 29.4 },
  { id: "southside-spartans-p3", teamId: "southside-spartans", division: "competitive", number: 0, name: "Colin Wright", gp: 1, ppg: 11.9, rpg: 8.4, apg: 1.9, spg: 0.6, bpg: 1.2, fgm: 45, fga: 102, fgPct: 44.1, ftm: 9, fta: 15, ftPct: 60.0, tpm: 5, tpa: 16, tpPct: 31.3 },
  { id: "southside-spartans-p4", teamId: "southside-spartans", division: "competitive", number: 0, name: "Nico Santos", gp: 1, ppg: 9.8, rpg: 3.5, apg: 4.0, spg: 1.0, bpg: 0.2, fgm: 35, fga: 86, fgPct: 40.7, ftm: 10, fta: 13, ftPct: 76.9, tpm: 7, tpa: 24, tpPct: 29.2 },
  { id: "southside-spartans-p5", teamId: "southside-spartans", division: "competitive", number: 0, name: "Liam Chen", gp: 1, ppg: 7.1, rpg: 4.1, apg: 1.2, spg: 0.5, bpg: 0.6, fgm: 27, fga: 70, fgPct: 38.6, ftm: 6, fta: 10, ftPct: 60.0, tpm: 4, tpa: 17, tpPct: 23.5 },

  // -------------------------
  // uptown-underdogs (5)
  // -------------------------
  { id: "uptown-underdogs-p1", teamId: "uptown-underdogs", division: "competitive", number: 0, name: "Bryce Adams", gp: 1, ppg: 15.9, rpg: 5.0, apg: 4.1, spg: 1.2, bpg: 0.4, fgm: 58, fga: 142, fgPct: 40.8, ftm: 24, fta: 36, ftPct: 66.7, tpm: 15, tpa: 55, tpPct: 27.3 },
  { id: "uptown-underdogs-p2", teamId: "uptown-underdogs", division: "competitive", number: 0, name: "Tristan Bell", gp: 1, ppg: 12.2, rpg: 6.1, apg: 2.6, spg: 0.8, bpg: 0.8, fgm: 44, fga: 112, fgPct: 39.3, ftm: 12, fta: 20, ftPct: 60.0, tpm: 10, tpa: 40, tpPct: 25.0 },
  { id: "uptown-underdogs-p3", teamId: "uptown-underdogs", division: "competitive", number: 0, name: "Gavin Perry", gp: 1, ppg: 11.0, rpg: 7.6, apg: 1.7, spg: 0.6, bpg: 1.0, fgm: 41, fga: 105, fgPct: 39.0, ftm: 8, fta: 14, ftPct: 57.1, tpm: 5, tpa: 22, tpPct: 22.7 },
  { id: "uptown-underdogs-p4", teamId: "uptown-underdogs", division: "competitive", number: 0, name: "Omar Khan", gp: 1, ppg: 9.2, rpg: 3.1, apg: 3.8, spg: 0.9, bpg: 0.2, fgm: 32, fga: 88, fgPct: 36.4, ftm: 10, fta: 14, ftPct: 71.4, tpm: 6, tpa: 26, tpPct: 23.1 },
  { id: "uptown-underdogs-p5", teamId: "uptown-underdogs", division: "competitive", number: 0, name: "Evan Singh", gp: 1, ppg: 6.8, rpg: 4.0, apg: 1.1, spg: 0.5, bpg: 0.5, fgm: 24, fga: 66, fgPct: 36.4, ftm: 6, fta: 10, ftPct: 60.0, tpm: 4, tpa: 18, tpPct: 22.2 },

  // -------------------------
  // central-city-kings (5)
  // -------------------------
  { id: "central-city-kings-p1", teamId: "central-city-kings", division: "competitive", number: 0, name: "Damian Foster", gp: 1, ppg: 18.2, rpg: 5.6, apg: 5.0, spg: 1.4, bpg: 0.4, fgm: 68, fga: 150, fgPct: 45.3, ftm: 28, fta: 38, ftPct: 73.7, tpm: 19, tpa: 58, tpPct: 32.8 },
  { id: "central-city-kings-p2", teamId: "central-city-kings", division: "competitive", number: 0, name: "Quentin James", gp: 1, ppg: 14.1, rpg: 6.4, apg: 2.9, spg: 0.9, bpg: 0.9, fgm: 52, fga: 115, fgPct: 45.2, ftm: 16, fta: 22, ftPct: 72.7, tpm: 12, tpa: 36, tpPct: 33.3 },
  { id: "central-city-kings-p3", teamId: "central-city-kings", division: "competitive", number: 0, name: "Rafael Torres", gp: 1, ppg: 12.0, rpg: 8.0, apg: 2.1, spg: 0.6, bpg: 1.2, fgm: 46, fga: 98, fgPct: 46.9, ftm: 10, fta: 16, ftPct: 62.5, tpm: 6, tpa: 18, tpPct: 33.3 },
  { id: "central-city-kings-p4", teamId: "central-city-kings", division: "competitive", number: 0, name: "Hassan Ali", gp: 1, ppg: 10.0, rpg: 3.2, apg: 4.3, spg: 1.0, bpg: 0.2, fgm: 36, fga: 86, fgPct: 41.9, ftm: 10, fta: 13, ftPct: 76.9, tpm: 8, tpa: 24, tpPct: 33.3 },
  { id: "central-city-kings-p5", teamId: "central-city-kings", division: "competitive", number: 0, name: "Arjun Mehta", gp: 1, ppg: 7.4, rpg: 4.3, apg: 1.3, spg: 0.5, bpg: 0.6, fgm: 28, fga: 68, fgPct: 41.2, ftm: 6, fta: 9, ftPct: 66.7, tpm: 5, tpa: 18, tpPct: 27.8 },

  // -------------------------
  // harbour-heat (5)
  // -------------------------
  { id: "harbour-heat-p1", teamId: "harbour-heat", division: "competitive", number: 0, name: "Lucas Perry", gp: 1, ppg: 16.7, rpg: 5.1, apg: 4.7, spg: 1.3, bpg: 0.4, fgm: 62, fga: 140, fgPct: 44.3, ftm: 26, fta: 34, ftPct: 76.5, tpm: 18, tpa: 56, tpPct: 32.1 },
  { id: "harbour-heat-p2", teamId: "harbour-heat", division: "competitive", number: 0, name: "Chris Jackson", gp: 1, ppg: 13.1, rpg: 6.2, apg: 2.6, spg: 0.9, bpg: 0.8, fgm: 48, fga: 110, fgPct: 43.6, ftm: 14, fta: 20, ftPct: 70.0, tpm: 11, tpa: 35, tpPct: 31.4 },
  { id: "harbour-heat-p3", teamId: "harbour-heat", division: "competitive", number: 0, name: "Oliver Stone", gp: 1, ppg: 11.7, rpg: 7.7, apg: 1.9, spg: 0.6, bpg: 1.1, fgm: 43, fga: 98, fgPct: 43.9, ftm: 10, fta: 15, ftPct: 66.7, tpm: 6, tpa: 20, tpPct: 30.0 },
  { id: "harbour-heat-p4", teamId: "harbour-heat", division: "competitive", number: 0, name: "Mason Lee", gp: 1, ppg: 9.6, rpg: 3.2, apg: 4.0, spg: 1.0, bpg: 0.2, fgm: 34, fga: 84, fgPct: 40.5, ftm: 10, fta: 13, ftPct: 76.9, tpm: 7, tpa: 24, tpPct: 29.2 },
  { id: "harbour-heat-p5", teamId: "harbour-heat", division: "competitive", number: 0, name: "Kai Brown", gp: 1, ppg: 7.0, rpg: 4.0, apg: 1.2, spg: 0.5, bpg: 0.5, fgm: 25, fga: 65, fgPct: 38.5, ftm: 6, fta: 10, ftPct: 60.0, tpm: 4, tpa: 18, tpPct: 22.2 },

/* Recreational Players */

  // -------------------------
  // lakeside-legends (5)
  // -------------------------
  { id: "lakeside-legends-p1", teamId: "lakeside-legends", division: "recreational", number: 0, name: "Caden Miles", gp: 1, ppg: 19.8, rpg: 5.8, apg: 5.9, spg: 1.6, bpg: 0.5, fgm: 62, fga: 132, fgPct: 47.0, ftm: 26, fta: 34, ftPct: 76.5, tpm: 18, tpa: 54, tpPct: 33.3 },
  { id: "lakeside-legends-p2", teamId: "lakeside-legends", division: "recreational", number: 0, name: "Jace Howard", gp: 1, ppg: 15.1, rpg: 6.6, apg: 3.2, spg: 1.0, bpg: 0.9, fgm: 48, fga: 102, fgPct: 47.1, ftm: 14, fta: 20, ftPct: 70.0, tpm: 10, tpa: 30, tpPct: 33.3 },
  { id: "lakeside-legends-p3", teamId: "lakeside-legends", division: "recreational", number: 0, name: "Elliot Price", gp: 1, ppg: 12.4, rpg: 8.2, apg: 2.1, spg: 0.7, bpg: 1.2, fgm: 39, fga: 82, fgPct: 47.6, ftm: 8, fta: 12, ftPct: 66.7, tpm: 6, tpa: 18, tpPct: 33.3 },
  { id: "lakeside-legends-p4", teamId: "lakeside-legends", division: "recreational", number: 0, name: "Rohan Singh", gp: 1, ppg: 10.2, rpg: 3.4, apg: 4.6, spg: 1.1, bpg: 0.2, fgm: 31, fga: 72, fgPct: 43.1, ftm: 8, fta: 11, ftPct: 72.7, tpm: 7, tpa: 22, tpPct: 31.8 },
  { id: "lakeside-legends-p5", teamId: "lakeside-legends", division: "recreational", number: 0, name: "Nolan Cruz", gp: 1, ppg: 7.9, rpg: 4.1, apg: 1.6, spg: 0.6, bpg: 0.6, fgm: 25, fga: 62, fgPct: 40.3, ftm: 6, fta: 9, ftPct: 66.7, tpm: 5, tpa: 16, tpPct: 31.3 },

  // -------------------------
  // city-hoopers (5)
  // -------------------------
  { id: "city-hoopers-p1", teamId: "city-hoopers", division: "recreational", number: 0, name: "Adrian Ross", gp: 1, ppg: 18.3, rpg: 5.1, apg: 5.2, spg: 1.5, bpg: 0.4, fgm: 58, fga: 128, fgPct: 45.3, ftm: 24, fta: 32, ftPct: 75.0, tpm: 17, tpa: 52, tpPct: 32.7 },
  { id: "city-hoopers-p2", teamId: "city-hoopers", division: "recreational", number: 0, name: "Miles Grant", gp: 1, ppg: 14.0, rpg: 6.3, apg: 3.0, spg: 1.0, bpg: 0.8, fgm: 44, fga: 98, fgPct: 44.9, ftm: 14, fta: 20, ftPct: 70.0, tpm: 10, tpa: 30, tpPct: 33.3 },
  { id: "city-hoopers-p3", teamId: "city-hoopers", division: "recreational", number: 0, name: "Sebastian Lee", gp: 1, ppg: 12.2, rpg: 7.6, apg: 2.2, spg: 0.7, bpg: 1.1, fgm: 38, fga: 86, fgPct: 44.2, ftm: 8, fta: 13, ftPct: 61.5, tpm: 6, tpa: 19, tpPct: 31.6 },
  { id: "city-hoopers-p4", teamId: "city-hoopers", division: "recreational", number: 0, name: "Omar Bennett", gp: 1, ppg: 9.9, rpg: 3.2, apg: 4.0, spg: 1.0, bpg: 0.2, fgm: 30, fga: 74, fgPct: 40.5, ftm: 8, fta: 11, ftPct: 72.7, tpm: 7, tpa: 23, tpPct: 30.4 },
  { id: "city-hoopers-p5", teamId: "city-hoopers", division: "recreational", number: 0, name: "Ethan Park", gp: 1, ppg: 7.3, rpg: 4.0, apg: 1.3, spg: 0.5, bpg: 0.5, fgm: 23, fga: 62, fgPct: 37.1, ftm: 6, fta: 10, ftPct: 60.0, tpm: 4, tpa: 18, tpPct: 22.2 },

  // -------------------------
  // maple-leaf-ballers (5)
  // -------------------------
  { id: "maple-leaf-ballers-p1", teamId: "maple-leaf-ballers", division: "recreational", number: 0, name: "Avery James", gp: 1, ppg: 16.9, rpg: 5.4, apg: 4.8, spg: 1.2, bpg: 0.4, fgm: 54, fga: 124, fgPct: 43.5, ftm: 22, fta: 30, ftPct: 73.3, tpm: 16, tpa: 52, tpPct: 30.8 },
  { id: "maple-leaf-ballers-p2", teamId: "maple-leaf-ballers", division: "recreational", number: 0, name: "Cole Johnson", gp: 1, ppg: 13.2, rpg: 6.1, apg: 2.7, spg: 0.9, bpg: 0.8, fgm: 41, fga: 96, fgPct: 42.7, ftm: 12, fta: 18, ftPct: 66.7, tpm: 10, tpa: 35, tpPct: 28.6 },
  { id: "maple-leaf-ballers-p3", teamId: "maple-leaf-ballers", division: "recreational", number: 0, name: "Hugo Wright", gp: 1, ppg: 11.8, rpg: 7.8, apg: 2.0, spg: 0.6, bpg: 1.0, fgm: 36, fga: 86, fgPct: 41.9, ftm: 8, fta: 13, ftPct: 61.5, tpm: 6, tpa: 22, tpPct: 27.3 },
  { id: "maple-leaf-ballers-p4", teamId: "maple-leaf-ballers", division: "recreational", number: 0, name: "Riley Chen", gp: 1, ppg: 9.7, rpg: 3.1, apg: 3.8, spg: 1.0, bpg: 0.2, fgm: 29, fga: 78, fgPct: 37.2, ftm: 8, fta: 11, ftPct: 72.7, tpm: 7, tpa: 26, tpPct: 26.9 },
  { id: "maple-leaf-ballers-p5", teamId: "maple-leaf-ballers", division: "recreational", number: 0, name: "Noah Ali", gp: 1, ppg: 7.0, rpg: 4.0, apg: 1.2, spg: 0.5, bpg: 0.5, fgm: 22, fga: 62, fgPct: 35.5, ftm: 6, fta: 10, ftPct: 60.0, tpm: 4, tpa: 18, tpPct: 22.2 },

  // -------------------------
  // the-six-slammers (5)
  // -------------------------
  { id: "the-six-slammers-p1", teamId: "the-six-slammers", division: "recreational", number: 0, name: "Jalen Brooks", gp: 1, ppg: 15.6, rpg: 5.0, apg: 4.4, spg: 1.2, bpg: 0.4, fgm: 48, fga: 118, fgPct: 40.7, ftm: 20, fta: 28, ftPct: 71.4, tpm: 14, tpa: 50, tpPct: 28.0 },
  { id: "the-six-slammers-p2", teamId: "the-six-slammers", division: "recreational", number: 0, name: "Marcus Hill", gp: 1, ppg: 12.9, rpg: 6.0, apg: 2.6, spg: 0.9, bpg: 0.8, fgm: 40, fga: 100, fgPct: 40.0, ftm: 12, fta: 18, ftPct: 66.7, tpm: 9, tpa: 34, tpPct: 26.5 },
  { id: "the-six-slammers-p3", teamId: "the-six-slammers", division: "recreational", number: 0, name: "Evan Torres", gp: 1, ppg: 11.2, rpg: 7.4, apg: 1.8, spg: 0.6, bpg: 1.0, fgm: 34, fga: 88, fgPct: 38.6, ftm: 8, fta: 14, ftPct: 57.1, tpm: 5, tpa: 20, tpPct: 25.0 },
  { id: "the-six-slammers-p4", teamId: "the-six-slammers", division: "recreational", number: 0, name: "Aiden Santos", gp: 1, ppg: 9.1, rpg: 3.0, apg: 3.6, spg: 0.9, bpg: 0.2, fgm: 28, fga: 76, fgPct: 36.8, ftm: 8, fta: 11, ftPct: 72.7, tpm: 6, tpa: 24, tpPct: 25.0 },
  { id: "the-six-slammers-p5", teamId: "the-six-slammers", division: "recreational", number: 0, name: "Kai Patel", gp: 1, ppg: 6.7, rpg: 3.8, apg: 1.1, spg: 0.5, bpg: 0.5, fgm: 20, fga: 60, fgPct: 33.3, ftm: 6, fta: 10, ftPct: 60.0, tpm: 4, tpa: 18, tpPct: 22.2 },

  // -------------------------
  // north-park-runners (5)
  // -------------------------
  { id: "north-park-runners-p1", teamId: "north-park-runners", division: "recreational", number: 0, name: "Tyler Grant", gp: 1, ppg: 14.8, rpg: 4.9, apg: 4.1, spg: 1.1, bpg: 0.4, fgm: 44, fga: 112, fgPct: 39.3, ftm: 18, fta: 28, ftPct: 64.3, tpm: 12, tpa: 46, tpPct: 26.1 },
  { id: "north-park-runners-p2", teamId: "north-park-runners", division: "recreational", number: 0, name: "Cole Bennett", gp: 1, ppg: 12.0, rpg: 5.7, apg: 2.6, spg: 0.8, bpg: 0.8, fgm: 36, fga: 96, fgPct: 37.5, ftm: 12, fta: 20, ftPct: 60.0, tpm: 9, tpa: 36, tpPct: 25.0 },
  { id: "north-park-runners-p3", teamId: "north-park-runners", division: "recreational", number: 0, name: "Rory Lewis", gp: 1, ppg: 10.8, rpg: 7.0, apg: 1.9, spg: 0.6, bpg: 0.9, fgm: 32, fga: 88, fgPct: 36.4, ftm: 7, fta: 13, ftPct: 53.8, tpm: 5, tpa: 22, tpPct: 22.7 },
  { id: "north-park-runners-p4", teamId: "north-park-runners", division: "recreational", number: 0, name: "Omar Chen", gp: 1, ppg: 8.9, rpg: 3.0, apg: 3.4, spg: 0.8, bpg: 0.2, fgm: 26, fga: 76, fgPct: 34.2, ftm: 8, fta: 11, ftPct: 72.7, tpm: 6, tpa: 26, tpPct: 23.1 },
  { id: "north-park-runners-p5", teamId: "north-park-runners", division: "recreational", number: 0, name: "Eli Singh", gp: 1, ppg: 6.3, rpg: 3.7, apg: 1.0, spg: 0.5, bpg: 0.5, fgm: 18, fga: 58, fgPct: 31.0, ftm: 6, fta: 10, ftPct: 60.0, tpm: 3, tpa: 16, tpPct: 18.8 },

  // -------------------------
  // downtown-dribblers (5)
  // -------------------------
  { id: "downtown-dribblers-p1", teamId: "downtown-dribblers", division: "recreational", number: 0, name: "Nate Carter", gp: 1, ppg: 14.2, rpg: 4.7, apg: 3.9, spg: 1.0, bpg: 0.3, fgm: 42, fga: 110, fgPct: 38.2, ftm: 18, fta: 26, ftPct: 69.2, tpm: 11, tpa: 44, tpPct: 25.0 },
  { id: "downtown-dribblers-p2", teamId: "downtown-dribblers", division: "recreational", number: 0, name: "Miles Jackson", gp: 1, ppg: 11.9, rpg: 5.4, apg: 2.4, spg: 0.8, bpg: 0.7, fgm: 35, fga: 96, fgPct: 36.5, ftm: 12, fta: 20, ftPct: 60.0, tpm: 8, tpa: 34, tpPct: 23.5 },
  { id: "downtown-dribblers-p3", teamId: "downtown-dribblers", division: "recreational", number: 0, name: "Elliot Wright", gp: 1, ppg: 10.5, rpg: 6.8, apg: 1.8, spg: 0.6, bpg: 0.9, fgm: 31, fga: 88, fgPct: 35.2, ftm: 7, fta: 13, ftPct: 53.8, tpm: 5, tpa: 22, tpPct: 22.7 },
  { id: "downtown-dribblers-p4", teamId: "downtown-dribblers", division: "recreational", number: 0, name: "Rohan Patel", gp: 1, ppg: 8.4, rpg: 2.9, apg: 3.2, spg: 0.8, bpg: 0.2, fgm: 25, fga: 74, fgPct: 33.8, ftm: 8, fta: 11, ftPct: 72.7, tpm: 5, tpa: 24, tpPct: 20.8 },
  { id: "downtown-dribblers-p5", teamId: "downtown-dribblers", division: "recreational", number: 0, name: "Jayden Cruz", gp: 1, ppg: 6.1, rpg: 3.6, apg: 1.0, spg: 0.4, bpg: 0.4, fgm: 17, fga: 56, fgPct: 30.4, ftm: 6, fta: 10, ftPct: 60.0, tpm: 3, tpa: 16, tpPct: 18.8 },

  // -------------------------
  // west-end-warriors (5)
  // -------------------------
  { id: "west-end-warriors-p1", teamId: "west-end-warriors", division: "recreational", number: 0, name: "Dylan Scott", gp: 1, ppg: 13.7, rpg: 4.6, apg: 3.6, spg: 1.0, bpg: 0.3, fgm: 40, fga: 110, fgPct: 36.4, ftm: 16, fta: 26, ftPct: 61.5, tpm: 11, tpa: 46, tpPct: 23.9 },
  { id: "west-end-warriors-p2", teamId: "west-end-warriors", division: "recreational", number: 0, name: "Carter Lee", gp: 1, ppg: 11.2, rpg: 5.2, apg: 2.2, spg: 0.8, bpg: 0.7, fgm: 33, fga: 96, fgPct: 34.4, ftm: 12, fta: 20, ftPct: 60.0, tpm: 8, tpa: 36, tpPct: 22.2 },
  { id: "west-end-warriors-p3", teamId: "west-end-warriors", division: "recreational", number: 0, name: "Avery Wright", gp: 1, ppg: 10.0, rpg: 6.4, apg: 1.6, spg: 0.6, bpg: 0.9, fgm: 29, fga: 88, fgPct: 33.0, ftm: 7, fta: 13, ftPct: 53.8, tpm: 5, tpa: 22, tpPct: 22.7 },
  { id: "west-end-warriors-p4", teamId: "west-end-warriors", division: "recreational", number: 0, name: "Omar Ali", gp: 1, ppg: 8.2, rpg: 2.8, apg: 3.0, spg: 0.7, bpg: 0.2, fgm: 24, fga: 74, fgPct: 32.4, ftm: 8, fta: 11, ftPct: 72.7, tpm: 5, tpa: 26, tpPct: 19.2 },
  { id: "west-end-warriors-p5", teamId: "west-end-warriors", division: "recreational", number: 0, name: "Ethan Nguyen", gp: 1, ppg: 5.8, rpg: 3.5, apg: 0.9, spg: 0.4, bpg: 0.4, fgm: 16, fga: 56, fgPct: 28.6, ftm: 6, fta: 10, ftPct: 60.0, tpm: 3, tpa: 16, tpPct: 18.8 },

  // -------------------------
  // riverfront-rivals (5)
  // -------------------------
  { id: "riverfront-rivals-p1", teamId: "riverfront-rivals", division: "recreational", number: 0, name: "Isaiah Brooks", gp: 1, ppg: 12.9, rpg: 4.4, apg: 3.4, spg: 0.9, bpg: 0.3, fgm: 36, fga: 104, fgPct: 34.6, ftm: 16, fta: 26, ftPct: 61.5, tpm: 10, tpa: 44, tpPct: 22.7 },
  { id: "riverfront-rivals-p2", teamId: "riverfront-rivals", division: "recreational", number: 0, name: "Marcus Stone", gp: 1, ppg: 10.8, rpg: 5.0, apg: 2.0, spg: 0.7, bpg: 0.6, fgm: 30, fga: 90, fgPct: 33.3, ftm: 12, fta: 20, ftPct: 60.0, tpm: 7, tpa: 34, tpPct: 20.6 },
  { id: "riverfront-rivals-p3", teamId: "riverfront-rivals", division: "recreational", number: 0, name: "Caleb Chen", gp: 1, ppg: 9.9, rpg: 6.0, apg: 1.5, spg: 0.5, bpg: 0.8, fgm: 27, fga: 84, fgPct: 32.1, ftm: 7, fta: 13, ftPct: 53.8, tpm: 4, tpa: 22, tpPct: 18.2 },
  { id: "riverfront-rivals-p4", teamId: "riverfront-rivals", division: "recreational", number: 0, name: "Rohan Patel", gp: 1, ppg: 7.8, rpg: 2.6, apg: 2.8, spg: 0.6, bpg: 0.2, fgm: 21, fga: 72, fgPct: 29.2, ftm: 8, fta: 11, ftPct: 72.7, tpm: 4, tpa: 26, tpPct: 15.4 },
  { id: "riverfront-rivals-p5", teamId: "riverfront-rivals", division: "recreational", number: 0, name: "Evan Ali", gp: 1, ppg: 5.4, rpg: 3.3, apg: 0.8, spg: 0.4, bpg: 0.4, fgm: 14, fga: 52, fgPct: 26.9, ftm: 6, fta: 10, ftPct: 60.0, tpm: 2, tpa: 14, tpPct: 14.3 },
];
