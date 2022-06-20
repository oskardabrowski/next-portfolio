import React from "react";
import Footer from "../components/organisms/Footer";
import ProjectsHeader from "../components/organisms/Projects/Header";
import AllProjects from "../components/organisms/Projects/Content";

const projects = () => {
	return (
		<>
			<ProjectsHeader />
			<AllProjects />
			<Footer />
		</>
	);
};

export default projects;
