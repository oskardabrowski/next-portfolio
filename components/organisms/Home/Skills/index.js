import SkillsStyles from "./style";
import { skills } from "../../database";
import HomeSkillsHead from "../../../molecules/Title3";

const HomeSkills = () => {
	return (
		<SkillsStyles data-scroll-section>
			<HomeSkillsHead title="Skills" />
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
