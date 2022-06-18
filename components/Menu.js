import styles from "../styles/StyleBundle";
import Burger from "@animated-burgers/burger-rotate";
import "@animated-burgers/burger-rotate/dist/styles.css";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState, useContext } from "react";
import { AppContext } from "./Context";
import { AiFillGithub } from "react-icons/ai";
import { MdArrowLeft, MdArrowDropDown } from "react-icons/md";
const { MenuStyles } = styles;

const Menu = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLang, setIsLang] = useState(false);

	const { appLang, setAppLang } = useContext(AppContext);

	const router = useRouter();

	const changeLangHandler = (lang) => {
		setAppLang(lang);
		setIsLang(false);
	};

	const redirectToPage = (link) => {
		setIsMenuOpen(false);
		router.push(link);
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
					/>
				</div>
				<a
					href="https://github.com/oskardabrowski"
					target="_blank"
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
								<img src="img/EN.png" alt="EN" />
							) : (
								<img src="img/PL.png" alt="PL" />
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
									<img src="img/EN.png" alt="EN" />
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
									<img src="img/PL.png" alt="PL" />
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
							Home
						</button>
						<button onClick={() => redirectToPage("/about")}>
							{router.pathname == "/about" && <div></div>}About
						</button>
						<button onClick={() => redirectToPage("/projects")}>
							{router.pathname == "/projects" && <div></div>}
							Projects
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
		</MenuStyles>
	);
};

export default Menu;
