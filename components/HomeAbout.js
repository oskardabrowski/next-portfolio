import styles from "../styles/StyleBundle";

const { AboutDesc } = styles;

const HomeAbout = () => {
	return (
		<AboutDesc>
			<div className="AboutHead">
				<div className="AboutHead-title">
					About<span>.</span>
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
				<div className="AboutReadMore-left"></div>
				<div className="AboutReadMore-right">
					<div className="AboutReadMore-right-el"></div>
					<div className="AboutReadMore-right-el2"></div>
				</div>
			</div>
		</AboutDesc>
	);
};

export default HomeAbout;
