import React from "react";
import { useTranslation } from "react-i18next";
import job1 from "../../assets/img/job1.png";
import job2 from "../../assets/img/job2.png";
import job3 from "../../assets/img/job3.png";
import job4 from "../../assets/img/job4.png";
import job5 from "../../assets/img/job5.png";
import Job from "./Job";
import "../../styles/homepage/jobs/JobsContainer.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Parallax } from "react-scroll-parallax";
import BackgroundGradient from "../globals/BackgroundGradient";

/**
 * ? Component container's Jobs
 * @returns Component container of Jobs and Projects. Is a section too.
 */
function JobsContainer() {
	
	const { t } = useTranslation("globals");

	const jobs = [
		{
			name: t("jobs-section.job-title_1"),
			img: job1,
			url: "https://lechic-axelmrak.netlify.app/",
		},
		{
			name: t("jobs-section.job-title_2"),
			img: job2,
			url: "https://www.onlinetransfersmendoza.com/",
		},
		{
			name: t("jobs-section.job-title_3"),
			img: job3,
			url: "https://encryptor-axelmrak.netlify.app/",
		},
		{
			name: t("jobs-section.job-title_4"),
			img: job4,
			url: "https://vatcalc-axelmrak.netlify.app/",
		},
		{
			name: t("jobs-section.job-title_5"),
			img: job5,
			url: "https://portfolio-axelmrak.netlify.app/",
		},
	];

	return (
		<Parallax speed={-10} opacity={[5, 0, "easeOut"]} translateY={[-20, 20]}>
			<section className="jobs-section-container">
				<h2>{t("jobs-section.title")}</h2>
				<Swiper
					slidesPerView={1}
					spaceBetween={20}
					slidesPerGroup={1}
					loop={true}
					loopFillGroupWithBlank={true}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					modules={[Pagination, Navigation]}
					className="mySwiper"
				>
					{jobs.map((job) => (
						<SwiperSlide className="swiper-slide" key={job.name}>
							<Job img={job.img} name={job.name} url={job.url}/>
						</SwiperSlide>
					))}
				</Swiper>
				<BackgroundGradient/>
			</section>
		</Parallax>
	);
}

export default JobsContainer;
