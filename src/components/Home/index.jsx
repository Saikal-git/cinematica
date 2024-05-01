import axios from "axios";
import React, { useState, useEffect } from "react";
import { API_KEY } from "../../API";

const Home = () => {
  const [backdrop, setBackdrop] = useState([]);
  const getBacground = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    )
      .then((res) => {
        const keys = res.data.results.map((el) => el.backdrop_path);
        setBackdrop(keys);
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    getBacground(API_KEY);
  }, []);
  const randomIndex = Math.floor(Math.random() * backdrop.length);
  const randomBag = backdrop[randomIndex];

  return (
    <section
      id="home"
      style={{
        background: `url(https://media.themoviedb.org/t/p/w440_and_h660_face${randomBag} ) no-repeat center/cover`,

        height: "85vh",
      }}
    >
      <div className="container">
        <div className="home">
          <h1>Добро пожаловать.</h1>
          <h2>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h2>
          <input type="text" placeholder="Найти фильм, сериал, персону..." />
          <button>Поиск</button>
        </div>
      </div>
      <div className="blue"></div>
    </section>
  );
};

export default Home;
