import { useContext } from "react";
import { AppContext } from "../../Context";
import SelectedProjects from "./style";
import { ImEye } from "react-icons/im";
import { projects } from "../../database";
import SelectedProjectsHead from "../../../molecules/Title2";

const HomeSelectedProjects = () => {
	const { setRedirectPath, appLang } = useContext(AppContext);

	const filteredProjects = projects.filter((el) => el.selected === true);
	return (
		<SelectedProjects data-scroll-section>
			<SelectedProjectsHead
				title={appLang === "EN" ? "Selected projects" : "Wybrane projekty"}
			/>
			<div className="SelectedProjectsItems">
				{filteredProjects.map((item, index) => {
					let side = "left";
					const type = index % 2;
					const {
						name,
						img,
						technologies,
						github,
						demo,
						id,
						selected,
						namePL,
					} = item;
					if (type === 1) {
						side = "right";
					}
					if (selected === true) {
						return (
							<div key={index} className={`SelectedProjectsItems-${side}`}>
								<span
									className={`SelectedProjectsItems-${side}-span`}
									data-scroll
									data-scroll-offset="15%"
									data-scroll-class={
										side === "left" ? "LeftVisible" : "RightVisible"
									}
								>
									<div className={`SelectedProjectsItems-${side}-span-inside`}>
										<div
											className={`SelectedProjectsItems-${side}-span-inside-img`}
										>
											<img src={`img/proj/${img}`} alt={img} />
										</div>
										<div
											className={`SelectedProjectsItems-${side}-span-inside-desc`}
										>
											<p
												className={`SelectedProjectsItems-${side}-span-inside-desc-head`}
											>
												{appLang === "EN" ? name : namePL}
											</p>
											<p
												className={`SelectedProjectsItems-${side}-span-inside-desc-tech`}
											>
												{technologies}
											</p>
											<span
												className={`SelectedProjectsItems-${side}-span-inside-desc-btns`}
											>
												<a
													href={github}
													target="_blank"
													aria-label="Github"
													rel="noopener noreferrer nofollow"
													className={`SelectedProjectsItems-${side}-span-inside-desc-btns-btn`}
												>
													<div></div> Github
												</a>
												<a
													href={demo}
													target="_blank"
													aria-label="Demo"
													rel="noopener noreferrer nofollow"
													className={`SelectedProjectsItems-${side}-span-inside-desc-btns-btn`}
												>
													<div></div> Demo
												</a>
												<button
													className={`SelectedProjectsItems-${side}-span-inside-desc-btns-btn`}
													onClick={() =>
														setRedirectPath({
															action: true,
															path: `/project/${id}`,
														})
													}
												>
													<div></div>{" "}
													{appLang === "EN" ? "Read more" : "Czytaj więcej"}
												</button>
											</span>
										</div>
									</div>
								</span>
							</div>
						);
					}
				})}

				<div className="SelectedProjectsItems-see">
					<button
						className="SelectedProjectsItems-see-btn"
						data-scroll
						data-scroll-offset="10%"
						data-scroll-class="SeeVisible"
						onClick={() =>
							setRedirectPath({
								action: true,
								path: "/projects",
							})
						}
					>
						<ImEye className="ico" />
						{appLang === "EN" ? "See more projects" : "Zobacz więcej projektów"}
					</button>
				</div>
			</div>
		</SelectedProjects>
	);
};

export default HomeSelectedProjects;
