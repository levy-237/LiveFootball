import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function News() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      " https://api.thenewsapi.com/v1/news/all?api_token=yK0ewZrXS6cSpNJPt7I4cYzAlUhCinzsPnEMAKk4&language=en&limit=3&search=soccer"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.data));
  }, []);
  return (
    <div className="newsPage">
      <h1>Football News</h1>
      <div className="newsContainer">
        {news.map((x, i) => (
          <div key={i} className="news">
            <img src={x.image_url} alt="newsImage" loading="lazy" />
            <h4>{x.title}</h4>
            <p>{x.description}</p>
            <Link to={x.url}>Link to article</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
