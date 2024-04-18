import React, { useContext } from "react";
import { LanguageContext } from "../../context";

const Favorite = () => {
  const { favorite } = useContext(LanguageContext);
  console.log(favorite);
  return (
    <div className="popular">
      <div className="container">
        <div className="popular--movie">
          {favorite?.map((el) => (
            <div>
              <img
                src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${el.poster_path}`}
                alt="img"
                width={200}
              />
              <h2>{el.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorite;
