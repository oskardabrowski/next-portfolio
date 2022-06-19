import React from "react";
import AboutHeadStyle from "./style";

const AboutHead = ({ title }) => {
	return (
		<AboutHeadStyle>
			<div
				className="title"
				data-scroll
				data-scroll-offset="20%"
				data-scroll-class="AboutHeadTitleVisible"
			>
				<h2>
					{title}
					<span>.</span>
				</h2>
				<div className="title-dots">
					<div className="title-dots-container">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</AboutHeadStyle>
	);
};

export default AboutHead;
