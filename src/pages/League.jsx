import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopScorer from "../components/TopScorer";
import LiveCountryMatch from "../components/LiveCountryMatch";
export default function League() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [upComingData, setUpComingData] = useState([]);
  const [liveGames, setLiveGames] = useState(false);
  const [upcomingGames, setUpcomingGames] = useState(true);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const upComingMonth = currentDate.getMonth() + 2;

  const liveGame = () => {
    setLiveGames(true);
    setUpcomingGames(false);
  };
  const upcomingGame = () => {
    setLiveGames(false);
    setUpcomingGames(true);
  };

  async function fetchUpComingData() {
    try {
      const response = await fetch(
        `https://apiv3.apifootball.com/?action=get_events&from=${currentYear}-${currentMonth}-${currentDay}&to=${currentYear}-${upComingMonth}-${currentDay}&league_id=${id}&APIkey=${
          import.meta.env.VITE_APIKEY
        }`
      );
      if (!response.ok) {
        throw new Error("not ok");
      }
      const data = await response.json();
      const slicedData = data.slice(0, 5);
      setUpComingData(slicedData);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchLeague() {
    const response = await fetch(
      `https://apiv3.apifootball.com/?action=get_standings&league_id=${id}&APIkey=${
        import.meta.env.VITE_APIKEY
      }`
    );
    if (!response.ok) {
      throw new Error("not ok");
    }
    const LeagueData = await response.json();
    setData(LeagueData);
  }

  useEffect(() => {
    fetchLeague();
    fetchUpComingData();
  }, [id]);

  return (
    <div className="leaguePage">
      <div className="standingTable">
        <h1 className="standingHeader">STANDINGS</h1>
        <div className="standingDec">
          <span>#</span>
          <span className="standingDecName">TEAM</span>
          <section className="standingDecStats">
            <span>PL</span>
            <span>W</span>
            <span>D</span>
            <span>L</span>
            <span>GF</span>
            <span>GA</span>
            <span>PTS</span>
          </section>
        </div>
        {data.map((x, i) => (
          <div key={i} className="standingColumn">
            <div className="standingInfo">
              <span
                className={`standingNum ${
                  x.overall_league_position >= 1 &&
                  x.overall_league_position <= 3
                    ? "top-position"
                    : ""
                }`}
              >
                {x.overall_league_position}
              </span>
              <img src={x.team_badge} alt="team badge" loading="lazy" />
              <span className="standingName">{x.team_name}</span>
            </div>
            <div className="standingStats">
              <span>{x.overall_league_payed}</span>
              <span>{x.overall_league_W}</span>
              <span>{x.overall_league_D}</span>
              <span>{x.overall_league_L}</span>
              <span>{x.overall_league_GF}</span>
              <span>{x.overall_league_GA}</span>
              <span>{x.overall_league_PTS}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="leagueMatchesContainer">
        <div className="leagueGameOption">
          <button onClick={liveGame}>Live matches</button>
          <button onClick={upcomingGame}>Upcoming matches</button>
        </div>
        {liveGames && <LiveCountryMatch />}
        {upcomingGames && (
          <div className="leagueMatches">
            {upComingData &&
              upComingData.map((x, i) => (
                <div key={i} className="matchDisplay">
                  <abr className="leagueInformation">
                    {x.match_date}-{x.match_time}
                  </abr>

                  <div>
                    <img
                      src={x.team_home_badge}
                      alt="team badge"
                      loading="lazy"
                    />
                    <p>{x.match_hometeam_name}</p>
                    <span>{x.match_hometeam_score}</span>
                  </div>
                  <div>
                    <img
                      src={x.team_away_badge}
                      alt="team badge"
                      loading="lazy"
                    />
                    <p>{x.match_awayteam_name}</p>
                    <span>{x.match_awayteam_score}</span>
                  </div>
                  <abr className="leagueStadium ">{x.match_stadium}</abr>
                </div>
              ))}
          </div>
        )}
      </div>
      <TopScorer id={id} />
    </div>
  );
}
