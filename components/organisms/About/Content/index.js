import React from "react";
import StylesAboutContent from "./style";
import AboutHead from "../../../molecules/Title1";
import SelectedProjectsHead from "../../../molecules/Title2";
import { useContext } from "react";
import { AppContext } from "../../Context";
import { aboutMe } from "../../database";

const AboutContent = () => {
	const { appLang } = useContext(AppContext);
	return (
		<StylesAboutContent>
			<div className="Photo">
				<div className="Photo-container">
					<img src="/img/Guy.png" alt="guy" />
				</div>
			</div>
			<AboutHead title={appLang === "EN" ? "About me" : "Kim jestem?"} />
			<div className="FirstDescription">
				{appLang === "EN"
					? aboutMe.longDesc.map((el) => {
							return <p>{el}</p>;
					  })
					: aboutMe.longDescPL.map((el) => {
							return <p>{el}</p>;
					  })}
			</div>
		</StylesAboutContent>
	);
};

export default AboutContent;
