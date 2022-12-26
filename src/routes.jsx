// src/routes.jsx
import { Routes, Route } from "react-router-dom";
import JobsContainer from "./components/jobs/JobsContainer";
import AboutPage from "./pages/about/AboutPage";
import HomePage from "./pages/home/HomePage";
import ServicesPage from "./pages/services/ServicesPage";

const MyRoutes = () => {
	return (
		<Routes>
			{/* HomePage */}
			<Route path="/" element={<HomePage />} />
			{/* Services page */}
			<Route path="/services" element={<ServicesPage />} />
			{/* Jobs page */}
			<Route path="/jobs" element={<JobsContainer />} />
			{/* About page */}
			<Route path="/about" element={<AboutPage />} />
			{/* 404 Not found page */}
			<Route path="*" element={<h2>404: Pendiente</h2>} />
		</Routes>
	);
};

export default MyRoutes