import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { useContext } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import MovieDetails from "./pages/MovieDetails";
import ActorsDetails from "./pages/ActorsDetails";
import { LanguageContext } from "./context";
import Search from "./components/Search";
import Favorite from "./components/Favorite";

function App() {
  const { isDark } = useContext(LanguageContext);
  return (
    <div
      className=""
      style={{
        background: isDark ? "rgb(74, 72, 74)" : "white",
        color: isDark ? "white" : "black",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
        <Route path="/actorsDetails/:personId" element={<ActorsDetails />} />
        <Route path="/search/:movieName" element={<Search />} />
        <Route path="/favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
