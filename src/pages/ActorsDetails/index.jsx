import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../API";
import MovieActor from "../MovieActor";
import useFoto from "../../assets/img/userFotoUsss.png";
import { LanguageContext } from "../../context";

const ActorsDetails = () => {
  const [actor, setActor] = useState({});
  const [expanded, setExpanded] = useState(false);
  const {language} = useContext(LanguageContext)
  let { personId } = useParams();

  const getImg = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${language}`
    ).then((res) => {
      setActor(res.data);
    });
  };
  console.log(actor);
  useEffect(() => {
    getImg(API_KEY);
  }, [language]);
  return (
    <>
      <div id="actorDetails">
        <div className="container">
          <div className="actorDetails">
            <div className="actorDetails--block">
              <img
                src={
                  actor.profile_path
                    ? `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${actor.profile_path}`
                    : useFoto
                }
                alt=""
                width={350}
              />
              {actor.birthday ||
              actor.place_of_birth ||
              actor.place_of_birth ||
              (actor.also_known_as && actor.also_known_as.length > 0) ? (
                <h2>Персональная информация</h2>
              ) : null}
              <h3>{actor.birthday ? "Дата рождения:" : null}</h3>
              <p>{actor.birthday}</p>
              <h3>{actor.place_of_birth ? "Место рождения:" : null}</h3>
              <p>{actor.place_of_birth}</p>
              <h3>
                {actor.also_known_as && actor.also_known_as.length > 0
                  ? "Также известность как:"
                  : null}
              </h3>
              {/* <p>{actor.also_known_as}</p> */}
              {actor.also_known_as &&
                actor.also_known_as.map((el, idx) => <p key={idx}>{el}</p>)}
            </div>

            <div className="actorDetails--card">
              <h1>{actor.name}</h1>
              <h3>{actor.biography ? "Биография" : null}</h3>

              <p>
                {/* {span === false ? actor.biography.slice(0, 299) : actor.biography} <span onClick={() => setSpan(!span)}>{span ? "...Свернуть >" : "...Развернуть >"}</span> */}
                {actor.biography && (
                  <>
                    {expanded ? actor.biography : actor.biography.slice(0, 300)}
                    {actor.biography.length > 100 && (
                      <span onClick={() => setExpanded(!expanded)}>
                        {actor.biography
                          ? expanded
                            ? "   ...Свернуть >"
                            : "Развернуть >"
                          : null}
                      </span>
                    )}
                  </>
                )}
                <MovieActor actorId={personId} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActorsDetails;
