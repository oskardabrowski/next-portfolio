import styles from "../styles/StyleBundle";
import { MdOutlineReadMore } from "react-icons/md";

const { AboutDesc } = styles;

const HomeAbout = () => {
	return (
		<AboutDesc>
			<div className="AboutHead">
				<div className="AboutHead-title">
					About me<span>.</span>
					<div className="AboutHead-title-dots">
						<div className="AboutHead-title-dots-container">
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
			</div>
			<div className="AboutDescription">Something</div>
			<div className="AboutReadMore">
				<div className="AboutReadMore-left">
					<div className="AboutReadMore-left-btn">
						<MdOutlineReadMore className="ico" />
						<span>Czytaj więcej</span>
					</div>
				</div>
				<div className="AboutReadMore-right">
					<div className="AboutReadMore-right-el">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<div className="AboutReadMore-right-el2">
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
