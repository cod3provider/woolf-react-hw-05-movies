import './App.css'
import Home from "./pages/Home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import SharedLayout from "./components/common/SharedLayout/SharedLayout.jsx";
import MoviesDetails from "./pages/MoviesDetails/MoviesDetails.jsx";
import Movies from "./pages/Movies/Movies.jsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<SharedLayout/>}>
				<Route index element={<Home/>}/>
			</Route>
		</Routes>
	)
}

export default App;
