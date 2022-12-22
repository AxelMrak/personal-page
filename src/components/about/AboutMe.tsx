import React from "react";
import { useTranslation } from "react-i18next";
import photo from "../../assets/img/axel-photo.jpg";
import '../../styles/aboutpage/aboutMe.css';
import BackgroundGradient from "../globals/BackgroundGradient";

function AboutMe() {
	const { t } = useTranslation("globals");

	return (
		<div className="about-page-container">
			<div className="about-page-image">
				<img src={photo} width='300' height='300' alt='Axel Sarmiento Photo'/>
			</div>
      <BackgroundGradient/>
			<div className="about-page-texts">
				<h2>{t("about-page.title")}</h2>
				<p>{t("about-page.description")}</p>
			</div>
		</div>
	);
}

export default AboutMe;
