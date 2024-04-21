import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";
import load from "../../assets/img/load.svg";
import { LanguageContext } from "../../context";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const [count, setCount] = useState(1);
  const {language} = useContext(LanguageContext)

  const getTopRated = (key) => {
    setTopRated([]);
    setTimeout(() => {
      axios(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${count}`
      )
        .then((res) => {
          setTopRated(res.data.results);
        })
        .catch((res) => {
          console.error(res);
        });
    }, 1500);
  };

  useEffect(() => {
    getTopRated(API_KEY);
  }, [count, language]);

  return (
    <div id="popular">
      <div className="container">
        {!topRated.length ? (
          <div className="loading">
            <img src={load} alt="img" width={100} />
          </div>
        ) : (
          <div className="popular">
            <div className="popular--movie">
              {topRated?.map((el, idx) => (
                <MovieCard movie={el} key={idx} />
              ))}
            </div>
            <div className="popular--pogination">
              <button onClick={() => setCount(count > 1 ? count - 1 : 1)}>
                Prev
              </button>
              <h1>{count}</h1>
              <button onClick={() => setCount(count + 1)}>Next</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TopRated;
