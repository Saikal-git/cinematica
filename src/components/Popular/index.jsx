import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../MovieCard";
import load from "../../assets/img/load.svg";
import { API_KEY } from "../../API";
import { LanguageContext } from "../../context";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const [count, setCount] = useState(1);
  const {language} = useContext(LanguageContext)

  const getPopular = (key) => {
    setPopular([]);
    setTimeout(() => {
      axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${count}`
      )
        .then((res) => {
          console.log(res.data.results);
          setPopular(res.data.results);
        })
        .catch((res) => console.log(res.massege));
    }, 1500);
  };

  useEffect(() => {
    getPopular(API_KEY);
  }, [count, language]);

  return (
    <div id="popular">
      <div className="container">
        {!popular.length ? (
          <div className="loading">
            <img src={load} alt="img" width={100} />
          </div>
        ) : (
          <div className="popular">
            <div className="popular--movie">
              {popular.map((el, idx) => (
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

export default Popular;
