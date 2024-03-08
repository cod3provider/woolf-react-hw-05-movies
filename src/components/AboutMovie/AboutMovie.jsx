import {POSTER_URL} from "../../api/api.js";

const AboutMovie = ({about}) => {
	const {poster_path, title, vote_average, genres, overview} = about;

	return (
		<div>
			<img src={poster_path ? `${POSTER_URL}/${poster_path}` : <p>Film has no image</p>} alt='poster image'/>
			<h1>{title}</h1>
			<p>Score: {(vote_average).toFixed(2)}</p>
			<p>Genres: {genres.map(genre => genre.name).join(', ')}</p>
			<p>Overview: {overview}</p>
		</div>
	)
}

export default AboutMovie;
