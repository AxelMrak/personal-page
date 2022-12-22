import React from "react";
import facebook from "../../assets/logos/facebook-nuevo.svg";
import instagram from "../../assets/logos/instagram.svg";
import whatsapp from "../../assets/logos/whatsapp.svg";
import mail from "../../assets/logos/mail.svg";
import logoAxel from "../../assets/logos/Logo-Axel.png";
import { useTranslation } from "react-i18next";
import "../../styles/globalsComponents/footer/footer.css";

function Footer() {
	const { t } = useTranslation("globals");

	return (
		<footer className="footer-container">
			<div className="footer-logo">
				<img
					src={logoAxel}
					width="150"
					height="150"
					alt="Logo Axel Sarmiento"
				/>
			</div>
			<div className="footer-social">
				<a
					rel="noopener"
					href="https://www.facebook.com/axelsarmientoFrontEndDev"
					target="_blank"
				>
					<img src={facebook} width="80" height="80" alt="Facebook link" />
				</a>
				<a
					rel="noopener"
					href="https://www.instagram.com/axelsarmiento.dev/"
					target="_blank"
				>
					<img src={instagram} width="80" height="80" alt="Instagram link" />
				</a>
				<a
					rel="noopener"
					href={`https://api.whatsapp.com/send?phone=542615860344&text=${t(
						"header.nav-btn-message"
					)}`}
					target="_blank"
				>
					<img src={whatsapp} width="80" height="80" alt="WhatsApp link" />
				</a>
				<a rel="noopener" href="mailto:axelmrak@gmail.com" target="_blank">
					<img src={mail} width="80" height="80" alt="Mail link" />
				</a>
			</div>
			<div className="footer-message">
				<p>{t("footer.mark")}</p>
			</div>
		</footer>
	);
}

export default Footer;
