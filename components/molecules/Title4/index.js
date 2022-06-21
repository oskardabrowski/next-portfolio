import React from "react";
import ContactTitleStyle from "./style";

const ContactTitle = ({ title }) => {
	return (
		<ContactTitleStyle>
			<div
				className="titleName"
				data-scroll
				data-scroll-class="TitleVisible"
				data-scroll-offset="10%"
			>
				{title}
				<span>.</span>
			</div>
			<div
				className="el1"
				data-scroll
				data-scroll-class="El1Visible"
				data-scroll-offset="15%"
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div
				className="el2"
				data-scroll
				data-scroll-class="El2Visible"
				data-scroll-offset="17.5%"
			>
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
		</ContactTitleStyle>
	);
};

export default ContactTitle;
