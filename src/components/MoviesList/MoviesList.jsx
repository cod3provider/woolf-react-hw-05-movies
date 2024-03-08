import MoviesItem from "./MoviesItem/MoviesItem.jsx";


const MoviesList = ({movies}) => {
	return (
		<ul>
			{movies.map(({id, original_title, poster_path}) =>
				<MoviesItem key={id} id={id} title={original_title} poster={poster_path}/>
			)}
		</ul>

	)
}

export default MoviesList;
