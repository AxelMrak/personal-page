import React from "react";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-scroll-parallax";
import imgProcess from "../../assets/img/image-process.webp";
import "../../styles/homepage/process/processSection.css";
import BackgroundGradient from "../globals/BackgroundGradient";

/**
 * Component process section
 * @returns Component Process Section. Is ubicated in homepage
 */
function ProcessSection() {
	const { t } = useTranslation("globals");

	return (
		<Parallax speed={-10} opacity={[5, 0, "easeOut"]}>
			<section className="process-section-container">
				<div className="process-section-texts">
					<h2>{t("process-section.title")}</h2>
					<p>{t("process-section.text")}</p>
				</div>
				<BackgroundGradient/>
				<img
					src={imgProcess}
					width="330"
					height="350"
					alt="Man is following some steps / Hombre siguiendo ciertos pasos"
				/>
			</section>
		</Parallax>
	);
}

export default ProcessSection;
