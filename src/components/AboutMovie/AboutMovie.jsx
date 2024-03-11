import { POSTER_URL } from "../../api/api.js";

import s from "./AboutMovie.module.css";

const AboutMovie = ({ about }) => {
  const { poster_path, title, vote_average, genres, overview } = about;

  return (
    <div className={s.wrap}>
      <img
        className={s.img}
        src={
          poster_path ? (
            `${POSTER_URL}/${poster_path}`
          ) : (
            <p>Film has no image</p>
          )
        }
        alt="poster image"
      />
      <h1>{title}</h1>
      <p>Score: {vote_average.toFixed(2)}</p>
      <p>Genres: {genres.map((genre) => genre.name).join(", ")}</p>
      <p className={s.overview}>Overview: {overview}</p>
    </div>
  );
};

export default AboutMovie;
