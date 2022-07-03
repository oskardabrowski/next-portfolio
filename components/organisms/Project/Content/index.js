import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/dist/client/router";
import { projects } from "../../database";
import ProjectContentStyle from "./style";
import { AiOutlineGithub } from "react-icons/ai";
import { SiSitepoint } from "react-icons/si";
import { AppContext } from "../../Context";

const ProjectContent = () => {
	const [data, setData] = useState();
	const path = useRouter();
	const projectId = path.query.id;
	const { appLang } = useContext(AppContext);

	const findData = () => {
		const item = projects.find((el) => el.id == projectId);

		if (item && item != "[id]") {
			const { responsive, demo, github, desc, techStack, descPL } = item;
			setData({ responsive, demo, github, desc, techStack, descPL });
		}
	};

	useEffect(() => {
		findData();
	}, [projectId]);

	return (
		<ProjectContentStyle>
			<div className="ResponsiveImage">
				<img src={`/img/proj/${data?.responsive}`} alt="" />
			</div>
			<div className="Links">
				{data?.github != "" ? (
					<a href={data?.github} target="_blank" rel="noreferrer">
						<AiOutlineGithub className="ico" />
						Github
					</a>
				) : (
					""
				)}
				<a href={data?.demo} target="_blank" rel="noreferrer">
					<SiSitepoint className="ico" />
					Demo
				</a>
			</div>
			<div className="TechStack">
				<h2>{appLang === "EN" ? "Technologies" : "Technologie"}</h2>
				<div className="TechStack-icons">
					{data?.techStack?.map((el, index) => {
						const { ico, name } = el;
						return (
							<div key={index} className="TechStack-icons-icon">
								<div>{ico}</div>
								<p>{name}</p>
							</div>
						);
					})}
				</div>
			</div>
			<div className="DescriptionContainer">
				<h3>{appLang === "EN" ? "Description" : "Opis"}</h3>
				<p>{appLang === "EN" ? data?.desc : data?.descPL}</p>
			</div>
		</ProjectContentStyle>
	);
};

export default ProjectContent;
