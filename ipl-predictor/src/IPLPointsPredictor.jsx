import React, { useState } from "react";

import csk from "./assets/CSKoutline.avif";
import dc from "./assets/DCoutline.avif";
import gt from "./assets/GToutline.avif";
import kkr from "./assets/KKRoutline.avif";
import lsg from "./assets/LSGoutline.avif";
import mi from "./assets/MIoutline.avif";
import pbks from "./assets/PBKSoutline.avif";
import rr from "./assets/RRoutline.avif";
import rcb from "./assets/RCBoutline.avif";
import srh from "./assets/SRHoutline.avif";

const teamsData = [
  { name: "CSK", full: "Chennai Super Kings", color: "rgba(254, 221, 0, 0.7)", logo: csk },
  { name: "MI", full: "Mumbai Indians", color: "rgba(4, 80, 147, 0.7)", logo: mi },
  { name: "RCB", full: "Royal Challengers Bengaluru", color: "rgba(218, 24, 24, 0.7)", logo: rcb },
  { name: "KKR", full: "Kolkata Knight Riders", color: "rgba(59, 33, 93, 0.7)", logo: kkr },
  { name: "RR", full: "Rajasthan Royals", color: "rgba(255, 40, 219, 0.7)", logo: rr },
  { name: "SRH", full: "Sunrisers Hyderabad", color: "rgba(251, 100, 62, 0.7)", logo: srh },
  { name: "DC", full: "Delhi Capitals", color: "rgba(0, 208, 255, 0.7)", logo: dc },
  { name: "LSG", full: "Lucknow Super Giants", color: "rgba(3, 248, 224, 0.7)", logo: lsg },
  { name: "GT", full: "Gujarat Titans", color: "rgba(12, 35, 64, 0.7)", logo: gt },
  { name: "PBKS", full: "Punjab Kings", color: "rgba(156, 41, 30, 0.7)", logo: pbks },
];

const initialTeams = teamsData.map(team => ({
  ...team,
  played: 0,
  won: 0,
  lost: 0,
  points: 0
}));

