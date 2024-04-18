import React from "react";
import { Link } from "react-router-dom";
import fonFoto from "../../assets/img/fonn.jpg";

const MovieCard = ({ movie }) => {
  return (
    <div className="movieCard">
      <Link to={`/movieDetails/${movie.id}`}>
        <img
          src={
            movie.poster_path
              ? `https://media.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`
              : fonFoto
          }
          alt="img"
        />
      </Link>

      <div className="movieCard--text">
        <h3>{movie.title}</h3>
        <h4>{movie.release_date}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
