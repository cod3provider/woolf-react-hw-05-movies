import { Link, useLocation } from "react-router-dom";

import { POSTER_URL } from "../../../api/api.js";

import noImage from "../../../assets/No-Image-Movie.png";

import s from "../MoviesList.module.css";

const MoviesItem = ({ id, title, poster }) => {
  const location = useLocation();

  return (
    <li className={s.card}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {poster ? (
          <img
            className={s.img}
            src={`${POSTER_URL}${poster}`}
            alt={`poster of film: ${title}`}
          />
        ) : (
          <img className={s.img} src={noImage} alt="no-image placeholder" />
        )}
        <p className={s.title}>{title}</p>
      </Link>
    </li>
  );
};

export default MoviesItem;
