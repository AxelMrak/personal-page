import i18next from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import es from "./translations/es/globals.json";
import en from "./translations/en/globals.json";
import App from "./App";
import "./index.css";
import { ParallaxProvider } from "react-scroll-parallax";

// Initialization of i18next translate
i18next.init({
	interpolation: { escapeValue: false },
	lng: "es",
	resources: {
		es: {
			globals: es,
		},
		en: {
			globals: en,
		},
	},
});

// Elements to render in the React HTML
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<ParallaxProvider>
			<I18nextProvider i18n={i18next}>
				<App />
			</I18nextProvider>
		</ParallaxProvider>
	</React.StrictMode>
);
