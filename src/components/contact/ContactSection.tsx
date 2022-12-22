import React from "react";
import { useTranslation } from "react-i18next";
import { Parallax } from "react-scroll-parallax";
import "../../styles/homepage/contact/contactSection.css";
import BackgroundGradient from "../globals/BackgroundGradient";

function ContactSection() {
	const { t } = useTranslation("globals");

	return (
		<Parallax speed={-10} opacity={[0, 5, "easeOut"]}>
			<section className="contact-section-container">
				<div className="contact-section-text">
					<h2>{t("contact-section.title")}</h2>
				</div>
				<a
					href={`https://api.whatsapp.com/send?phone=542615860344&text=${t(
						"header.nav-btn-message"
					)}`}
					target="_blank"
				>
					{t("contact-section.button")}
				</a>
			</section>
		</Parallax>
	);
}

export default ContactSection;
