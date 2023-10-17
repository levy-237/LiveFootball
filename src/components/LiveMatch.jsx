import { object } from "prop-types";
import React, { useEffect, useState } from "react";
export default function LiveMatch() {
  const [live, setLive] = useState();
  async function fetchLive() {
    try {
      const response = await fetch(
        "https://apiv3.apifootball.com/?action=get_live_odds_commnets&APIkey=0490257b57bacc27910d998de4a5000247eb04b5f3a415f81cf53da0259b97d8"
      );
      if (!response.ok) {
        throw new Error("not ok");
      }
      const data = await response.json();
      const matchesArray = Object.values(data);
      setLive(matchesArray);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchLive();
    // Set up an interval to fetch data every minute (60000 milliseconds)
    const intervalId = setInterval(fetchLive, 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="live">
      {live &&
        live.map((x, i) => (
          <div key={i}>
            <h4 className="liveHeader">{x.league_name}</h4>
            <div className="liveDisplay">
              <div className="matchTime">
                {x.match_status === "Half Time" ? (
                  <div className="liveTime">HT</div>
                ) : (
                  <div className="liveTime">{x.match_status}'</div>
                )}
                <div className="blinking-dot"></div>
              </div>
              <div className="liveDet">
                <div>
                  <p>{x.match_hometeam_name}</p>
                  <span>{x.match_hometeam_score}</span>
                </div>
                <div>
                  <p>{x.match_awayteam_name}</p>
                  <span>{x.match_awayteam_score}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
