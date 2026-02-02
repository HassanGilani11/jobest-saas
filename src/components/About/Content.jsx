import React from "react";
import AboutSection from "../Index/AboutSection";
import HowItWorks from "../Index/HowItWorks";
import JoinUs from "../Index/JoinUs";
import TestimonialSection from "../Index/TestimonialSection";
import BrandSection from "../Index/BrandSection";
import BlogSection from "../Index/BlogSection";
import AppSection from "../Index/AppSection";
import PostJob from "../Index/PostJob";

const Content = ({ currentUser }) => {
	return (
		<>
			<AboutSection clsAtts="pt-100" />
			<HowItWorks />
			<JoinUs currentUser={currentUser} />
			<TestimonialSection />
			<BrandSection />
			<BlogSection />
			<AppSection />
			<PostJob />
		</>
	);
};

export default Content;
