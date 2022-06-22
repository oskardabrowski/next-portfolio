import React, { useContext } from "react";
import { AppContext } from "../../Context";
import ProjectsContainer from "./style";
import { projects } from "../../database";

const AllProjects = () => {
	const { setRedirectPath, appLang } = useContext(AppContext);
	return (
		<ProjectsContainer>
			{projects.map((item, index) => {
				const {
					name,
					img,
					technologies,
					github,
					demo,
					id,
					shortDesc,
					namePL,
					shortDescPL,
				} = item;
				return (
					<div className="Item" key={index}>
						<div className="Item-container">
							<div className="Item-container-header">
								<div className="Item-container-header-image">
									<img src={`/img/proj/${img}`} alt="img" />
								</div>
								<div className="Item-container-header-text">
									<p className="Item-container-header-text-title">
										{appLang === "EN" ? name : namePL}
									</p>
									<p className="Item-container-header-text-tech">
										{technologies}
									</p>
								</div>
							</div>
							<div className="Item-container-description">
								<p className="Item-container-description-text">
									{appLang === "EN" ? shortDesc : shortDescPL}
								</p>
								<div className="Item-container-description-btns">
									<button
										className="btn"
										onClick={() =>
											setRedirectPath({
												action: true,
												path: `/project/${id}`,
											})
										}
									>
										<div></div>
										{appLang === "EN" ? "Read more" : "Czytaj więcej"}
									</button>
									<a
										href={github}
										target="_blank"
										aria-label="Github"
										className="btn"
										rel="noreferrer"
									>
										<div></div>Github
									</a>
									<a
										href={demo}
										target="_blank"
										aria-label="Github"
										className="btn"
										rel="noreferrer"
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
