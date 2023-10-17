import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
export default function LiveCountryMatch() {
  const [searchParams] = useSearchParams();
  const country = searchParams.get("country");
  const [liveData, setLiveData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://apiv3.apifootball.com/?action=get_live_odds_commnets&country_id=${country}&APIkey=${
          import.meta.env.VITE_APIKEY
        }`
      );
      if (!response.ok) {
        throw new Error("not ok");
      }
      let data = await response.json();
      data = Object.values(data);
      const slicedData = data.slice(0, 10);
      setLiveData(slicedData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {liveData.length > 2 ? (
        <div className="liveCountryContainer">
          {liveData.map((x, i) => (
            <div key={i}>
              <div className="liveCountry">
                <div className="matchTime">
                  {x.match_status === "Half Time" ? (
                    <div className="liveTime">HT</div>
                  ) : (
                    <div className="liveTime">{x.match_status}'</div>
                  )}
                  <div className="blinking-dot"></div>
                </div>

                <div className="liveCountryName">
                  <p>{x.match_hometeam_name}</p>
                  <br />
                  <p>{x.match_awayteam_name}</p>
                </div>
                <div className="liveCountryScore">
                  <p>{x.match_hometeam_score}</p>
                  <br />
                  <p>{x.match_awayteam_score}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 className="noGames">No Live matches</h1>
      )}
    </>
  );
}
