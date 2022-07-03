import { useContext } from "react";
import { AppContext } from "../../Context";
import { MdOutlineReadMore } from "react-icons/md";
import AboutHead from "../../../molecules/Title1";
import AboutDesc from "./style";
import { aboutMe } from "../../database";

const HomeAbout = () => {
	const { setRedirectPath, appLang } = useContext(AppContext);
	return (
		<AboutDesc data-scroll-section>
			<AboutHead title={appLang === "EN" ? "About me" : "O mnie"} />
			<div className="AboutDescription">
				<div className="AboutDescription-text">
					<p
						data-scroll
						data-scroll-offset="30%"
						data-scroll-class="AboutTextVisible"
						className="AboutDescription-text-p"
					>
						{appLang === "EN" ? aboutMe.shortDesc : aboutMe.shortDescPL}
					</p>
				</div>
				<div className="AboutDescription-photo">
					<div
						className="AboutDescription-photo-container"
						data-scroll
						data-scroll-offset="30%"
						data-scroll-class="AboutPhotoVisible"
					>
						<img src={`/img/${aboutMe.adminImage}`} alt="guy" />
					</div>
				</div>
			</div>
			<div className="AboutReadMore">
				<div className="AboutReadMore-left">
					<button
						className="AboutReadMore-left-btn"
						data-scroll
						data-scroll-offset="10%"
						data-scroll-class="ReadMoreBtnVisible"
						onClick={() =>
							setRedirectPath({
								action: true,
								path: "/about",
							})
						}
					>
						<MdOutlineReadMore className="ico" />
						<span>{appLang === "EN" ? "Read more" : "Czytaj więcej"}</span>
					</button>
				</div>
				<div className="AboutReadMore-right">
					<div
						className="AboutReadMore-right-el"
						data-scroll
						data-scroll-offset="10%"
						data-scroll-class="ReadMoreEl1Visible"
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div
						className="AboutReadMore-right-el2"
						data-scroll
						data-scroll-offset="5%"
						data-scroll-class="ReadMoreEl1Visible"
					>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
		</AboutDesc>
	);
};

export default HomeAbout;
