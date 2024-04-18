import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { API_KEY } from "../../API";
import userImg from "../../assets/img/user.png";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context";

const Actors = ({ actorsId }) => {
  const [actors, setActors] = useState([]);
  const {language} = useContext(LanguageContext)
  const getActor = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${actorsId}/credits?api_key=${key}&language=${language}`
    )
      .then((res) => {
        setActors(res.data.cast);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    getActor(API_KEY);
  }, [language]);
  // console.log(actors);

  return (
    <div id="actors">
      <div className="container">
        <div className="actors">
          {actors?.map((el, idx) => (
            <div className="actors--text" key={idx}>
              <Link to={`/actorsDetails/${el.id}`}>
                <img
                  src={
                    el.profile_path
                      ? `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${el.profile_path}`
                      : userImg
                  }
                  alt=""
                  width={150}
                />
              </Link>

              <h2>{el.original_name}</h2>
              <h3>{el.character}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actors;
