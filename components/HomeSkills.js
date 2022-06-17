import styles from "../styles/StyleBundle";
import { skills } from "./database";

const { SkillsStyles } = styles;

const HomeSkills = () => {
	return (
		<SkillsStyles data-scroll-section>
			<div className="SkillsHead">
				<h4
					className="SkillsHead-title"
					data-scroll
					data-scroll-class="TitleView"
					data-scroll-offset="10%"
				>
					Skills<span>.</span>
				</h4>
				<div
					className="SkillsHead-el1"
					data-scroll
					data-scroll-class="El1View"
					data-scroll-offset="15%"
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div
					className="SkillsHead-el2"
					data-scroll
					data-scroll-class="El2View"
					data-scroll-offset="20%"
				>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="SkillsBtns">
				{skills.map((item, index) => {
					const { name, colors, ico, inprogress } = item;
					let offset = 5;
					if (index < 5) {
						offset = 5 * index;
					} else if (index < 10) {
						offset = 5 * (index - 5);
					} else if (index < 15) {
						offset = 5 * (index - 10);
					} else if (index < 20) {
						offset = 5 * (index - 15);
					}
					return (
						<div
							className="SkillsBtns-item"
							style={{
								background: `linear-gradient(to top right, ${colors})`,
							}}
							key={index}
							data-scroll
							data-scroll-class="Scale1"
							data-scroll-offset={`${offset}%`}
						>
							{ico}
							<span>{name}</span>
							{inprogress ? (
								<div className="SkillsBtns-item-inprogress">In progress...</div>
							) : (
								""
							)}
						</div>
					);
				})}
			</div>
		</SkillsStyles>
	);
};

export default HomeSkills;
