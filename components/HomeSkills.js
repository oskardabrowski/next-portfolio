import styles from "../styles/StyleBundle";
import { AiFillHtml5 } from "react-icons/ai";

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
				<div
					className="SkillsBtns-item"
					style={{
						background: "linear-gradient(to top right, #FF1200, #990B00)",
					}}
				>
					<AiFillHtml5 className="ico" />
					<span>HTML</span>
				</div>
				<div
					className="SkillsBtns-item"
					style={{
						background: "linear-gradient(to top right, #FF1200, #990B00)",
					}}
				>
					<AiFillHtml5 className="ico" />
					<span>HTML</span>
				</div>
				<div
					className="SkillsBtns-item"
					style={{
						background: "linear-gradient(to top right, #FF1200, #990B00)",
					}}
				>
					<AiFillHtml5 className="ico" />
					<span>HTML</span>
				</div>
				<div
					className="SkillsBtns-item"
					style={{
						background: "linear-gradient(to top right, #FF1200, #990B00)",
					}}
				>
					<AiFillHtml5 className="ico" />
					<span>HTML</span>
				</div>
				<div
					className="SkillsBtns-item"
					style={{
						background: "linear-gradient(to top right, #FF1200, #990B00)",
					}}
				>
					<AiFillHtml5 className="ico" />
					<span>HTML</span>
				</div>
				<div
					className="SkillsBtns-item"
					style={{
						background: "linear-gradient(to top right, #FF1200, #990B00)",
					}}
				>
					<AiFillHtml5 className="ico" />
					<span>HTML</span>
				</div>
				<div
					className="SkillsBtns-item"
					style={{
						background: "linear-gradient(to top right, #FF1200, #990B00)",
					}}
				>
					<AiFillHtml5 className="ico" />
					<span>HTML</span>
					<div className="SkillsBtns-item-inprogress">In progress...</div>
				</div>
				<div
					className="SkillsBtns-item"
					style={{
						background: "linear-gradient(to top right, #FF1200, #990B00)",
					}}
				>
					<AiFillHtml5 className="ico" />
					<span>HTML</span>
				</div>
				<div
					className="SkillsBtns-item"
					style={{
						background: "linear-gradient(to top right, #FF1200, #990B00)",
					}}
				>
					<AiFillHtml5 className="ico" />
					<span>HTML</span>
				</div>
				<div
					className="SkillsBtns-item"
					style={{
						background: "linear-gradient(to top right, #FF1200, #990B00)",
					}}
				>
					<AiFillHtml5 className="ico" />
					<span>HTML</span>
				</div>
			</div>
		</SkillsStyles>
	);
};

export default HomeSkills;
