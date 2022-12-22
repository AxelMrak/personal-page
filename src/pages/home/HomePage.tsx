import ContactSection from "../../components/contact/ContactSection";
import JobsContainer from "../../components/jobs/JobsContainer";
import MainSection from "../../components/main/MainSection";
import ProcessSection from "../../components/main/ProcessSection";
import ServicesContainer from "../../components/services/ServicesContainer";
import "../../styles/homepage/page/homePage.css";

/**
 * ? Component Page: Home
 * @returns HomePage
 */
function HomePage() {
	return (
		<div className="homepage-container">
			<MainSection />
			<ProcessSection />
			<ServicesContainer />
			<JobsContainer />
			<ContactSection />
		</div>
	);
}

export default HomePage;
