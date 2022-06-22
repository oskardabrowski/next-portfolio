import React, { useState, useEffect } from "react";
import ProjectHeaderStyle from "./style";
import { projects } from "../../database";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AppContext } from "../../Context";

const ProjectHeader = () => {
	const [data, setData] = useState({});
	const path = useRouter();
	const projectId = path.query.id;
	const { appLang } = useContext(AppContext);

	const findData = () => {
		const item = projects.find((el) => el.id == projectId);

		if (item && item != "[id]") {
			const { name, namePL } = item;
			setData({ name, namePL });
		}
	};

	useEffect(() => {
		findData();
	}, [projectId]);

	return (
		<ProjectHeaderStyle>
			<img src="/Project.svg" alt="" />
			<h1>{appLang === "EN" ? data?.name : data?.namePL}</h1>
		</ProjectHeaderStyle>
	);
};

export default ProjectHeader;
