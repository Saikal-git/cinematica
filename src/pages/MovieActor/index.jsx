import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../API";
import fonFoto from "../../assets/img/fonn.jpg";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context";

const MovieActor = ({ actorId }) => {
  const [actors, setActors] = useState([]);
  const {language} = useContext(LanguageContext)

  const getActors = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${key}&language=${language}`
    ).then((res) => {
      setActors(res.data.cast);
    });
  };

  useEffect(() => {
    getActors(API_KEY);
  }, [language]);
  console.log(actors);

  return (
    <div id="actorsMovie">
      <div className="actorsMovie">
        
        {actors?.map((el, idx) => (
          <div className="actorsMovie--img" key={idx}>
           <Link to={`/movieDetails/${el.id}`}>
           <img
              src={
                el.poster_path
                  ? `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`
                  : fonFoto
              }
              alt="img"
              width={170}
            />
           </Link>
            <h3>{el.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieActor;
