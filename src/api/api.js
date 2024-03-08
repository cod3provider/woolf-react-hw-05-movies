import axios from "axios";

const API_KEY = '86b2774f72e9923bd0f07dfe6f4fea8a';
export const POSTER_URL = 'https://image.tmdb.org/t/p/w500';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
}

export const getMovies = async () => {
  const response = await axios.get('trending/movie/week');
  return response.data.results;
}

export const searchMovies = async (query) => {
  const response = await axios(`/search/movie?query=${query}`);
  return response.data.results;
}

export const getDetails = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
}

export const getCast = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/credits`)
  return response.data.cast;
}

export const getReviews = async (movieId) => {
  const response = await axios.get(`/movie/${movieId}/reviews`)
  return response.data.results;
}
