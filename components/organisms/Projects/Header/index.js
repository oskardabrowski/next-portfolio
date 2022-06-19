import React from "react";
import ProjectsHeaderStyle from "./style";

const ProjectsHeader = () => {
	return (
		<ProjectsHeaderStyle>
			<img src="/ProjectsHeader.svg" alt="" />
			<h1>
				Projects<span>.</span>
			</h1>
		</ProjectsHeaderStyle>
	);
};

export default ProjectsHeader;
