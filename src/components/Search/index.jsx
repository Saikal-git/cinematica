import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { API_KEY } from "../../API";
import { useParams } from "react-router-dom";
import MovieCard from "../MovieCard";

const Search = () => {
  const [search, setSearch] = useState([]);
  let { movieName } = useParams();
  const getSearch = (key) => {
    axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`
    ).then((res) => {
      setSearch(res.data.results);
      console.log(res.data);
    });
  };

  useEffect(() => {
    getSearch(API_KEY);
  }, [movieName]);
  return (
    <div id="popular">
      <div className="container">
        <div className="popular--movie">
          {search?.map((el) => (
            <MovieCard movie={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
