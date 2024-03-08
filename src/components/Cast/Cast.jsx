import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getCast, POSTER_URL} from "../../api/api.js";

const Cast = () => {
	const [cast, setCast] = useState([]);
	const {movieId} = useParams();

	useEffect(() => {
		const getMovieCast = async () => {
			try {
				const data = await getCast(movieId);
				setCast(data);
			}
			catch (err) {
				console.log(err);
			}
		}

		getMovieCast();
	}, [movieId]);

	const castItem = cast.map(({id, name, profile_path}) => (
		<li key={id}>
			<img src={`${POSTER_URL}/${profile_path}`} alt="actors photo" width='200'/>
			<p>
				{name}
			</p>
		</li>
	))

	return (
		<ul>
			{castItem}
		</ul>
	)
}

export default Cast;
