import React, { useState, useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { projects } from "../../database";
import ProjectContentStyle from "./style";
import { AiOutlineGithub } from "react-icons/ai";
import { SiSitepoint } from "react-icons/si";

const ProjectContent = () => {
	const [data, setData] = useState();
	const path = useRouter();
	const projectId = path.query.id;

	const findData = () => {
		const item = projects.find((el) => el.id == projectId);

		if (item && item != "[id]") {
			const { responsive, demo, github, desc, techStack } = item;
			setData({ responsive, demo, github, desc, techStack });
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
				<a href={data?.github}>
					<AiOutlineGithub className="ico" />
					Github
				</a>
				<a href={data?.demo}>
					<SiSitepoint className="ico" />
					Demo
				</a>
			</div>
			<div className="TechStack">
				<h2>Technologies</h2>
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
				<h3>Description</h3>
				<p>{data?.desc}</p>
			</div>
		</ProjectContentStyle>
	);
};

export default ProjectContent;
