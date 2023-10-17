import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import LiveMatch from "../components/LiveMatch";
export default function Home() {
  const [data, setData] = useState([]);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const pastMonth = currentDate.getMonth();

  async function fetchPLData() {
    try {
      const response = await fetch(
        `https://apiv3.apifootball.com/?action=get_events&from=${currentYear}-${pastMonth}-${currentDay}&to=${currentYear}-${currentMonth}-${currentDay}&league_id=152&APIkey=${
          import.meta.env.VITE_APIKEY
        }`
      );
      if (!response.ok) {
        throw new Error("not ok");
      }
      const data = await response.json();
      const slicedData = data.slice(0, 7);
      setData((prevData) => [...prevData, ...slicedData]);
    } catch (error) {
      console.log(error);
    }
  }
  async function fetchCLData() {
    try {
      const response = await fetch(
        `https://apiv3.apifootball.com/?action=get_events&from=${currentYear}-${pastMonth}-${currentDay}&to=${currentYear}-${currentMonth}-${currentDay}&league_id=3&APIkey=${
          import.meta.env.VITE_APIKEY
        }`
      );
      if (!response.ok) {
        throw new Error("not ok");
      }
      const data = await response.json();
      const slicedData = data.slice(0, 7);
      setData((prevData) => [...prevData, ...slicedData]);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchCLData();
    fetchPLData();
  }, []);

  const displayData = data.reverse();

  return (
    <div className="home">
      <Sidebar />
      <div className="homeMatches">
        <div>
          <h1 className="honeHeader2">Live Games</h1>
          <LiveMatch />
        </div>
        <div className="homeDisplay">
          <h1 className="honeHeader">Previous Games</h1>
          {displayData &&
            displayData.map((x, i) => (
              <div key={i} className="matchDisplay">
                <div>
                  <img src={x.team_home_badge} />
                  <p>{x.match_hometeam_name}</p>
                  <span>{x.match_hometeam_score}</span>
                </div>
                <div>
                  <img src={x.team_away_badge} />
                  <p>{x.match_awayteam_name}</p>
                  <span>{x.match_awayteam_score}</span>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
