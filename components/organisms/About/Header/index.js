import React from "react";
import AboutHeaderStyles from "./style";

const AboutHeader = () => {
	return (
		<AboutHeaderStyles>
			<img src="/AboutHeader.svg" alt="" />
			<h1>
				About me<span>.</span>
			</h1>
		</AboutHeaderStyles>
	);
};

export default AboutHeader;
