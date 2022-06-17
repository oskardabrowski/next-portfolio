import styles from "../styles/StyleBundle";
import { skills } from "./database";

const { SkillsStyles } = styles;

const HomeSkills = () => {
	return (
		<SkillsStyles>
			<div className="SkillsHead">
				<h4 className="SkillsHead-title">
					Skills<span>.</span>
				</h4>
				<div className="SkillsHead-el1">
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div className="SkillsHead-el2">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
			<div className="SkillsBtns">
				{skills.map((item, index) => {
					const { name, colors, ico, inprogress } = item;
					return (
						<div
							className="SkillsBtns-item"
							style={{
								background: `linear-gradient(to top right, ${colors})`,
							}}
							key={index}
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
