import React, { useEffect, useState } from "react";

export default function TopScorer({ id }) {
  const [player, setPlayer] = useState([]);
  async function fetchPlayer() {
    try {
      const response = await fetch(`
        https://apiv3.apifootball.com/?action=get_topscorers&league_id=${id}&APIkey=${
        import.meta.env.VITE_APIKEY
      }
        `);
      if (!response.ok) {
        throw new Error("not ok");
      }
      const data = await response.json();
      const slicedData = data.slice(0, 10);
      setPlayer(slicedData);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchPlayer();
  }, []);
  return (
    <div className="playerContainer">
      <h1>Top goal scorers</h1>
      <section className="playerHeader">
        <span> #</span>
        <span> Name</span>
        <p> Team</p>
        <span
          className="
        playerHeaderGoal"
        >
          Goals
        </span>
      </section>
      {player.map((x, i) => (
        <div key={i} className="playerDiv">
          <span className="playerPlace">{x.player_place}</span>
          <h5 className="playerName">{x.player_name}</h5>
          <p className="playerTeam">{x.team_name}</p>
          <p className="playerGoals">{x.goals}</p>
        </div>
      ))}
    </div>
  );
}
