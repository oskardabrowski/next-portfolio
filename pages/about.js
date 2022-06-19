import React from "react";
import Footer from "../components/organisms/Footer";
import AboutHeader from "../components/organisms/About/Header";
import AboutContent from "../components/organisms/About/Content";
import Contact from "../components/organisms/Contact";

const about = () => {
	return (
		<>
			<AboutHeader />
			<AboutContent />
			<Contact />
			<Footer />
		</>
	);
};

export default about;
