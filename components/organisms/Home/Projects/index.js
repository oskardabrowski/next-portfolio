import SelectedProjects from "./style";
import { ImEye } from "react-icons/im";
import { projects } from "../../database";
import SelectedProjectsHead from "../../../molecules/Title2";

const HomeSelectedProjects = () => {
	return (
		<SelectedProjects data-scroll-section>
			<SelectedProjectsHead title="Selected Projects" />
			<div className="SelectedProjectsItems">
				{projects.reverse().map((item, index) => {
					const type = index % 2;
					const { name, img, technologies, github, demo, readMore, selected } =
						item;
					if (index < 4 && selected === true) {
						if (type === 1) {
							return (
								<div className="SelectedProjectsItems-right">
									<span
										className="SelectedProjectsItems-right-span"
										data-scroll
										data-scroll-offset="15%"
										data-scroll-class="RightVisible"
									>
										<div className="SelectedProjectsItems-right-span-inside">
											<div className="SelectedProjectsItems-right-span-inside-img">
												<img src={`img/proj/${img}`} alt={img} />
											</div>
											<div className="SelectedProjectsItems-right-span-inside-desc">
												<p className="SelectedProjectsItems-right-span-inside-desc-head">
													{name}
												</p>
												<p className="SelectedProjectsItems-right-span-inside-desc-tech">
													{technologies}
												</p>
												<span className="SelectedProjectsItems-right-span-inside-desc-btns">
													<a
														herf={github}
														target="_blank"
														rel="noreferrer"
														className="SelectedProjectsItems-right-span-inside-desc-btns-btn"
													>
														<div></div> Github
													</a>
													<a
														href={demo}
														target="_blank"
														rel="noreferrer"
														className="SelectedProjectsItems-right-span-inside-desc-btns-btn"
													>
														<div></div> Demo
													</a>
													<button className="SelectedProjectsItems-right-span-inside-desc-btns-btn">
														<div></div> Read more
													</button>
												</span>
											</div>
										</div>
									</span>
								</div>
							);
						} else {
							return (
								<div className="SelectedProjectsItems-left">
									<span
										className="SelectedProjectsItems-left-span"
										data-scroll
										data-scroll-offset="15%"
										data-scroll-class="LeftVisible"
									>
										<div className="SelectedProjectsItems-left-span-inside">
											<div className="SelectedProjectsItems-left-span-inside-img">
												<img src={`img/proj/${img}`} alt={img} />
											</div>
											<div className="SelectedProjectsItems-left-span-inside-desc">
												<p className="SelectedProjectsItems-left-span-inside-desc-head">
													{name}
												</p>
												<p className="SelectedProjectsItems-left-span-inside-desc-tech">
													{technologies}
												</p>
												<span className="SelectedProjectsItems-left-span-inside-desc-btns">
													<a
														href={github}
														target="_blank"
														rel="noreferrer"
														className="SelectedProjectsItems-left-span-inside-desc-btns-btn"
													>
														<div></div> Github
													</a>
													<a
														href={demo}
														target="_blank"
														rel="noreferrer"
														className="SelectedProjectsItems-left-span-inside-desc-btns-btn"
													>
														<div></div> Demo
													</a>
													<button className="SelectedProjectsItems-left-span-inside-desc-btns-btn">
														<div></div> Read more
													</button>
												</span>
											</div>
										</div>
									</span>
								</div>
							);
						}
					}
				})}

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
