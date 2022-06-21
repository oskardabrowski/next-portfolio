import styled from "styled-components";

const MenuStyles = styled.nav`
	position: fixed;
	z-index: 10000000000;
	width: 100%;

	.Buttons {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		position: absolute;
		top: 0rem;
		right: 0rem;
		background: linear-gradient(30deg, #0026ff, #9a00ff);
		border-radius: 0px 0px 0px 25px;
		padding: 0.75rem;
		width: max-content;
		z-index: 10000;

		& > div {
			&:not(:first-child) {
				margin-right: 1rem;
			}
		}

		&-menu {
			margin-right: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			@media (max-width: 37.5em) {
				margin-right: 0.5rem;
			}
			& > button {
				border: none;
				background: none;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		&-github {
			font-size: 2rem;
			color: white;
			margin-right: 1rem;
			text-decoration: none;
			&:hover {
				cursor: pointer;
			}

			@media (max-width: 37.5em) {
				display: none;
			}
		}
		&-lang {
			height: 100%;
			display: flex;
			align-items: center;
			position: relative;
			align-items: center;

			@media (max-width: 37.5em) {
				display: none;
			}

			&-current {
				width: max-content;
				height: 2.5rem;
				border: none;
				background: black;
				border-radius: 25px 25px 0px 25px;
				color: white;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				& > span {
					margin: 0.5rem;
				}

				&:hover {
					cursor: pointer;
				}

				&-flag {
					border-radius: 25rem;
					overflow: hidden;
					background-color: black;
					width: 1.75rem;
					height: 1.75rem;
					display: flex;
					align-items: center;
					justify-content: center;
					& > img {
						width: 1.75rem;
					}
				}

				&-open {
					font-size: 1rem;
					display: flex;
					align-items: center;
					position: absolute;
					bottom: -0.15rem;
					right: -0.15rem;
				}

				&-options {
					position: absolute;
					top: 4rem;
					width: 5rem;
					height: auto;
					background-color: black;
					border-radius: 15px;
					&-option {
						width: max-content;
						height: 2.5rem;
						display: flex;
						align-items: center;
						margin-left: 0.5rem;
						border: none;
						background: none;
						color: white;
						border-radius: 25rem;
						& > span {
							margin-left: 0.5rem;
						}

						&:hover {
							cursor: pointer;
						}
					}
				}
			}
		}
	}

	.CurrentLang {
		background: #9a00ff;
	}

	.Components {
		position: absolute;
		top: 0rem;
		right: 0rem;
		width: 100%;
		height: auto;
		z-index: 9000;
		&-menu {
			position: relative;
			top: 0rem;
			right: 0rem;
			&-red {
				position: absolute;
				width: 100vw;
				height: 100vh;
				background-color: rgba(255, 0, 69, 0.5);
				clip-path: circle(0% at 100% 0);
				z-index: 10;
				transition: all 0.5s ease-in-out;
			}
			&-blue {
				position: absolute;
				width: 100vw;
				height: 100vh;
				background-color: rgba(0, 15, 254, 0.5);
				clip-path: circle(0% at 100% 0);
				z-index: 50;
				transition: all 0.75s ease-in-out;
			}
			&-links {
				position: absolute;
				width: 100vw;
				height: 100vh;
				background-color: white;
				clip-path: circle(0% at 100% 0);
				z-index: 100;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				transition: all 1s ease-in-out;

				&-github {
					font-size: 2rem;
					margin-bottom: 0.5rem;
					background: none;
					border: none;
					/* display: flex; */
					align-items: center;
					justify-content: start;
					width: 10rem;
					font-family: "Arimo";
					font-weight: 500;
					display: none;
					width: 20rem;

					@media (max-width: 37.5em) {
						display: flex;
					}

					& > .ico {
						font-size: 2rem;
						margin-right: 0.5rem;
						margin-left: 0.25rem;
					}
				}

				&-lang {
					font-size: 2rem;
					margin-bottom: 0.5rem;
					background: none;
					border: none;
					display: flex;
					align-items: center;
					justify-content: start;
					width: 10rem;
					font-family: "Arimo";
					font-weight: 500;

					&-flag {
						display: flex;
						align-items: center;
						justify-content: center;
						overflow: hidden;
						width: 1.75rem;
						border: 1px solid black;
						& > img {
							width: 100%;
						}
					}
				}

				& > button.ResponsiveLang {
					display: none;
				}
				& > button.ResponsiveLangVisible {
					@media (max-width: 37.5em) {
						display: flex;
					}
				}

				& > button {
					font-size: 2rem;
					margin-bottom: 0.5rem;
					background: none;
					border: none;
					display: flex;
					align-items: center;
					justify-content: start;
					width: 20rem;
					font-weight: 500;
					&:hover {
						cursor: pointer;
					}
					& > div.Components-menu-links-lang-flag {
						width: 1.75rem;
						height: 1.75rem;
					}
					& > div {
						width: 1.25rem;
						height: 1.25rem;
						background-color: red;
						border-radius: 50rem;
						margin-right: 0.5rem;
						background: linear-gradient(45deg, #00ff18, #ffff00);
					}
				}
			}
		}
	}

	.RedActive {
		clip-path: circle(126.1% at 100% 0);
	}
	.BlueActive {
		clip-path: circle(119.3% at 100% 0);
	}
	.MenuActive {
		clip-path: circle(112.8% at 100% 0);
	}

	.Loader {
		position: absolute;
		top: 0rem;
		left: 0rem;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background-color: transparent;
		z-index: 1000000;
		clip-path: circle(0% at 100% 0);

		@media (max-width: 62.5em) {
			width: 150vw;
		}

		@media (max-width: 43.75em) {
			width: 200vw;
		}

		@media (max-width: 31.25em) {
			width: 300vw;
		}

		&-red {
			position: absolute;
			width: 300%;
			height: 280%;
			top: 0rem;
			right: -150%;
			background: rgba(255, 0, 69, 0.5);
			transform: rotate(45deg);
			clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
			transition: all 0.5s ease-in-out;
		}
		&-blue {
			position: absolute;
			width: 300%;
			height: 280%;
			top: 0rem;
			right: -150%;
			background: rgba(0, 15, 254, 0.5);
			transform: rotate(45deg);
			clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
			transition: all 0.75s ease-in-out;
			transition-delay: 0.2s;
		}
		&-white {
			position: absolute;
			width: 300%;
			height: 280%;
			top: 0rem;
			right: -150%;
			background-color: white;
			transform: rotate(45deg);
			clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);
			transition: all 1s ease-in-out;
			transition-delay: 0.3s;
		}
	}
`;

export default MenuStyles;
