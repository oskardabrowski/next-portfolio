import React from "react";
import ProjectsContainer from "./style";
import { projects } from "../../database";

const AllProjects = () => {
	return (
		<ProjectsContainer>
			{projects.map((item, index) => {
				const { name, img, technologies, github, demo, readMore, shortDesc } =
					item;
				return (
					<div className="Item" key={index}>
						<div className="Item-container">
							<div className="Item-container-header">
								<div className="Item-container-header-image">
									<img src={`/img/proj/${img}`} alt="img" />
								</div>
								<div className="Item-container-header-text">
									<p className="Item-container-header-text-title">{name}</p>
									<p className="Item-container-header-text-tech">
										{technologies}
									</p>
								</div>
							</div>
							<div className="Item-container-description">
								<p className="Item-container-description-text">{shortDesc}</p>
								<div className="Item-container-description-btns">
									<button className="btn">
										<div></div>Read more
									</button>
									<a
										href={github}
										target="_blank"
										aria-label="Github"
										className="btn"
									>
										<div></div>Github
									</a>
									<a
										href={demo}
										target="_blank"
										aria-label="Github"
										className="btn"
									>
										<div></div>Demo
									</a>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</ProjectsContainer>
	);
};

export default AllProjects;
