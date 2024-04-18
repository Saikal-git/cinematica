import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../API";
import { TiThMenu } from "react-icons/ti";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import Actors from "../../components/Actors";
import Videos from "../../components/Videos";
import fonFoto from "../../assets/img/fonn.jpg";
import { LanguageContext } from "../../context";

const MovieDetails = () => {
  const { language, favorite, setFavorite } = useContext(LanguageContext);
  const [details, setDetails] = useState({});
  const [modal, setModal] = useState(false);
  const [link1, setLink1] = useState(false);
  const [link2, setLink2] = useState(false);
  const [link3, setLink3] = useState(false);
  let { movieId } = useParams();
  const getDetails = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`
    ).then((res) => {
      setDetails(res.data);
    });
  };

  const addToFavorite = (data) => {
    setFavorite([data, ...favorite]);
  };

  useEffect(() => {
    getDetails(API_KEY);
  }, [language]);

  let {
    title,
    poster_path,
    runtime,
    overview,
    release_date,
    backdrop_path,
    vote_average,
    tagline,
  } = details;

  return (
    <>
      <div
        id="movieDetails"
        style={{
          background: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%),
      url(https://media.themoviedb.org/t/p/w600_and_h900_bestv2${backdrop_path}) no-repeat center / cover`,
          minHeight: "70vh",
        }}
      >
        <div
          className="bg"
          onClick={() => setModal(false)}
          style={{
            display: modal ? "block" : "none",
          }}
        ></div>
        <div className="container">
          <div className="movieDetails">
            <img
              src={
                poster_path
                  ? `https://media.themoviedb.org/t/p/w440_and_h660_face${poster_path}`
                  : fonFoto
              }
              alt=""
              onClick={() => {
                setModal(true);
              }}
            />
            <div className="moviedetails--text">
              <div className="lp">
                <h1>{title} </h1>
                <h2>({release_date?.slice(0, 4)})</h2>
              </div>
              <div className="tim">
                <h4>{Math.round(vote_average * 10)} %</h4>
                <h3>
                  {Math.floor(runtime / 60)} : {Math.floor(runtime % 60)}
                </h3>
              </div>
              <div className="icons">
                <div
                  onClick={() => {
                    setLink1(!link1);
                    setLink2(false);
                    setLink3(false);
                  }}
                  style={{
                    color: link1 ? "green" : "white",
                  }}
                >
                  <a>
                    <TiThMenu />
                  </a>
                </div>
                <div
                  onClick={() => {
                    setLink2(!link2);
                    setLink1(false);
                    setLink3(false);
                  }}
                  style={{
                    color: link2 ? "red" : "white",
                  }}
                >
                  <a>
                    <FaHeart onClick={() => addToFavorite(details)} />
                  </a>
                </div>
                <div
                  onClick={() => {
                    setLink3(!link3);
                    setLink1(false);
                    setLink2(false);
                  }}
                  style={{
                    color: link3 ? "yellow" : "white",
                  }}
                >
                  <a>
                    <FaBookmark />
                  </a>
                </div>
              </div>
              <i>"{tagline}"</i>
              <h1
                style={{
                  margin: "10px 0 20px 0",
                }}
              >
                review
              </h1>
              <p>{overview}</p>
            </div>
            <div
              className="modal"
              style={{
                display: modal ? "flex" : "none",
              }}
            >
              <img
                src={`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${backdrop_path}) no-repeat center / cover`}
                alt=""
              />
              <h1 onClick={() => setModal(false)}>X</h1>
              <div className="modal--text">
                <h2>{title}</h2>
                <p>{overview}</p>
                <h3>{release_date}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Actors actorsId={movieId} />
      <Videos videosId={movieId} />
    </>
  );
};

export default MovieDetails;
