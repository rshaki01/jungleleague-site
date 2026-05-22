"use client"
import {useEffect, useState} from 'react';
import { searchPlayersInArray, getTopPlayersByStat, getTeamById, getTopPlayersByThreePct } from '@/lib/data/helpers';
import StatisticsFilter from './StatisticsFilter';
import StatisticsTable from './StatisticsTable';
import PlayerStatsModal from './PlayerStatsModal';

const LEADERBOARDS = [
    { label: "POINTS PER GAME",   rawField: "pts" },
    { label: "REBOUNDS PER GAME", rawField: "reb" },
    { label: "ASSISTS PER GAME",  rawField: "ast" },
    { label: "STEALS PER GAME",   rawField: "stl" },
    { label: "BLOCKS PER GAME",   rawField: "blk" },
];

function LeaderboardTable({ players, teams, rawField, label }) {
    const sorted = getTopPlayersByStat(players, rawField, 10)
    const leader = sorted[0];
    const rest = sorted.slice(1);
    const leaderTeam = leader ? getTeamById(leader.teamId, teams) : null;
    const avg = (p) => ((p[rawField] ?? 0) / p.gp).toFixed(1);

    return (
        <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-gray-900/60 backdrop-blur-sm ">

            {/* Category label */}
            <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                <span className="text-[11px] font-bold tracking-widest text-yellow-400/80 uppercase">{label}</span>
            </div>

            {/* #1 leader */}
            {leader && (
                <div className="px-4 py-3 flex items-center gap-3 border-b border-white/10 bg-yellow-400/5">
                    <span className="text-yellow-400 font-black text-lg w-5 shrink-0">1</span>
                    <div className="flex-1 min-w-0">
                        <div className="font-bold text-white text-sm truncate">{leader.name}</div>
                        <div className="text-[10px] text-yellow-400/60 truncate">{leaderTeam ? leaderTeam.name : ''}</div>
                    </div>
                    <span className="text-yellow-400 font-black text-lg tabular-nums">{avg(leader)}</span>
                </div>
            )}

            {/* Ranks 2–10 */}
            <div>
                {rest.map((p, i) => {
                    const team = getTeamById(p.teamId, teams);
                    return (
                        <div key={p.id} className="px-4 py-2 flex items-center gap-3 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                            <span className="text-gray-500 font-semibold text-xs w-5 shrink-0 tabular-nums">{i + 2}</span>
                            <div className="flex-1 min-w-0">
                                <div className="text-gray-200 text-xs font-semibold truncate">{p.name}</div>
                                <div className="text-[10px] text-gray-500 truncate">{team ? team.name : ''}</div>
                            </div>
                            <span className="text-gray-300 text-xs font-bold tabular-nums">{avg(p)}</span>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

function ThreePctLeaderboard({ players, teams }) {
    const sortedThreePct = getTopPlayersByThreePct(players, 10);
    const leader = sortedThreePct[0];
    const rest = sortedThreePct.slice(1);
    const leaderTeam = leader ? getTeamById(leader.teamId, teams) : null;
    const threePct = (p) => ((p["tpm"] / p["tpa"]) * 100).toFixed(1);

    console.log(sortedThreePct);

    return (
        <div className="w-full rounded-xl overflow-hidden border border-white/10 bg-gray-900/60 backdrop-blur-sm ">

            {/* Category label */}
            <div className="px-4 py-2 bg-white/5 border-b border-white/10">
                <span className="text-[11px] font-bold tracking-widest text-yellow-400/80 uppercase">3PT %</span>
            </div>

            {/* #1 leader */}
            {leader && (
                <div className="px-4 py-3 flex items-center gap-3 border-b border-white/10 bg-yellow-400/5">
                    <span className="text-yellow-400 font-black text-lg w-5 shrink-0">1</span>
                    <div className="flex-1 min-w-0">
                        <div className="font-bold text-white text-sm truncate">{leader.name}</div>
                        <div className="text-[10px] text-yellow-400/60 truncate">{leaderTeam ? leaderTeam.name : ''}</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-yellow-400/60 text-[10px] tabular-nums">({leader.tpm}-{leader.tpa})</span>
                        <span className="text-yellow-400 font-black text-lg tabular-nums">{threePct(leader)}%</span>
                    </div>
                </div>
            )}

            {/* Ranks 2–10 */}
            <div>
                {rest.map((p, i) => {
                    const team = getTeamById(p.teamId, teams);
                    return (
                        <div key={p.id} className="px-4 py-2 flex items-center gap-3 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                            <span className="text-gray-500 font-semibold text-xs w-5 shrink-0 tabular-nums">{i + 2}</span>
                            <div className="flex-1 min-w-0">
                                <div className="text-gray-200 text-xs font-semibold truncate">{p.name}</div>
                                <div className="text-[10px] text-gray-500 truncate">{team ? team.name : ''}</div>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="text-gray-500 text-[10px] tabular-nums">({p.tpm}-{p.tpa})</span>
                                <span className="text-gray-300 text-xs font-bold tabular-nums">{threePct(p)}%</span>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}

export default function StatisticsClient({division, initialPlayers, initialTeams}) {

    const [players, setPlayers] = useState(initialPlayers); // contains all players from respective division
    const [teams, setTeams] = useState(initialTeams);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPlayer, setSelectedPlayer] = useState("");
    const [isModalOpen, setModal] = useState(false);
    const firestoreFilteredResults = searchPlayersInArray(players, searchTerm);


    const handleSelectPlayer = (player) => {
    setSelectedPlayer(player);     // pass full player object
    setModal(true);            // open modal
    setSearchTerm("");             // optional: clears input (closes dropdown)
    };


    return (
        <div className="">
            <StatisticsFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} resultedPlayers={firestoreFilteredResults} onSelectPlayer={handleSelectPlayer} teams={teams}/>

            <h2 className="text-xl font-semibold text-center mt-6 mb-2">Leaders</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2 mb-5">
                {LEADERBOARDS.map(({ label, rawField }) => (
                    <div key={rawField}>
                        <LeaderboardTable players={players} teams={teams} rawField={rawField} label={label} />
                    </div>
                ))}
                <ThreePctLeaderboard players={players} teams={teams}/>
            </div>

            {isModalOpen && <PlayerStatsModal player={selectedPlayer} setModal={setModal} teams={teams}/>}

        </div>
      )

}
