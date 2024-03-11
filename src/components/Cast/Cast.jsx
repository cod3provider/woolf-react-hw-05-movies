import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast, POSTER_URL } from "../../api/api.js";

import NoActor from "../NoActor/NoActor.jsx";

import s from "./Cast.module.css";

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const data = await getCast(movieId);
        setCast(data);
      } catch (err) {
        console.log(err);
      }
    };

    getMovieCast();
  }, [movieId]);

  const castItem = cast.map(({ id, name, profile_path }) => (
    <li key={id}>
      {profile_path ? (
        <img
          src={`${POSTER_URL}/${profile_path}`}
          alt="actors photo"
          width="200"
        />
      ) : (
        <NoActor />
      )}
      <p>{name}</p>
    </li>
  ));

  return <ul className={s.list}>{castItem}</ul>;
};

export default Cast;
