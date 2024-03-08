import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import AboutMovie from "../../components/AboutMovie/AboutMovie.jsx";

import {getDetails} from "../../api/api.js";

const MovieDetails = () => {
	const [movie, setMovie] = useState(null);

	const {movieId} = useParams();

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

	console.log(movie)

	return (
		<>
			{movie && (
				<AboutMovie about={movie}/>
			)}
		</>
	)
}

export default MovieDetails;
