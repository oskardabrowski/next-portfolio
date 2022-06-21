import Burger from "@animated-burgers/burger-rotate";
import "@animated-burgers/burger-rotate/dist/styles.css";
import { useRouter } from "next/router";
import { useState, useContext, useRef, useEffect } from "react";
import { AppContext } from "../Context";
import { AiFillGithub } from "react-icons/ai";
import { MdArrowLeft, MdArrowDropDown } from "react-icons/md";
import MenuStyles from "./style";
import Image from "next/image";

const Menu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLang, setIsLang] = useState(false);
	const loader = useRef();
	const loaderRed = useRef();
	const loaderBlue = useRef();
	const loaderWhite = useRef();

	const {
		appLang,
		setAppLang,
		pageLoaded,
		setPageLoaded,
		redirectPath,
		setRedirectPath,
	} = useContext(AppContext);

	const router = useRouter();

	const changeLangHandler = (lang) => {
		setAppLang(lang);
		setIsLang(false);
	};

	useEffect(() => {
		const { action, path } = redirectPath;
		if (action) {
			redirectToPage(path);
			setRedirectPath({
				action: false,
				path: "",
			});
		}
	}, [redirectPath]);

	useEffect(() => {
		if (pageLoaded) {
			loaderRed.current.style.clipPath =
				"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)";
			loaderBlue.current.style.clipPath =
				"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)";
			loaderWhite.current.style.clipPath =
				"polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)";
			setTimeout(() => {
				loader.current.style.clipPath = "circle(0% at 100% 0)";
				loaderRed.current.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
				loaderBlue.current.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
				loaderWhite.current.style.clipPath =
					"polygon(0 0, 100% 0, 100% 0, 0 0)";
			}, 1310);
		}
	}, [pageLoaded]);

	const redirectToPage = (link) => {
		setIsMenuOpen(false);

		loader.current.style.clipPath = "circle(150% at 100% 0)";
		loaderRed.current.style.clipPath =
			"polygon(0 0, 100% 0, 100% 100%, 0 100%)";
		loaderBlue.current.style.clipPath =
			"polygon(0 0, 100% 0, 100% 100%, 0 100%)";
		loaderWhite.current.style.clipPath =
			"polygon(0 0, 100% 0, 100% 100%, 0 100%)";
		setTimeout(() => {
			router.push(link);
			setPageLoaded(false);
		}, 1300);
	};
	return (
		<MenuStyles>
			<div className="Buttons">
				<div className="Buttons-menu">
					<Burger
						className="BurgerBtn"
						direction="right"
						Component="button"
						type="button"
						isOpen={isMenuOpen}
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						aria-label="Menu"
					/>
				</div>
				<a
					href="https://github.com/oskardabrowski"
					target="_blank"
					rel="noreferrer"
					aria-label="My Github"
					className="Buttons-github"
				>
					<AiFillGithub />
				</a>
				<div className="Buttons-lang">
					<button
						className="Buttons-lang-current"
						onClick={() => setIsLang(!isLang)}
					>
						<div className="Buttons-lang-current-flag">
							{appLang === "EN" ? (
								<Image
									width="100%"
									height="100%"
									src="/img/EN.png"
									alt="EN"
									placeholder="empty"
								/>
							) : (
								<Image
									width="100%"
									height="100%"
									src="/img/PL.png"
									alt="PL"
									placeholder="empty"
								/>
							)}
						</div>
						<span>{appLang === "EN" ? "EN" : "PL"}</span>
						<div className="Buttons-lang-current-open">
							{isLang ? <MdArrowDropDown /> : <MdArrowLeft />}
						</div>
					</button>
					{isLang && (
						<div className="Buttons-lang-current-options">
							<button
								className={`Buttons-lang-current-options-option ${
									appLang === "EN" ? "CurrentLang" : ""
								}`}
								onClick={() => changeLangHandler("EN")}
							>
								<div className="Buttons-lang-current-flag">
									<Image
										width="100%"
										height="100%"
										src="/img/EN.png"
										alt="EN"
										placeholder="empty"
									/>
								</div>
								<span>EN</span>
							</button>
							<button
								className={`Buttons-lang-current-options-option ${
									appLang === "PL" ? "CurrentLang" : ""
								}`}
								onClick={() => changeLangHandler("PL")}
							>
								<div className="Buttons-lang-current-flag">
									<Image
										width="100%"
										height="100%"
										src="/img/PL.png"
										alt="PL"
										placeholder="empty"
									/>
								</div>
								<span>PL</span>
							</button>
						</div>
					)}
				</div>
			</div>
			<div className="Components">
				<div className="Components-menu">
					<div
						className={`Components-menu-links ${
							isMenuOpen ? "MenuActive" : ""
						}`}
					>
						<button onClick={() => redirectToPage("/")}>
							{router.pathname == "/" && <div></div>}
							{appLang === "EN" ? "Home" : "Strona główna"}
						</button>
						<button onClick={() => redirectToPage("/about")}>
							{router.pathname == "/about" && <div></div>}
							{appLang === "EN" ? "About me" : "O mnie"}
						</button>
						<button onClick={() => redirectToPage("/projects")}>
							{router.pathname == "/projects" && <div></div>}
							{appLang === "EN" ? "Projects" : "Projekty"}
						</button>
						<a
							href="https://github.com/oskardabrowski"
							target="_blank"
							rel="noreferrer"
							aria-label="My Github"
							className="Components-menu-links-github"
						>
							<AiFillGithub className="ico" /> Github
						</a>
						<button
							className={`Components-menu-links-lang ResponsiveLang ${
								appLang === "EN" ? "ResponsiveLangVisible" : ""
							}`}
							onClick={() => changeLangHandler("PL")}
						>
							<div className="Components-menu-links-lang-flag">
								<Image
									width="100%"
									height="100%"
									src="/img/EN.png"
									alt="EN"
									placeholder="empty"
								/>
							</div>
							English
						</button>
						<button
							className={`Components-menu-links-lang ResponsiveLang ${
								appLang === "PL" ? "ResponsiveLangVisible" : ""
							}`}
							onClick={() => changeLangHandler("EN")}
						>
							<div className="Components-menu-links-lang-flag">
								<Image
									width="100%"
									height="100%"
									src="/img/PL.png"
									alt="PL"
									placeholder="empty"
								/>
							</div>
							Polski
						</button>
					</div>
					<div
						className={`Components-menu-blue ${isMenuOpen ? "BlueActive" : ""}`}
					></div>
					<div
						className={`Components-menu-red ${isMenuOpen ? "RedActive" : ""}`}
					></div>
				</div>
			</div>
			<div className="Loader" ref={loader}>
				<div className="Loader-red" ref={loaderRed}></div>
				<div className="Loader-blue" ref={loaderBlue}></div>
				<div className="Loader-white" ref={loaderWhite}></div>
			</div>
		</MenuStyles>
	);
};

export default Menu;
