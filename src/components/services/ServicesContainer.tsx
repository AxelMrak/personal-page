import { useTranslation } from "react-i18next";
import Service from "./Service";
import service1 from "../../assets/img/service 1.svg";
import service2 from "../../assets/img/service 2.svg";
import service3 from "../../assets/img/service 3.svg";
import photoshop from '../../assets/logos/adobe-photoshop.svg';
import canva from '../../assets/logos/canva-app.svg';
import css from '../../assets/logos/css3.svg';
import figma from '../../assets/logos/figma.svg';
import html from '../../assets/logos/html-5.svg';
import javascript from '../../assets/logos/javascript.svg';
import react from '../../assets/logos/reaccionar.svg';
import sass from '../../assets/logos/sass.svg';
import typescript from '../../assets/logos/typescript.svg';
import vscode from '../../assets/logos/visual-studio-code-2019.svg';
import "../../styles/homepage/services/servicesContainer.css";
import { Parallax } from "react-scroll-parallax";
import BackgroundGradient from "../globals/BackgroundGradient";

/**
 * ? Component container of Services
 * @returns Services main container
 */
function ServicesContainer() {
	const { t } = useTranslation("globals");

	// * Array of objects who represent all services
	const services = [
		{
			name: t("services-section.service-title_1"),
			description: t("services-section.service-text_1"),
			img: service1,
			techs: [
				{
					img: canva
				},
				{
					img: photoshop
				}
			]
		},
		{
			name: t("services-section.service-title_2"),
			description: t("services-section.service-text_2"),
			img: service2,
			techs: [
				{
					img: figma
				}
			]
		},
		{
			name: t("services-section.service-title_3"),
			description: t("services-section.service-text_3"),
			img: service3,
			techs: [
				{
					img: html
				},
				{
					img: css
				},
				{
					img: sass
				},
				{
					img: javascript
				},
				{
					img: typescript
				},
				{
					img: react
				},
				{
					img: vscode
				},
			] 
		},
	];

	return (
		<Parallax speed={-10} opacity={[0, 5, "easeOut"]}>
			<section className="services-section-container">
				<div className="services-section-texts">
					<h2>{t("services-section.title")}</h2>
				</div>
				<BackgroundGradient/>
				<div className="services-section-items">
					{services.map((service) => (
						<Service
							name={service.name}
							description={service.description}
							img={service.img}
							tech={ service.techs }
							key={service.name}
						/>
					))}
				</div>
			</section>
		</Parallax>
	);
}

export default ServicesContainer;
