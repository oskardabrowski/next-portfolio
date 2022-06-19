import React from "react";

const ProjectItemLeft = () => {
	return (
		<div className="SelectedProjectsItems-left">
			<span
				className="SelectedProjectsItems-left-span"
				data-scroll
				data-scroll-offset="15%"
				data-scroll-class="LeftVisible"
			>
				<div className="SelectedProjectsItems-left-span-inside">
					<div className="SelectedProjectsItems-left-span-inside-img">
						<img src="img/proj/SolarMap.png" alt="SolarMapImage" />
					</div>
					<div className="SelectedProjectsItems-left-span-inside-desc">
						<p className="SelectedProjectsItems-left-span-inside-desc-head">
							Solar Map of Toruń
						</p>
						<p className="SelectedProjectsItems-left-span-inside-desc-tech">
							React, Redux, Styled Components, LeafletJS, ThreeJS
						</p>
						<span className="SelectedProjectsItems-left-span-inside-desc-btns">
							<button className="SelectedProjectsItems-left-span-inside-desc-btns-btn">
								<div></div> Github
							</button>
							<button className="SelectedProjectsItems-left-span-inside-desc-btns-btn">
								<div></div> Demo
							</button>
							<button className="SelectedProjectsItems-left-span-inside-desc-btns-btn">
								<div></div> Read more
							</button>
						</span>
					</div>
				</div>
			</span>
		</div>
	);
};

export default ProjectItemLeft;
