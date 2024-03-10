import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import {getReviews} from "../../api/api.js";

import s from './Reviews.module.css';

const Reviews = () => {
	const [review, setReview] = useState([]);
	const {movieId} = useParams();

	useEffect(() => {
		const getMovieReviews = async () => {
			try {
				const dataReview = await getReviews(movieId);
				setReview(dataReview);
			}
			catch (err) {
				console.log(err);
			}
		}

		getMovieReviews();
	}, [movieId]);

	const reviewItem = review.map(({ id ,author, content }) => (
		<li className={s.item} key={id}>
			<p className={s.text}>{content}</p>
			<p className={s.author}>{author}</p>
		</li>
	))

	return (
		<ul className={s.list}>
			{reviewItem}
		</ul>
	)
}

export default Reviews;