const initialMatches = [
  { id: 1, teamA: "KKR", teamB: "RCB" },
  { id: 2, teamA: "SRH", teamB: "RR" },
  { id: 3, teamA: "CSK", teamB: "MI" },
  { id: 4, teamA: "DC", teamB: "LSG" },
  { id: 5, teamA: "GT", teamB: "PBKS" },
  { id: 6, teamA: "RR", teamB: "KKR" },
  { id: 7, teamA: "SRH", teamB: "LSG" },
  { id: 8, teamA: "CSK", teamB: "RCB" },
  { id: 9, teamA: "GT", teamB: "MI" },
  { id: 10, teamA: "DC", teamB: "SRH" },
  { id: 11, teamA: "RR", teamB: "CSK" },
  { id: 12, teamA: "MI", teamB: "KKR" },
  { id: 13, teamA: "LSG", teamB: "PBKS" },
  { id: 14, teamA: "RCB", teamB: "GT" },
  { id: 15, teamA: "KKR", teamB: "SRH" },
  { id: 16, teamA: "LSG", teamB: "MI" },
  { id: 17, teamA: "CSK", teamB: "DC" },
  { id: 18, teamA: "PBKS", teamB: "RR" },
  { id: 19, teamA: "KKR", teamB: "LSG" },
  { id: 20, teamA: "SRH", teamB: "GT" },
  { id: 21, teamA: "MI", teamB: "RCB" },
  { id: 22, teamA: "PBKS", teamB: "CSK" },
  { id: 23, teamA: "GT", teamB: "RR" },
  { id: 24, teamA: "RCB", teamB: "DC" },
  { id: 25, teamA: "CSK", teamB: "KKR" },
  { id: 26, teamA: "LSG", teamB: "GT" },
  { id: 27, teamA: "SRH", teamB: "PBKS" },
  { id: 28, teamA: "RR", teamB: "RCB" },
  { id: 29, teamA: "DC", teamB: "MI" },
  { id: 30, teamA: "LSG", teamB: "CSK" },
  { id: 31, teamA: "PBKS", teamB: "KKR" },
  { id: 32, teamA: "DC", teamB: "RR" },
  { id: 33, teamA: "MI", teamB: "SRH" },
  { id: 34, teamA: "RCB", teamB: "PBKS" },
  { id: 35, teamA: "GT", teamB: "DC" },
  { id: 36, teamA: "RR", teamB: "LSG" },
  { id: 37, teamA: "PBKS", teamB: "RCB" },
  { id: 38, teamA: "MI", teamB: "CSK" },
  { id: 39, teamA: "KKR", teamB: "GT" },
  { id: 40, teamA: "LSG", teamB: "DC" },
  { id: 41, teamA: "SRH", teamB: "MI" },
  { id: 42, teamA: "RCB", teamB: "RR" },
  { id: 43, teamA: "CSK", teamB: "SRH" },
  { id: 44, teamA: "KKR", teamB: "PBKS" },
  { id: 45, teamA: "MI", teamB: "LSG" },
  { id: 46, teamA: "DC", teamB: "RCB" },
  { id: 47, teamA: "RR", teamB: "GT" },
  { id: 48, teamA: "DC", teamB: "KKR" },
  { id: 49, teamA: "CSK", teamB: "PBKS" },
  { id: 50, teamA: "RR", teamB: "MI" },
  { id: 51, teamA: "GT", teamB: "SRH" },
  { id: 52, teamA: "RCB", teamB: "CSK" },
  { id: 53, teamA: "KKR", teamB: "RR" },
  { id: 54, teamA: "PBKS", teamB: "LSG" },
  { id: 55, teamA: "SRH", teamB: "DC" },
  { id: 56, teamA: "MI", teamB: "GT" },
  { id: 57, teamA: "KKR", teamB: "CSK" },
  { id: 58, teamA: "PBKS", teamB: "DC" },
  { id: 59, teamA: "LSG", teamB: "RCB" },
  { id: 60, teamA: "SRH", teamB: "KKR" },
  { id: 61, teamA: "PBKS", teamB: "MI" },
  { id: 62, teamA: "DC", teamB: "GT" },
  { id: 63, teamA: "CSK", teamB: "RR" },
  { id: 64, teamA: "RCB", teamB: "SRH" },
  { id: 65, teamA: "GT", teamB: "LSG" },
  { id: 66, teamA: "MI", teamB: "DC" },
  { id: 67, teamA: "RR", teamB: "PBKS" },
  { id: 68, teamA: "RCB", teamB: "KKR" },
  { id: 69, teamA: "GT", teamB: "CSK" },
  { id: 70, teamA: "LSG", teamB: "SRH" },
  { id: "Qualifier 1", teamA: "Top 1", teamB: "Top 2" }, 
  { id: "Eliminator", teamA: "Top 3", teamB: "Top 4" },
  { id: "Qualifier 2", teamA: "Loser of Qualifier 1", teamB: "Winner of Eliminator" },
  { id: "Final", teamA: "Winner of Qualifier 1", teamB: "Winner of Qualifier 2" },
];


