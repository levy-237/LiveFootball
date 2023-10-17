import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TopScorer from "../components/TopScorer";
import LiveCountryMatch from "../components/LiveCountryMatch";
export default function EuroCups() {
  const [liveGames, setLiveGames] = useState(false);
  const [upcomingGames, setUpcomingGames] = useState(true);
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [upData, setUpData] = useState([]);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();
  const upComingMonth = currentDate.getMonth() + 2;

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
      setUpData(slicedData);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchEuroCups() {
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
    fetchEuroCups();
    fetchUpComingData();
  }, []);
  const liveGame = () => {
    setLiveGames(true);
    setUpcomingGames(false);
  };
  const upcomingGame = () => {
    setLiveGames(false);
    setUpcomingGames(true);
  };
  const nameData = data.map((obj) => obj.league_name);
  const name = nameData.slice(0, 1);
  const groupA = data.slice(0, 4);
  const groupB = data.slice(4, 8);
  const groupC = data.slice(8, 12);
  const groupD = data.slice(12, 16);
  const groupE = data.slice(16, 20);
  const groupF = data.slice(20, 24);
  const groupG = data.slice(24, 28);
  const groupH = data.slice(28, 32);

  return (
    <div className="EuroCupPage">
      <h1 className="euroCupHeader">{name}</h1>
      <div className="euroStandingContainer">
        <div className="euroStandingColumn">
          <div className="euroStandingInfo">
            <p>P</p>
            <p>W</p>
            <p>D</p>
            <p>L</p>
            <p>GD</p>
            <p>PTS</p>
          </div>
          {groupA.map((x, i) => (
            <div className="euroStanding" key={i}>
              <div className="euroStandingTop">
                <p className="euroNum">{x.overall_league_position}</p>
                <img src={x.team_badge} alt="teamBadge" loading="lazy" />
                <h4>{x.team_name}</h4>
              </div>
              <div className="euroStandingLow">
                <p>{x.overall_league_payed}</p>
                <p>{x.overall_league_W}</p>
                <p>{x.overall_league_D}</p>
                <p>{x.overall_league_L}</p>
                <p>{x.overall_league_GF - x.overall_league_GA}</p>
                <p>{x.overall_league_PTS}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="euroStandingColumn">
          <div className="euroStandingInfo">
            <p>P</p>
            <p>W</p>
            <p>D</p>
            <p>L</p>
            <p>GD</p>
            <p>PTS</p>
          </div>
          {groupB.map((x, i) => (
            <div className="euroStanding" key={i}>
              <div className="euroStandingTop">
                <p className="euroNum">{x.overall_league_position}</p>
                <img src={x.team_badge} alt="teamBadge" loading="lazy" />
                <h4>{x.team_name}</h4>
              </div>
              <div className="euroStandingLow">
                <p>{x.overall_league_payed}</p>
                <p>{x.overall_league_W}</p>
                <p>{x.overall_league_D}</p>
                <p>{x.overall_league_L}</p>
                <p>{x.overall_league_GF - x.overall_league_GA}</p>
                <p>{x.overall_league_PTS}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="euroStandingColumn">
          <div className="euroStandingInfo">
            <p>P</p>
            <p>W</p>
            <p>D</p>
            <p>L</p>
            <p>GD</p>
            <p>PTS</p>
          </div>
          {groupC.map((x, i) => (
            <div className="euroStanding" key={i}>
              <div className="euroStandingTop">
                <p className="euroNum">{x.overall_league_position}</p>
                <img src={x.team_badge} alt="teamBadge" loading="lazy" />
                <h4>{x.team_name}</h4>
              </div>
              <div className="euroStandingLow">
                <p>{x.overall_league_payed}</p>
                <p>{x.overall_league_W}</p>
                <p>{x.overall_league_D}</p>
                <p>{x.overall_league_L}</p>
                <p>{x.overall_league_GF - x.overall_league_GA}</p>
                <p>{x.overall_league_PTS}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="euroStandingColumn">
          <div className="euroStandingInfo">
            <p>P</p>
            <p>W</p>
            <p>D</p>
            <p>L</p>
            <p>GD</p>
            <p>PTS</p>
          </div>
          {groupD.map((x, i) => (
            <div className="euroStanding" key={i}>
              <div className="euroStandingTop">
                <p className="euroNum">{x.overall_league_position}</p>
                <img src={x.team_badge} alt="teamBadge" loading="lazy" />
                <h4>{x.team_name}</h4>
              </div>
              <div className="euroStandingLow">
                <p>{x.overall_league_payed}</p>
                <p>{x.overall_league_W}</p>
                <p>{x.overall_league_D}</p>
                <p>{x.overall_league_L}</p>
                <p>{x.overall_league_GF - x.overall_league_GA}</p>
                <p>{x.overall_league_PTS}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="euroStandingColumn">
          <div className="euroStandingInfo">
            <p>P</p>
            <p>W</p>
            <p>D</p>
            <p>L</p>
            <p>GD</p>
            <p>PTS</p>
          </div>
          {groupE.map((x, i) => (
            <div className="euroStanding" key={i}>
              <div className="euroStandingTop">
                <p className="euroNum">{x.overall_league_position}</p>
                <img src={x.team_badge} alt="teamBadge" loading="lazy" />
                <h4>{x.team_name}</h4>
              </div>
              <div className="euroStandingLow">
                <p>{x.overall_league_payed}</p>
                <p>{x.overall_league_W}</p>
                <p>{x.overall_league_D}</p>
                <p>{x.overall_league_L}</p>
                <p>{x.overall_league_GF - x.overall_league_GA}</p>
                <p>{x.overall_league_PTS}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="euroStandingColumn">
          <div className="euroStandingInfo">
            <p>P</p>
            <p>W</p>
            <p>D</p>
            <p>L</p>
            <p>GD</p>
            <p>PTS</p>
          </div>
          {groupF.map((x, i) => (
            <div className="euroStanding" key={i}>
              <div className="euroStandingTop">
                <p className="euroNum">{x.overall_league_position}</p>
                <img src={x.team_badge} alt="teamBadge" loading="lazy" />
                <h4>{x.team_name}</h4>
              </div>
              <div className="euroStandingLow">
                <p>{x.overall_league_payed}</p>
                <p>{x.overall_league_W}</p>
                <p>{x.overall_league_D}</p>
                <p>{x.overall_league_L}</p>
                <p>{x.overall_league_GF - x.overall_league_GA}</p>
                <p>{x.overall_league_PTS}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="euroStandingColumn">
          <div className="euroStandingInfo">
            <p>P</p>
            <p>W</p>
            <p>D</p>
            <p>L</p>
            <p>GD</p>
            <p>PTS</p>
          </div>
          {groupG.map((x, i) => (
            <div className="euroStanding" key={i}>
              <div className="euroStandingTop">
                <p className="euroNum">{x.overall_league_position}</p>
                <img src={x.team_badge} alt="teamBadge" loading="lazy" />
                <h4>{x.team_name}</h4>
              </div>
              <div className="euroStandingLow">
                <p>{x.overall_league_payed}</p>
                <p>{x.overall_league_W}</p>
                <p>{x.overall_league_D}</p>
                <p>{x.overall_league_L}</p>
                <p>{x.overall_league_GF - x.overall_league_GA}</p>
                <p>{x.overall_league_PTS}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="euroStandingColumn">
          <div className="euroStandingInfo">
            <p>P</p>
            <p>W</p>
            <p>D</p>
            <p>L</p>
            <p>GD</p>
            <p>PTS</p>
          </div>
          {groupA.map((x, i) => (
            <div className="euroStanding" key={i}>
              <div className="euroStandingTop">
                <p className="euroNum">{x.overall_league_position}</p>
                <img src={x.team_badge} alt="teamBadge" loading="lazy" />
                <h4>{x.team_name}</h4>
              </div>
              <div className="euroStandingLow">
                <p>{x.overall_league_payed}</p>
                <p>{x.overall_league_W}</p>
                <p>{x.overall_league_D}</p>
                <p>{x.overall_league_L}</p>
                <p>{x.overall_league_GF - x.overall_league_GA}</p>
                <p>{x.overall_league_PTS}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="euroStandingColumn">
          <div className="euroStandingInfo">
            <p>P</p>
            <p>W</p>
            <p>D</p>
            <p>L</p>
            <p>GD</p>
            <p>PTS</p>
          </div>
          {groupH.map((x, i) => (
            <div className="euroStanding" key={i}>
              <div className="euroStandingTop">
                <p className="euroNum">{x.overall_league_position}</p>
                <img src={x.team_badge} alt="teamBadge" loading="lazy" />
                <h4>{x.team_name}</h4>
              </div>
              <div className="euroStandingLow">
                <p>{x.overall_league_payed}</p>
                <p>{x.overall_league_W}</p>
                <p>{x.overall_league_D}</p>
                <p>{x.overall_league_L}</p>
                <p>{x.overall_league_GF - x.overall_league_GA}</p>
                <p>{x.overall_league_PTS}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="euroButton"></div>
      <div className="euroCupTop">
        <TopScorer id={id} />
        <div className="euroButton">
          <div className="leagueGameOption">
            <button onClick={liveGame}>Live Int matches</button>
            <button onClick={upcomingGame}>Upcoming matches</button>
          </div>
          {liveGames && <LiveCountryMatch />}
          {upcomingGames && (
            <div className="leagueMatches">
              {upData &&
                upData.map((x, i) => (
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
      </div>
    </div>
  );
}
