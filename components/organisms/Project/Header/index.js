import React, { useState, useEffect } from "react";
import ProjectHeaderStyle from "./style";
import { projects } from "../../database";
import { useRouter } from "next/router";

const ProjectHeader = () => {
	const [data, setData] = useState({});
	const path = useRouter();
	const projectId = path.query.id;

	const findData = () => {
		const item = projects.find((el) => el.id == projectId);

		if (item && item != "[id]") {
			const { name } = item;
			setData({ name });
		}
	};

	useEffect(() => {
		findData();
	}, [projectId]);

	return (
		<ProjectHeaderStyle>
			<img src="/Project.svg" alt="" />
			<h1>{data?.name}</h1>
		</ProjectHeaderStyle>
	);
};

export default ProjectHeader;
