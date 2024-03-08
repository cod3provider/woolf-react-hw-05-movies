import axios from "axios";

const API_KEY = '86b2774f72e9923bd0f07dfe6f4fea8a';

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

