import {POSTER_URL} from "../../api/api.js";

const AboutMovie = ({ about }) => {
	console.log(about)

	// const
	return (
		<div>
			<img src={about.poster_path ? `${POSTER_URL}/${about.poster_path}` : <p>Film has no image</p>} alt='poster image'/>
			<h1>{about.title}</h1>
			<p>Score: {about.vote_average}</p>
			<p>Genres: {about.genres.map(genre => genre.name).join(', ')}</p>
			<p>Overview: {about.overview}</p>
		</div>
	)
}

export default AboutMovie;
