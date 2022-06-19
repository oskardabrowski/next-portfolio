import React from "react";
import HeaderSelectedProjectsStyles from "./style";

const SelectedProjectsHead = ({ title }) => {
	return (
		<HeaderSelectedProjectsStyles>
			<div
				className="container"
				data-scroll
				data-scroll-offset="15%"
				data-scroll-class="SelectedHeaderContainerView"
			>
				<h3>
					{title}
					<span>.</span>
				</h3>
			</div>
			<div
				className="el1"
				data-scroll
				data-scroll-offset="17.5%"
				data-scroll-class="SelectedHeaderContainerView"
			></div>
			<div
				className="el2"
				data-scroll
				data-scroll-offset="20%"
				data-scroll-class="SelectedHeaderContainerView"
			></div>
		</HeaderSelectedProjectsStyles>
	);
};

export default SelectedProjectsHead;
