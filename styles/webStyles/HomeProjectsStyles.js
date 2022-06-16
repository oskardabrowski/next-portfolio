import styled from "styled-components";

const SelectedProjects = styled.div`
	width: 100%;
	min-height: 100vh;
	height: auto;
	margin-top: 1rem;
	.SelectedProjectsHeader {
		width: 100%;
		&-container {
			width: 55rem;
			height: 7.5rem;
			border-radius: 25rem;
			background: linear-gradient(to right, #000b3d, #00ffec);
			position: relative;
			left: -55rem;
			display: flex;
			align-items: center;
			justify-content: right;
			z-index: 100;
			transition: all 0.5s ease-in-out;
			& > h3 {
				font-size: 2rem;
				color: white;
				& > span {
					margin-right: 3.5rem;
					font-size: 2.5rem;
					background: linear-gradient(to top right, #0062ff, #ff007b);
					-webkit-background-clip: text;
					background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			}
		}
		&-el1 {
			width: 45rem;
			height: 4rem;
			border-radius: 25rem;
			background: linear-gradient(to right, #001265, #ff00e9);
			position: relative;
			left: -50rem;
			top: -0.5rem;
			display: flex;
			align-items: center;
			justify-content: right;
			z-index: 50;
			transition: all 0.5s ease-in-out;

			&:before {
				content: "";
				width: 2.5rem;
				height: 2.5rem;
				margin-right: 1rem;
				background-color: white;
				border-radius: 25rem;
			}
		}
		&-el2 {
			width: 20rem;
			height: 2.5rem;
			border-radius: 25rem;
			background: linear-gradient(to right, #008fff, #ff0074);
			position: relative;
			left: -50rem;
			top: -1.25rem;
			transition: all 0.5s ease-in-out;
		}
	}

	.SelectedHeaderContainerView {
		left: -5rem;
	}

	.SelectedProjectsItems {
		width: 100%;
		min-height: 5rem;
		overflow: hidden;
		margin-bottom: 3rem;
		position: relative;
		right: 0;

		&-see {
			width: 100%;
			height: 3rem;
			position: relative;
			display: flex;
			align-items: center;
			&-btn {
				width: 50rem;
				padding: 0.5rem;
				position: absolute;
				right: -50rem;
				border-radius: 25rem;
				border: none;
				display: flex;
				align-items: center;
				justify-content: start;
				font-size: 1.5rem;
				color: white;
				background: linear-gradient(to right, #ff0045, #000ffe);
				transition: all 0.5s ease-in-out;
				& > .ico {
					margin: 0rem 0.5rem;
				}

				&:hover {
					cursor: pointer;
					right: -2.5rem;
				}
			}
		}

		&-left {
			width: 100%;
			position: relative;
			height: 10rem;
			margin: 1rem 0rem;
			&-span {
				width: 60rem;
				height: 10rem;
				border-radius: 25rem;
				position: absolute;
				top: 0;
				left: -70rem;
				background: linear-gradient(to right bottom, #ff00ac, #0041ff);
				display: flex;
				align-items: center;
				justify-content: center;
				transition: all 1s ease-in-out;
				&-inside {
					width: 58rem;
					height: 8rem;
					background-color: #000b3d;
					border-radius: 25rem;
					display: flex;
					align-items: center;
					justify-content: end;
					flex-direction: row-reverse;

					&-desc {
						height: 100%;
						color: white;
						margin-right: 1rem;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: end;
						&-head {
							margin: 0;
							padding: 0;
							font-size: 1.75rem;
							font-weight: bold;
							margin-top: 0.5rem;
						}
						&-tech {
							margin: 0;
							padding: 0;
							font-size: 1.2rem;
						}
						&-btns {
							margin: 0;
							padding: 0;
							margin-bottom: 0.5rem;
							display: flex;

							&-btn {
								&:not(:first-child) {
									margin-left: 0.5rem;
								}
								border: none;
								padding: 0.5rem 0.5rem;
								display: flex;
								border-radius: 25rem;
								align-items: center;
								background: linear-gradient(to right top, #0026ff, #9a00ff);
								color: white;
								font-weight: bold;
								transition: all 0.5s ease-in-out;
								& > div {
									width: 0.75rem;
									height: 0.75rem;
									background-color: red;
									margin-right: 0.5rem;
									border-radius: 25rem;
									background-color: white;
									transition: all 0.5s ease-in-out;
								}

								&:hover {
									color: black;
									cursor: pointer;
									& > div {
										background-color: black;
									}
								}
							}
						}
					}

					&-img {
						width: 7rem;
						height: 7rem;
						border-radius: 25rem;
						overflow: hidden;
						margin-right: 0.5rem;
					}
				}
			}
		}
		&-right {
			width: 100%;
			position: relative;
			height: 10rem;
			margin: 1rem 0rem;
			&-span {
				width: 60rem;
				height: 10rem;
				border-radius: 25rem;
				position: absolute;
				right: -70rem;
				background: linear-gradient(to right bottom, #ff00ac, #0041ff);
				display: flex;
				align-items: center;
				justify-content: center;
				transition: all 1s ease-in-out;
				&-inside {
					width: 58rem;
					height: 8rem;
					background-color: #000b3d;
					border-radius: 25rem;
					display: flex;
					align-items: center;
					justify-content: start;

					&-desc {
						height: 100%;
						color: white;
						margin-left: 1rem;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: start;
						&-head {
							margin: 0;
							padding: 0;
							font-size: 1.75rem;
							font-weight: bold;
							margin-top: 0.5rem;
						}
						&-tech {
							margin: 0;
							padding: 0;
							font-size: 1.2rem;
						}
						&-btns {
							margin: 0;
							padding: 0;
							margin-bottom: 0.5rem;
							display: flex;

							&-btn {
								&:not(:first-child) {
									margin-left: 0.5rem;
								}
								border: none;
								padding: 0.5rem 0.5rem;
								display: flex;
								border-radius: 25rem;
								align-items: center;
								background: linear-gradient(to right top, #0026ff, #9a00ff);
								color: white;
								font-weight: bold;
								transition: all 0.5s ease-in-out;
								& > div {
									width: 0.75rem;
									height: 0.75rem;
									background-color: red;
									margin-right: 0.5rem;
									border-radius: 25rem;
									background-color: white;
									transition: all 0.5s ease-in-out;
								}

								&:hover {
									color: black;
									cursor: pointer;
									& > div {
										background-color: black;
									}
								}
							}
						}
					}

					&-img {
						width: 7rem;
						height: 7rem;
						border-radius: 25rem;
						overflow: hidden;
						margin-left: 0.5rem;
					}
				}
			}
		}
	}

	.RightVisible {
		right: -15rem;
	}
	.LeftVisible {
		left: -15rem;
	}
	.SeeVisible {
		right: -5rem;
	}
`;

export default SelectedProjects;
