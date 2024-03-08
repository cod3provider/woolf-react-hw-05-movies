import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getReviews} from "../../api/api.js";

const Reviews = () => {
	const [review, setReview] = useState([]);
	const {movieId} = useParams();

	useEffect(() => {
		const getMovieReviews = async () => {
			try {
				const dataReview = await getReviews(movieId);
				console.log('dataReview', dataReview);
				setReview(dataReview);
			}
			catch (err) {
				console.log(err);
			}
		}

		getMovieReviews();
	}, [movieId]);

	console.log('review', review)

	const reviewItem = review.map(({id,author,content}) => (
		<li key={id}>
			<p>{content}</p>
			<p>{author}</p>
		</li>
	))

	return (
		<p>
			{reviewItem}
		</p>
	)
}

export default Reviews;
