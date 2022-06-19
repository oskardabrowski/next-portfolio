import styled from "styled-components";

const SelectedProjects = styled.div`
	width: 100%;
	min-height: 100vh;
	height: auto;
	margin-top: 1rem;

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

				@media (max-width: 31.25em) {
					width: 45rem;
					font-size: 1rem;
				}
			}
		}

		&-left {
			width: 100%;
			position: relative;
			height: 10rem;
			margin: 1rem 0rem;
			@media (max-width: 31.25em) {
				height: 7rem;
			}
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
				@media (max-width: 31.25em) {
					width: 45rem;
					height: 6rem;
				}
				&-inside {
					width: 58rem;
					height: 8rem;
					background-color: #000b3d;
					border-radius: 25rem;
					display: flex;
					align-items: center;
					justify-content: end;
					flex-direction: row-reverse;
					@media (max-width: 31.25em) {
						width: 48rem;
						height: 5rem;
						margin-right: 0.5rem;
					}

					&-desc {
						height: 100%;
						color: white;
						margin-right: 1rem;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: end;
						@media (max-width: 50em) {
							justify-content: space-evenly;
						}

						&-head {
							margin: 0;
							padding: 0;
							font-size: 1.75rem;
							font-weight: bold;
							margin-top: 0.5rem;
							@media (max-width: 31.25em) {
								font-size: 1.5rem;
								margin-bottom: 0.5rem;
							}
						}
						&-tech {
							margin: 0;
							padding: 0;
							font-size: 1.2rem;
							@media (max-width: 50em) {
								display: none;
							}
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
								&:nth-child(2) {
									@media (max-width: 31.25em) {
										display: none;
									}
								}
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
						& > img {
							width: 100%;
						}
						@media (max-width: 31.25em) {
							width: 4.5rem;
							height: 4.5rem;
							margin-right: 0.25rem;
						}
					}
				}
			}
		}
		&-right {
			width: 100%;
			position: relative;
			height: 10rem;
			margin: 1rem 0rem;
			@media (max-width: 31.25em) {
				height: 7rem;
			}
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
				@media (max-width: 31.25em) {
					width: 45rem;
					height: 6rem;
				}
				&-inside {
					width: 58rem;
					height: 8rem;
					background-color: #000b3d;
					border-radius: 25rem;
					display: flex;
					align-items: center;
					justify-content: start;
					@media (max-width: 31.25em) {
						width: 48rem;
						height: 5rem;
						margin-left: 0.5rem;
					}

					&-desc {
						height: 100%;
						color: white;
						margin-left: 1rem;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						align-items: start;
						@media (max-width: 50em) {
							justify-content: space-evenly;
						}
						&-head {
							margin: 0;
							padding: 0;
							font-size: 1.75rem;
							font-weight: bold;
							margin-top: 0.5rem;
							@media (max-width: 31.25em) {
								font-size: 1.5rem;
								margin-bottom: 0.5rem;
							}
						}
						&-tech {
							margin: 0;
							padding: 0;
							font-size: 1.2rem;
							@media (max-width: 50em) {
								display: none;
							}
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
								&:nth-child(2) {
									@media (max-width: 31.25em) {
										display: none;
									}
								}
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
						& > img {
							width: 100%;
						}
						@media (max-width: 31.25em) {
							width: 4.5rem;
							height: 4.5rem;
							margin-left: 0.25rem;
						}
					}
				}
			}
		}
	}

	.RightVisible {
		right: -15rem;
		@media (max-width: 50em) {
			right: -25rem;
		}
		@media (max-width: 31.25em) {
			right: -23rem;
		}
	}
	.LeftVisible {
		left: -15rem;
		@media (max-width: 50em) {
			left: -25rem;
		}
		@media (max-width: 31.25em) {
			left: -23rem;
		}
	}
	.SeeVisible {
		right: -5rem;
		@media (max-width: 62.5em) {
			right: -15rem;
		}
		@media (max-width: 50em) {
			right: -25rem;
		}
	}
`;

export default SelectedProjects;
