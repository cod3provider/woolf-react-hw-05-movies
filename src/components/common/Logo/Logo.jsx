import {NavLink} from "react-router-dom";

import s from "../SharedLayout/SharedLayout.module.css";

import logo from '../../../assets/logo.png';

const Logo = () => {
	return (
		<NavLink
			className={s.logoLink}
			to="/"
		>
			<img width="30" height="30" src={logo} alt="icon"/>
		</NavLink>
	)
}

export default Logo;
