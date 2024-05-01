import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import MovieCard from "../MovieCard";

const Favorite = () => {
  const { favorite } = useContext(LanguageContext);
  console.log(favorite);

  return (
    <div id="popular">
      <div className="container">
        <div className="popular--movie">
          {favorite.length ? (
            favorite?.map((el) => <MovieCard movie={el} />)
          ) : (
            <h1>у вас еще нет избранных фильмов</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
