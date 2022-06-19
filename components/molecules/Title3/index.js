import React from "react";
import HeadSkillsStyles from "./style";

const HomeSkillsHead = ({ title }) => {
	return (
		<HeadSkillsStyles>
			<h4
				className="title"
				data-scroll
				data-scroll-class="TitleView"
				data-scroll-offset="10%"
			>
				{title}
				<span>.</span>
			</h4>
			<div
				className="el1"
				data-scroll
				data-scroll-class="El1View"
				data-scroll-offset="15%"
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div
				className="el2"
				data-scroll
				data-scroll-class="El2View"
				data-scroll-offset="20%"
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
		</HeadSkillsStyles>
	);
};

export default HomeSkillsHead;
