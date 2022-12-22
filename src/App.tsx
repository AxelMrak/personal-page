import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/globals/Footer";
import Header from "./components/globals/Header";
import JobsContainer from "./components/jobs/JobsContainer";
import AboutPage from "./pages/about/AboutPage";
import HomePage from "./pages/home/HomePage";
import ServicesPage from "./pages/services/ServicesPage";

/**
 * ? This component contains all application with routes
 * @returns App main component
 */
function App() {
	return (
		<Router>
			<div className="App">
				{/* Globals components */}
				<Header />
			</div>
			
			{/* Routes for navigation */}
			<Routes>
				{/* HomePage */}
				<Route path="/" element={<HomePage />} />
				{/* Services page */}
				<Route path="/services" element={<ServicesPage/>} />
				{/* Jobs page */}
				<Route path="/jobs" element={<JobsContainer/>} />
				{/* About page */}
				<Route path="/about" element={<AboutPage/>} />
				{/* 404 Not found page */}
				<Route path="*" element={<h2>404: Pendiente</h2>} />
				<Route path="/sitemap.xml" element='../public/sitemap.xml' />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
