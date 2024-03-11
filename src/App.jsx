import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy } from "react";

import SharedLayout from "./components/common/SharedLayout/SharedLayout.jsx";

const Home = lazy(() => import("./pages/Home/Home.jsx"));
const Movies = lazy(() => import("./pages/Movies/Movies.jsx"));
const MovieDetails = lazy(
  () => import("./pages/MovieDetails/MovieDetails.jsx"),
);
const Cast = lazy(() => import("./components/Cast/Cast.jsx"));
const Reviews = lazy(() => import("./components/Reviews/Reviews.jsx"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound.jsx"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
