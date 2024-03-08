import './App.css'
import Home from "./pages/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import SharedLayout from "./components/common/SharedLayout/SharedLayout.jsx";
import MovieDetails from "./pages/MovieDetails/MovieDetails.jsx";
import Movies from "./pages/Movies/Movies.jsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout/>}>
				<Route index element={<Home/>}/>
				<Route path="/movies" element={<Movies/>}/>
				<Route path="/movies/:movieId" element={<MovieDetails/>}/>
			</Route>
		</Routes>
	)
}

export default App;
