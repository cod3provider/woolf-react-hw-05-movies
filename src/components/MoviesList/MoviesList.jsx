import MoviesItem from "./MoviesItem/MoviesItem.jsx";

import s from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={s.list}>
      {movies.map(({ id, original_title, poster_path }) => (
        <MoviesItem
          key={id}
          id={id}
          title={original_title}
          poster={poster_path}
        />
      ))}
    </ul>
  );
};

export default MoviesList;
