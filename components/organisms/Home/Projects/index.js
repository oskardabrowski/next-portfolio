import SelectedProjects from "./style";
import { ImEye } from "react-icons/im";

const HomeSelectedProjects = () => {
	return (
		<SelectedProjects data-scroll-section>
			<div className="SelectedProjectsHeader">
				<div
					className="SelectedProjectsHeader-container"
					data-scroll
					data-scroll-offset="15%"
					data-scroll-class="SelectedHeaderContainerView"
				>
					<h3>
						Selected Projects<span>.</span>
					</h3>
				</div>
				<div
					className="SelectedProjectsHeader-el1"
					data-scroll
					data-scroll-offset="17.5%"
					data-scroll-class="SelectedHeaderContainerView"
				></div>
				<div
					className="SelectedProjectsHeader-el2"
					data-scroll
					data-scroll-offset="20%"
					data-scroll-class="SelectedHeaderContainerView"
				></div>
			</div>
			<div className="SelectedProjectsItems">
				<div className="SelectedProjectsItems-right">
					<span
						className="SelectedProjectsItems-right-span"
						data-scroll
						data-scroll-offset="15%"
						data-scroll-class="RightVisible"
					>
						<div className="SelectedProjectsItems-right-span-inside">
							<div className="SelectedProjectsItems-right-span-inside-img">
								<img src="img/proj/SolarMap.png" alt="SolarMapImage" />
							</div>
							<div className="SelectedProjectsItems-right-span-inside-desc">
								<p className="SelectedProjectsItems-right-span-inside-desc-head">
									Solar Map of Toruń
								</p>
								<p className="SelectedProjectsItems-right-span-inside-desc-tech">
									React, Redux, Styled Components, LeafletJS, ThreeJS
								</p>
								<span className="SelectedProjectsItems-right-span-inside-desc-btns">
									<button className="SelectedProjectsItems-right-span-inside-desc-btns-btn">
										<div></div> Github
									</button>
									<button className="SelectedProjectsItems-right-span-inside-desc-btns-btn">
										<div></div> Demo
									</button>
									<button className="SelectedProjectsItems-right-span-inside-desc-btns-btn">
										<div></div> Read more
									</button>
								</span>
							</div>
						</div>
					</span>
				</div>
				<div className="SelectedProjectsItems-left">
					<span
						className="SelectedProjectsItems-left-span"
						data-scroll
						data-scroll-offset="15%"
						data-scroll-class="LeftVisible"
					>
						<div className="SelectedProjectsItems-left-span-inside">
							<div className="SelectedProjectsItems-left-span-inside-img">
								<img src="img/proj/SolarMap.png" alt="SolarMapImage" />
							</div>
							<div className="SelectedProjectsItems-left-span-inside-desc">
								<p className="SelectedProjectsItems-left-span-inside-desc-head">
									Solar Map of Toruń
								</p>
								<p className="SelectedProjectsItems-left-span-inside-desc-tech">
									React, Redux, Styled Components, LeafletJS, ThreeJS
								</p>
								<span className="SelectedProjectsItems-left-span-inside-desc-btns">
									<button className="SelectedProjectsItems-left-span-inside-desc-btns-btn">
										<div></div> Github
									</button>
									<button className="SelectedProjectsItems-left-span-inside-desc-btns-btn">
										<div></div> Demo
									</button>
									<button className="SelectedProjectsItems-left-span-inside-desc-btns-btn">
										<div></div> Read more
									</button>
								</span>
							</div>
						</div>
					</span>
				</div>
				<div className="SelectedProjectsItems-right">
					<span
						className="SelectedProjectsItems-right-span"
						data-scroll
						data-scroll-offset="15%"
						data-scroll-class="RightVisible"
					>
						<div className="SelectedProjectsItems-right-span-inside">
							<div className="SelectedProjectsItems-right-span-inside-img">
								<img src="img/proj/SolarMap.png" alt="SolarMapImage" />
							</div>
							<div className="SelectedProjectsItems-right-span-inside-desc">
								<p className="SelectedProjectsItems-right-span-inside-desc-head">
									Solar Map of Toruń
								</p>
								<p className="SelectedProjectsItems-right-span-inside-desc-tech">
									React, Redux, Styled Components, LeafletJS, ThreeJS
								</p>
								<span className="SelectedProjectsItems-right-span-inside-desc-btns">
									<button className="SelectedProjectsItems-right-span-inside-desc-btns-btn">
										<div></div> Github
									</button>
									<button className="SelectedProjectsItems-right-span-inside-desc-btns-btn">
										<div></div> Demo
									</button>
									<button className="SelectedProjectsItems-right-span-inside-desc-btns-btn">
										<div></div> Read more
									</button>
								</span>
							</div>
						</div>
					</span>
				</div>
				<div className="SelectedProjectsItems-left">
					<span
						className="SelectedProjectsItems-left-span"
						data-scroll
						data-scroll-offset="15%"
						data-scroll-class="LeftVisible"
					>
						<div className="SelectedProjectsItems-left-span-inside">
							<div className="SelectedProjectsItems-left-span-inside-img">
								<img src="img/proj/SolarMap.png" alt="SolarMapImage" />
							</div>
							<div className="SelectedProjectsItems-left-span-inside-desc">
								<p className="SelectedProjectsItems-left-span-inside-desc-head">
									Solar Map of Toruń
								</p>
								<p className="SelectedProjectsItems-left-span-inside-desc-tech">
									React, Redux, Styled Components, LeafletJS, ThreeJS
								</p>
								<span className="SelectedProjectsItems-left-span-inside-desc-btns">
									<button className="SelectedProjectsItems-left-span-inside-desc-btns-btn">
										<div></div> Github
									</button>
									<button className="SelectedProjectsItems-left-span-inside-desc-btns-btn">
										<div></div> Demo
									</button>
									<button className="SelectedProjectsItems-left-span-inside-desc-btns-btn">
										<div></div> Read more
									</button>
								</span>
							</div>
						</div>
					</span>
				</div>
				<div className="SelectedProjectsItems-see">
					<button
						className="SelectedProjectsItems-see-btn"
						data-scroll
						data-scroll-offset="10%"
						data-scroll-class="SeeVisible"
					>
						<ImEye className="ico" />
						See more projects
					</button>
				</div>
			</div>
		</SelectedProjects>
	);
};

export default HomeSelectedProjects;
