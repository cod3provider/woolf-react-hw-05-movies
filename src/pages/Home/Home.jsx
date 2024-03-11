import { useEffect, useState } from "react";
import { getMovies } from "../../api/api.js";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";

import s from "./Home.module.css";

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const getFilms = async () => {
      try {
        const films = await getMovies();
        setTrendingMovies(films);
      } catch (err) {
        console.log(err);
      }
    };

    getFilms();
  }, []);

  return (
    <>
      <h1 className={s.title}>Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </>
  );
};

export default Home;
