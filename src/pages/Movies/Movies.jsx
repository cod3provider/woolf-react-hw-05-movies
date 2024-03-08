import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import {searchMovies} from "../../api/api.js";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";

const Movies = () => {
	const [films, setFilms] = useState([]);
	const [query, setQuery] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();
	const movieSearchParams = searchParams.get('query');

	const handleChange = e => {
		const {value} = e.target;
		setQuery(value.toLowerCase());
	}

	const handleSubmit = e => {
		e.preventDefault();
		setSearchParams({query: query});
		setQuery('');
	}

	useEffect(() => {
		if (!movieSearchParams) {
			return;
		}

		const getMovie = async () => {
			try {
				const data = await searchMovies(movieSearchParams)
				if (!data.length) {
					alert('Something went wrong');
					return;
				}
				setFilms(data);
			}
			catch (err) {
				console.log(err)
			}
		}

		getMovie()
	}, [movieSearchParams]);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					onChange={handleChange}
					type="text"
					value={query}
					placeholder="Enter a name of film"
				/>
				<button type="submit">Search</button>
			</form>

			{films && <MoviesList movies={films}/>}
		</>
	)
}

export default Movies;