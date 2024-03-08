import {NavLink, Outlet} from "react-router-dom";
import {Suspense} from "react";

import Container from "../Container/Container.jsx";

import s from './SharedLayout.module.css';

const SharedLayout = () => {
	return (
		<Container>
			<header>
				<nav className={s.nav}>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/movies">Search</NavLink>
				</nav>
			</header>
			<Suspense fallback={<p>...Loading</p>}>
				<Outlet/>
			</Suspense>
		</Container>
	)
}

export default SharedLayout;
