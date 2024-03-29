import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import MoviesList from "../../components/MoviesList/MoviesList.jsx";

import { searchMovies } from "../../api/api.js";

import s from "./Movies.module.css";

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const movieSearchParams = searchParams.get("query");

  const handleChange = (e) => {
    const { value } = e.target;
    setQuery(value.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ query: query });
    setQuery("");
  };

  useEffect(() => {
    if (!movieSearchParams) {
      return;
    }

    const getMovie = async () => {
      try {
        const data = await searchMovies(movieSearchParams);
        if (!data.length) {
          toast.warn("Something went wrong. Try again");
          return;
        }
        setFilms(data);
      } catch (err) {
        console.log(err);
      }
    };

    getMovie();
  }, [movieSearchParams]);

  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          onChange={handleChange}
          type="text"
          value={query}
          placeholder="Enter a name of film"
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>

      {films.length > 0 && <MoviesList movies={films} />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Movies;
