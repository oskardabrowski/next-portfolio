import styled from "styled-components";

const AboutDesc = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction: column;

	.AboutHead {
		width: 100%;
		position: relative;
		&-title {
			margin-top: 0.5rem;
			width: 60rem;
			height: 6.5rem;
			border-radius: 25rem;
			background: linear-gradient(to right, #f400ff, #6500ff);
			position: relative;
			left: -70rem;
			display: flex;
			align-items: center;
			justify-content: end;
			font-family: "Arimo";
			font-size: 2rem;
			color: white;
			font-weight: bold;
			box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.75);
			transition: all 1s ease-in-out;
			& > h2 {
				font-size: 2rem;
				& > span {
					margin-right: 3rem;
					font-size: 2.5rem;
					background: linear-gradient(to top right, #0062ff, #ff007b);
					-webkit-background-clip: text;
					background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			}
			&-dots {
				width: 50rem;
				height: 4rem;
				border-radius: 25rem;
				position: absolute;
				top: 4.5rem;
				left: -5rem;
				box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
				display: flex;
				align-items: center;
				justify-content: end;
				background: linear-gradient(to right, #ff7500, #ffd500);
				&-container {
					width: 80%;
					height: 1rem;
					display: flex;
					flex-direction: row-reverse;
					align-items: center;
					justify-content: end;
					& > span {
						width: 0.75rem;
						height: 0.75rem;
						background-color: white;
						border-radius: 15rem;
						margin-right: 2rem;
						&:nth-child(1) {
							margin-right: 4rem;
						}
						&:nth-child(5) {
							margin-right: 4rem;
						}
						&:nth-child(9) {
							margin-right: 4rem;
						}
					}
				}
			}
		}
	}

	.AboutHeadTitleVisible {
		left: -5rem;
	}

	.AboutDescription {
		width: 100%;
		min-height: 32rem;
		/* min-height: 80%; */
		display: flex;
		flex-direction: row;
		&-text {
			width: 50%;

			&-p {
				position: relative;
				left: -60rem;
				padding: 0rem 3rem;
				padding-top: 4rem;
				font-family: "Arimo";
				font-size: 1.2rem;
				color: white;
				text-align: justify;
				transition: all 0.5s ease-out;
			}
		}
		&-photo {
			width: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			overflow: hidden;

			&-container {
				background-color: red;
				background: linear-gradient(to right bottom, #0036ff, #00ffa5);
				border-radius: 500rem;
				padding: 1.5rem;
				position: relative;
				right: -50rem;
				transition: all 0.5s ease-out;
				& > img {
					border-radius: 500rem;
					overflow: hidden;
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
				& > span {
					width: 7rem;
					height: 0.3rem;
					margin-left: 2rem;
					background-color: white;
					border-radius: 25rem;

					&:first-child {
						width: 2rem;
						transform: rotate(45deg);
						position: relative;
						display: flex;
						align-items: center;
						justify-content: center;
						margin-left: 1.5rem;

						&:before {
							content: "";
							width: 2rem;
							height: 0.3rem;
							background-color: white;
							position: absolute;
							transform: rotate(-90deg);
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