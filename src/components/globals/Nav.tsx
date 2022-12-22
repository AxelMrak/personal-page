import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "../../styles/globalsComponents/nav/nav.css";
import esIco from "../../assets/img/es-ico.png";
import enIco from "../../assets/img/en-ico.png";

interface Props {
	desktop: boolean;
}
/**
 * ? Component Nav, it will do management of navigation and change language.
 * @param param0 It receives a prop Desktop, that prop indicates if the actual screen is dektop or not.
 * @returns Component nav
 */
const Nav: FC<Props> = ({ desktop }) => {
	const { t, i18n } = useTranslation("globals");

	// ? This function will analyze what is the language actually and change to the contrary.
	const changeLanguage = () => {
		i18n.changeLanguage(i18n.language === "es" ? "en" : "es");
	};

	return (
		// If screen is dektop the navbar will be showed, else if the screen is mobile will be show the container below
		<div className={desktop === true ? "navListDesktop" : "navListContainer"}>
			<Link className="unitList" to="/">
				{t("header.nav_1")}
			</Link>
			<Link className="unitList" to="/services">
				{t("header.nav_2")}
			</Link>
			<Link className="unitList" to="/jobs">
				{t("header.nav_3")}
			</Link>
			<Link className="unitList" to="/about">
				{t("header.nav_4")}
			</Link>
			<a
				href={`https://api.whatsapp.com/send?phone=542615860344&text=${t("header.nav-btn-message")}`}
				className="navBtn"
				target='_blank'
			>
				{t("header.nav-btn")}
			</a>
			<img
				className="flag"
				src={i18n.language === "es" ? esIco : enIco}
				width="50"
				height="50"
				onClick={changeLanguage}
				alt="Press here for change language / Cambie el idioma aquí"
			/>
		</div>
	);
};

export default Nav;
