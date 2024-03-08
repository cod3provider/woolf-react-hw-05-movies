import {NavLink, Outlet} from "react-router-dom";
import {Suspense} from "react";
import Container from "../Container/Container.jsx";

const SharedLayout = () => {
	return (
		<Container>
			<header>
				<nav>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/movies">Search Movies</NavLink>
				</nav>
			</header>
			<Suspense fallback={<p>...Loading</p>}>
				<Outlet/>
			</Suspense>
		</Container>
	)
}

export default SharedLayout;
