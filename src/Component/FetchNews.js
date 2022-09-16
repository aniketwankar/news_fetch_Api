import React, { useState } from "react";
import axios from "axios";

function FetchNews() {
  const [news, setNews] = useState([]);

  function btn() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=6b5fe37821e44319aec878df73c03489"
      )
      .then((res) => {
        console.log(res);
        setNews(res.data.articles);
      });
  }

  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="cols-8">
            <h1 class="display-1">All Latest News</h1>
            <div>
              <button className="btn btn-primary" onClick={btn}>
                Load News{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {news.map((data) => {
            return (
              <div className="col-4">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={data.urlToImage}
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.url} className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
//addd project

export default FetchNews;
