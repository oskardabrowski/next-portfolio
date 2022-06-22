import ProjectsHeaderStyle from "./style";
import { useContext } from "react";
import { AppContext } from "../../Context";

const ProjectsHeader = () => {
	const { appLang } = useContext(AppContext);
	return (
		<ProjectsHeaderStyle>
			<img src="/ProjectsHeader.svg" alt="" />
			<h1>
				{appLang === "EN" ? "Projects" : "Projekty"}
				<span>.</span>
			</h1>
		</ProjectsHeaderStyle>
	);
};

export default ProjectsHeader;
