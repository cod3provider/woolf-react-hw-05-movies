import {Link, useLocation} from "react-router-dom";
import {POSTER_URL} from "../../../api/api.js";

const MoviesItem = ({id, title, poster}) => {
	const location = useLocation();
	return (
		<li>
			<Link to={`/movies/${id}`} state={{from: location}}>
				<img src={poster ? `${POSTER_URL}${poster}` : <p>no image</p>} alt={`poster of film: ${title}`}/>
			</Link>
			<p>{title}</p>
		</li>
	)
}

export default MoviesItem;
