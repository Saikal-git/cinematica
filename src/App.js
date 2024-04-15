import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Home from "./components/Home";
import Popular from "./components/Popular";
import TopRated from "./components/TopRated";
import MovieDetails from "./pages/MovieDetails";
import ActorsDetails from "./pages/ActorsDetails";

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/toprated" element={<TopRated />} />
        <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
        <Route path="/actorsDetails/:personId" element={<ActorsDetails />} />
      </Routes>
    </div>
  );
}

export default App;
