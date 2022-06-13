import styles from "../styles/StyleBundle";
import { MdOutlineReadMore } from "react-icons/md";
const { AboutDesc } = styles;

const HomeAbout = () => {
	return (
		<AboutDesc data-scroll-section>
			<div className="AboutHead">
				<div
					className="AboutHead-title"
					data-scroll
					data-scroll-offset="20%"
					data-scroll-class="AboutHeadTitleVisible"
				>
					<h2>
						About me<span>.</span>
					</h2>
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
			<div className="AboutDescription">
				<div className="AboutDescription-text">
					<p
						data-scroll
						data-scroll-offset="30%"
						data-scroll-class="AboutTextVisible"
						className="AboutDescription-text-p"
					>
						Lancashire squirty cheese halloumi. Roquefort cheese and biscuits
						brie who moved my cheese pepper jack chalk and cheese mascarpone
						roquefort. Port-salut boursin pecorino st. agur blue cheese cheese
						strings cheese triangles st. agur blue cheese monterey jack. Danish
						fontina chalk and cheese. Lancashire squirty cheese halloumi.
						Roquefort cheese and biscuits brie who moved my cheese pepper jack
						chalk and cheese mascarpone roquefort. Port-salut boursin pecorino
						st. agur blue cheese cheese strings cheese triangles st. agur blue
						cheese monterey jack. Danish fontina chalk and cheese.Lancashire
						squirty cheese halloumi. Roquefort cheese and biscuits brie who
						moved my cheese pepper jack chalk and cheese mascarpone roquefort.
						Port-salut boursin pecorino st. agur blue cheese cheese strings
						cheese triangles st. agur blue cheese monterey jack. Danish fontina
						chalk and cheese.Lancashire squirty cheese halloumi. Danish fontina
						chalk and cheese.Lancashire squirty cheese halloumi. Danish fontina
						chalk and cheese.Lancashire squirty cheese halloumi.
					</p>
				</div>
				<div className="AboutDescription-photo">
					<div
						className="AboutDescription-photo-container"
						data-scroll
						data-scroll-offset="30%"
						data-scroll-class="AboutPhotoVisible"
					>
						<img src="img/Guy.png" alt="guy" />
					</div>
				</div>
			</div>
			<div className="AboutReadMore">
				<div className="AboutReadMore-left">
					<div
						className="AboutReadMore-left-btn"
						data-scroll
						data-scroll-offset="10%"
						data-scroll-class="ReadMoreBtnVisible"
					>
						<MdOutlineReadMore className="ico" />
						<span>Read more</span>
					</div>
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
