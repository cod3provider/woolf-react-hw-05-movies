import {Suspense, useEffect, useState} from "react";
import {Link, Outlet, useLocation, useParams} from "react-router-dom";

import AboutMovie from "../../components/AboutMovie/AboutMovie.jsx";

import {getDetails} from "../../api/api.js";

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
				console.log(err)
			}
		}

		getMovieDetails();
	}, [movieId]);

	// console.log(movie)

	const from = location.state?.from ?? '/';

	return (
		<>
			{movie && (
				<>
					<AboutMovie about={movie}/>
					<p>Info</p>
					<Link to='cast' state={{from}}>Cast</Link>
					<Suspense fallback={<p>...Loading</p>}>
						<Outlet />
					</Suspense>
				</>
			)}
		</>
	)
}

export default MovieDetails;
