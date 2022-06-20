import styled from "styled-components";

const ProjectsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-content: center;
	align-items: center;
	justify-content: center;

	.Item {
		width: 45rem;
		height: 30rem;
		background: linear-gradient(30deg, #0071ff, #2bff8e);
		margin: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		color: white;
		border-radius: 25px;
		&-container {
			width: 96.5%;
			height: 95%;
			background-color: black;
			border-radius: 15px;
			overflow: hidden;
			&-header {
				width: 100%;
				display: flex;

				&-image {
					width: 10rem;
					height: 10rem;
					& > img {
						width: 100%;
						border-radius: 0px 0px 15px 0px;
					}
				}

				&-text {
					margin-left: 1rem;
					&-title {
						font-size: 1.75rem;
						font-weight: bold;
					}
					&-tech {
						font-size: 1.2rem;
					}
				}
			}

			&-description {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				&-text {
					text-align: justify;
					padding: 0.75rem 1.25rem;
					height: 80%;
				}
				&-btns {
					height: 20%;
					width: 100%;
					padding: 0rem 1rem;
					display: flex;
					align-items: center;
					justify-content: start;

					& > .btn {
						background: none;
						border: none;
						color: white;
						font-family: "Arimo";
						font-size: 1rem;
						display: flex;
						margin-right: 1rem;
						transition: all 0.5s ease-in-out;

						& > div {
							margin-right: 0.5rem;
							width: 1rem;
							height: 1rem;
							background-color: white;
							border-radius: 50%;
							transition: all 0.5s ease-in-out;
						}

						&:hover {
							cursor: pointer;
							color: #2bff8e;
							& > div {
								background-color: #2bff8e;
							}
						}
					}
				}
			}
		}
	}
`;

export default ProjectsContainer;
