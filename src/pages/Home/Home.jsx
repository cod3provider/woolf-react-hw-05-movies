import {useEffect, useState} from "react";
import {getMovies} from "../../api/api.js";
import MoviesList from "../../components/MoviesList/MoviesList.jsx";
import Container from "../../components/common/Container/Container.jsx";

const Home = () => {
	const [trendingMovies, setTrendingMovies] = useState([]);

	useEffect(() => {
		const getFilms = async () => {
			try {
				const films = await getMovies();
				setTrendingMovies(films);
			}
			catch (err) {
				console.log(err)
			}
		}

		getFilms();
	}, []);


	return (
		<Container>
			<h1>Trending today</h1>
			<MoviesList movies={trendingMovies} />
		</Container>
	)
}

export default Home;
