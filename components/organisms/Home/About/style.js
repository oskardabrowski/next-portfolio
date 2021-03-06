import styled from "styled-components";

const AboutDesc = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;

	.AboutDescription {
		width: 100%;
		min-height: 32rem;
		/* min-height: 80%; */
		display: flex;
		flex-direction: row;
		@media (max-width: 62.5em) {
			flex-direction: column-reverse;
		}
		&-text {
			width: 50%;
			@media (max-width: 62.5em) {
				width: 100%;
			}
			@media (max-width: 31.25em) {
				display: flex;
				align-items: center;
				justify-content: center;
			}

			&-p {
				position: relative;
				text-indent: 50px;
				left: -60rem;
				padding: 0rem 3rem;
				padding-top: 4rem;
				font-family: "Arimo";
				font-size: 1.2rem;
				color: white;
				text-align: justify;
				transition: all 0.5s ease-out;
				line-height: 1.4;
				@media (max-width: 31.25em) {
					font-size: 1rem;
					padding: 2rem 0rem;
					margin: 0rem 0rem;
					width: 90%;
				}
			}
		}
		&-photo {
			width: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;
			@media (max-width: 62.5em) {
				width: 100%;
				padding-top: 5rem;
			}

			&-container {
				background-color: red;
				background: linear-gradient(to right bottom, #0036ff, #00ffa5);
				border-radius: 500rem;
				padding: 1.5rem;
				position: relative;
				right: -50rem;
				transition: all 0.5s ease-out;
				@media (max-width: 62.5em) {
					padding: 1rem;
				}
				& > img {
					border-radius: 500rem;
					overflow: hidden;
					width: 20rem;
					height: 20rem;
					@media (max-width: 62.5em) {
						width: 10rem;
						height: 10rem;
					}
				}
			}
		}
	}
	.AboutTextVisible {
		left: 0;
	}
	.AboutPhotoVisible {
		right: 0;
	}
	.AboutReadMore {
		display: flex;
		overflow-x: hidden;
		&-left {
			width: 50%;
			display: flex;
			align-items: center;
			justify-content: start;
			@media (max-width: 31.25em) {
				width: 100%;
			}
			&-btn {
				width: 40rem;
				padding: 1rem;
				border-radius: 25rem;
				background: linear-gradient(to right, #000ffe, #ff0045);
				display: flex;
				align-items: center;
				justify-content: end;
				position: relative;
				left: -50rem;
				font-size: 1.2rem;
				font-weight: bold;
				color: white;
				padding-right: 2rem;
				transition: all 0.5s ease-in-out;
				@media (max-width: 62.5em) {
					width: 30rem;
					padding: 0.75rem;
					font-size: 1rem;
					padding-right: 2rem;
				}
				@media (max-width: 31.25em) {
					width: 20rem;
					padding: 0.5rem;
					font-size: 0.8rem;
					padding-right: 2rem;
				}
				&:hover {
					cursor: pointer;
					left: -2.5rem;
				}
				& > span {
					margin-left: 0.5rem;
				}

				& > .ico {
					font-size: 2rem;
				}
			}
		}
		&-right {
			width: 50%;
			display: flex;
			align-items: center;
			justify-content: end;
			padding-bottom: 3rem;
			position: relative;
			@media (max-width: 31.25em) {
				display: none;
				width: 0%;
			}

			&-el {
				margin-top: 0.5rem;
				width: 35rem;
				position: relative;
				right: -60rem;
				height: 4.5rem;
				border-radius: 25rem;
				background-color: blue;
				background: linear-gradient(to right, #ffa900, #00c9b2);
				display: flex;
				align-items: center;
				box-shadow: -2px 4px 5px rgba(0, 0, 0, 0.5);
				z-index: 100;
				transition: all 1s ease-in-out;
				@media (max-width: 62.5em) {
					width: 25rem;
					height: 3.5rem;
				}

				& > span {
					width: 1.5rem;
					height: 1.5rem;
					background-color: white;
					margin-left: 1rem;
					clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
					transform: rotate(-90deg);
					&:first-child {
						margin-left: 2rem;
					}
				}
			}
			&-el2 {
				width: 30rem;
				height: 3rem;
				background: linear-gradient(to right, #000ffe, #9500ff);
				position: absolute;
				top: 4.5rem;
				right: -60rem;
				border-radius: 25rem;
				z-index: 50;
				box-shadow: -2px 4px 5px rgba(0, 0, 0, 0.5);
				display: flex;
				align-items: center;
				justify-content: left;
				transition: all 1s ease-in-out;
				@media (max-width: 62.5em) {
					width: 20rem;
					height: 2rem;
					top: 3.5rem;
				}
				& > span {
					width: 7rem;
					height: 0.3rem;
					margin-left: 2rem;
					background-color: white;
					border-radius: 25rem;
					@media (max-width: 62.5em) {
						width: 4rem;
						height: 0.2rem;
					}

					&:first-child {
						width: 2rem;
						transform: rotate(45deg);
						position: relative;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-left: 1.5rem;
						@media (max-width: 62.5em) {
							height: 0.2rem;
							width: 1.2rem;
						}

						&:before {
							content: "";
							width: 2rem;
							height: 0.3rem;
							background-color: white;
							position: absolute;
							transform: rotate(-90deg);
							@media (max-width: 62.5em) {
								height: 0.2rem;
								width: 1.2rem;
							}
						}
					}
				}
			}
		}
	}

	.ReadMoreBtnVisible {
		left: -5rem;
	}
	.ReadMoreEl1Visible {
		right: -5rem;
	}
`;

export default AboutDesc;
