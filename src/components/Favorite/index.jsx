import React, { useContext } from "react";
import { LanguageContext } from "../../context";
import MovieCard from "../MovieCard";

const Favorite = () => {
  const { favorite } = useContext(LanguageContext);
  console.log(favorite);
  return (
    <div className="popular">
      <div className="container">
        <div className="popular--movie">
          {favorite?.map((el) => <MovieCard movie={el}/>)}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
