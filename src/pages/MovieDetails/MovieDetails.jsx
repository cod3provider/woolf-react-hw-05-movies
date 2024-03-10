import {Suspense, useEffect, useState} from "react";
import { NavLink, Outlet, useLocation, useParams} from "react-router-dom";

import AboutMovie from "../../components/AboutMovie/AboutMovie.jsx";

import {getDetails} from "../../api/api.js";

import s from "./MovieDetails.module.css";

const MovieDetails = () => {
	const [movie, setMovie] = useState(null);

	const {movieId} = useParams();
	const location = useLocation();

	useEffect(() => {
		const getMovieDetails = async () => {
			try {
				const film = await getDetails(movieId);
				setMovie(film);
			}
			catch (err) {
				console.log(err);
			}
		}

		getMovieDetails();
	}, [movieId]);

	// console.log(movie)

	const from = location.state?.from ?? '/';

	return (
		<>
			{movie && (
				<div className={s.infoWrap}>
					<AboutMovie about={movie}/>
					<h2>Info</h2>
					<ul className={s.list}>
						<li>
							<NavLink className={s.linksList} to='cast' state={{from}}>Cast</NavLink>
						</li>

						<li>
							<NavLink className={s.linksList} to='reviews' state={{from}}>Review</NavLink>
						</li>
					</ul>
					<Suspense fallback={<p>...Loading</p>}>
						<Outlet/>
					</Suspense>
				</div>
			)}
		</>
	)
}

export default MovieDetails;
