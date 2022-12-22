import React from "react";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-scroll-parallax";
import imgMain from "../../assets/img/Image Main.png";
import "../../styles/homepage/main/mainSection.css";
import BackgroundGradient from "../globals/BackgroundGradient";

/**
 * ? Component Section MAIN
 * @returns Section main of Homepage.
 */
function MainSection() {
	const { t } = useTranslation("globals");

	return (
		<Parallax speed={-10} opacity={[5, 0, 'easeOut']}>
			<main className="main-section-container">
				<div className="main-section-texts">
					<h1>{t("main-section.title")}</h1>
					<p>{t("main-section.text")}</p>
				</div>
				<BackgroundGradient/>
				<img
					src={imgMain}
					width="350"
					height="326"
					alt="Person with a computer / Persona con una computadora"
				/>
			</main>
		</Parallax>
	);
}

export default MainSection;
