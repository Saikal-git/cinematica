import React from "react";
import logo from "../../assets/img/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { CgDarkMode } from "react-icons/cg";

const Header = () => {
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
          <select>
            <option value="en-US">English</option>
            <option value="ru-RU">Русский</option>
            <option value="fr-FR">France</option>
          </select>
          <div className="header--search">
            <input type="text" placeholder="search..." />
            <button>search</button>
          </div>
          <a><CgDarkMode /></a>
        </div>
      </div>
    </div>
  );
};

export default Header;
