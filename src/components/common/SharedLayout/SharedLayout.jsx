import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";

import Container from "../Container/Container.jsx";

import s from "./SharedLayout.module.css";
import Logo from "../Logo/Logo.jsx";

const SharedLayout = () => {
  return (
    <Container>
      <header className={s.header}>
        <nav className={s.nav}>
          <Logo />
          <div className={s.wrapper}>
            <NavLink className={s.link} to="/">
              Home
            </NavLink>
            <NavLink className={s.link} to="/movies">
              Search
            </NavLink>
          </div>
        </nav>
      </header>
      <Suspense fallback={<p>...Loading</p>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
