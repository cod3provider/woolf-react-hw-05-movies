import {Suspense, useEffect, useState} from "react";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

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
				<div>
					<AboutMovie about={movie}/>
					<h2>Info</h2>
					<ul className={s.list}>
						<li>
							<Link to='cast' state={{from}}>Cast</Link>
						</li>

						<li>
							<Link to='reviews' state={{from}}>Review</Link>
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
