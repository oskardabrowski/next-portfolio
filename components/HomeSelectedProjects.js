import styles from "../styles/StyleBundle";

const { SelectedProjects } = styles;

const HomeSelectedProjects = () => {
	return (
		<SelectedProjects data-scroll-section>
			<div className="SelectedProjectsHeader">
				<div
					className="SelectedProjectsHeader-container"
					data-scroll
					data-scroll-offset="15%"
					data-scroll-class="SelectedHeaderContainerView"
				>
					<h3>
						Selected Projects<span>.</span>
					</h3>
				</div>
				<div
					className="SelectedProjectsHeader-el1"
					data-scroll
					data-scroll-offset="17.5%"
					data-scroll-class="SelectedHeaderContainerView"
				></div>
				<div
					className="SelectedProjectsHeader-el2"
					data-scroll
					data-scroll-offset="20%"
					data-scroll-class="SelectedHeaderContainerView"
				></div>
			</div>
			<div className="SelectedProjectsItems">
				<div className="SelectedProjectsItems-item"></div>
			</div>
		</SelectedProjects>
	);
};

export default HomeSelectedProjects;
