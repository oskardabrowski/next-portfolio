import React from "react";
import AboutHeaderStyles from "./style";
import { useContext } from "react";
import { AppContext } from "../../Context";

const AboutHeader = () => {
	const { appLang } = useContext(AppContext);
	return (
		<AboutHeaderStyles>
			<img src="/AboutHeader.svg" alt="" />
			<h1>
				{appLang === "EN" ? "About me" : "O mnie"}
				<span>.</span>
			</h1>
		</AboutHeaderStyles>
	);
};

export default AboutHeader;
