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
  console.log(response.data.results);
  return response.data.results;
}

export const searchMovies = async (query) => {
  const response = await axios(`/search/movie?query=${query}`);
  console.log(response.data.results);
  return response.data.results;
}

export const getDetails = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  console.log(data)
  return data;
}
