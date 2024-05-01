import React, { useContext, useState } from "react";
import logo from "../../assets/img/logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { LanguageContext } from "../../context";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  const { isDark, setIsDark, language, setLanguage, favorite } =
    useContext(LanguageContext);
  const nav = useNavigate();
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img src={logo} alt="img" width={200} />
          <div className="header--nav">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/popular"}>popular</NavLink>
            <NavLink to={"/toprated"}>TopRated</NavLink>
          </div>
          <select
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
          >
            <option value="en-US">English</option>
            <option value="ru-RU">Русский</option>
            <option value="fr-FR">France</option>
          </select>
          <div className="header--search">
            <input
              type="text"
              placeholder="search..."
              onInput={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => nav(`/search/${inputValue}`)}>search</button>
          </div>
          <a onClick={() => setIsDark(!isDark)}>
            <CgDarkMode />
          </a>
          <a onClick={() => nav("/favorite")}>
            <FaHeart />
          </a>
          {favorite.length ? <h5>{favorite.length}</h5> : null}
        </div>
      </div>
    </div>
  );
};

export default Header;