export default function IPLPointsPredictor() {
  const [teams, setTeams] = useState(initialTeams);
  const [matches, setMatches] = useState(initialMatches.map(m => ({ ...m, winner: null })));
  const [selectedTeam, setSelectedTeam] = useState("All");

  const handleWin = (matchId, winner) => {
    const updatedMatches = matches.map(m =>
      m.id === matchId ? { ...m, winner } : m
    );
    setMatches(updatedMatches);

    const match = updatedMatches.find(m => m.id === matchId);
    const loser = match.teamA === winner ? match.teamB : match.teamA;

    const updatedTeams = teams.map(team => {
      if (team.name === winner) {
        return { ...team, played: team.played + 1, won: team.won + 1, points: team.points + 2 };
      } else if (team.name === loser) {
        return { ...team, played: team.played + 1, lost: team.lost + 1 };
      }
      return team;
    });

    setTeams(updatedTeams);
  };

  const sortedTeams = [...teams].sort((a, b) => b.points - a.points);

  const handleResetTable = () => {
    setTeams(initialTeams);
    setMatches(initialMatches.map(m => ({ ...m, winner: null })));
  };

  const handleUndoWin = (matchId) => {
    const match = matches.find(m => m.id === matchId);
    if (!match || !match.winner) return; // If no winner selected, do nothing

    const loser = match.teamA === match.winner ? match.teamB : match.teamA;
    const updatedTeams = teams.map(team => {
    if (team.name === match.winner) 
    {
      return { ...team, played: team.played - 1, won: team.won - 1, points: team.points - 2 };
    } 
    else if (team.name === loser) 
    {
      return { ...team, played: team.played - 1, lost: team.lost - 1 };
    }
    return team;
    });

    const updatedMatches = matches.map(m => 
    m.id === matchId ? { ...m, winner: null } : m
    );

    setTeams(updatedTeams);
    setMatches(updatedMatches);
  };

  const handleDraw = (matchId) => {
    const updatedMatches = matches.map(m =>
      m.id === matchId ? { ...m, winner: "Draw" } : m
    );
    setMatches(updatedMatches);
  
    const match = updatedMatches.find(m => m.id === matchId);
    if (!match) return;
  
    const updatedTeams = teams.map(team => {
      if (team.name === match.teamA || team.name === match.teamB) {
        return { ...team, played: team.played + 1, points: team.points + 1 };
      }
      return team;
    });
  
    setTeams(updatedTeams);
  }; 

  return (
    <div className="predictor-container">
      <h2 className="section-title">Points Table</h2>

      <div className="table-container" style={{ overflowX: 'auto' }}>
        <table className="points-table">
          <thead>
            <tr>
              <th className="position-row">Position</th>
              <th className="teamname-row">Team</th>
              <th>Played</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {sortedTeams.map((team, index) => (
              <tr key={team.name} style={{ backgroundColor: team.color }}>
                <td className="position-number">{index + 1}</td>
                <td className="team-cell">
                  <img src={team.logo} alt={team.name} className="team-logo-inline" />
                  <span className="team-name">{team.full}</span>
                </td>
                <td>{team.played}</td>
                <td className="won">{team.won}</td>
                <td className="lost">{team.lost}</td>
                <td className="points">{team.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="section-title">Upcoming Matches</h2>
            
      <div className="filter-bar">
        <div className="filter-left">
          <label htmlFor="teamFilter" className="filter-label">Filter by Team:</label>
          <select
            id="teamFilter"
            className="filter-select"
            value={selectedTeam}
            onChange={(e) => setSelectedTeam(e.target.value)}
          >
            <option value="All">All Teams</option>
            {teams.map(team => (
            <option key={team.name} value={team.name}>{team.full}</option>
            ))}
          </select>
        </div>
        <div className="filter-right">
          <button onClick={handleResetTable} className="reset-button">🔄 Reset Table</button>
        </div>
      </div>

      <div className="matches-container">
        {matches.filter(match => 
          selectedTeam === "All" ||
          match.teamA === selectedTeam ||
          match.teamB === selectedTeam
        )
        .map(match => (
          <div key={match.id} className="match-card">
            <div className="match-info">Match {match.id}: {match.teamA} vs {match.teamB}</div>
            {match.winner ? (
              <div className="winner">
                {match.winner === "Draw" ? "Match Drawn" : `${match.winner} Won`}
                <button onClick={() => handleUndoWin(match.id)} className="reset-match-button">❌</button>
              </div>
            ) : (
              <div className="match-buttons">
                <button onClick={() => handleWin(match.id, match.teamA)}>{match.teamA}</button>
                <button onClick={() => handleWin(match.id, match.teamB)}>{match.teamB}</button>
                <button onClick={() => handleDraw(match.id)} className="draw-button">Draw</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
