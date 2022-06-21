import styled from "styled-components";

const ProjectContentStyle = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	.ResponsiveImage {
		width: 80%;
		@media (max-width: 37.5em) {
			width: 100%;
		}
		& > img {
			width: 100%;
		}
	}

	.Links {
		width: 80%;
		display: flex;
		justify-content: space-between;
		color: white;
		margin-top: 2rem;
		font-size: 2rem;
		@media (max-width: 37.5em) {
			flex-direction: column;
			align-items: start;
		}

		& > a {
			display: flex;
			align-items: center;
			justify-content: center;
			@media (max-width: 37.5em) {
				margin: 1rem 0rem;
			}

			& > .ico {
				margin-right: 0.5rem;
			}
		}
	}

	.TechStack {
		width: 100%;
		color: white;
		margin: 1rem 0rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		& > h2 {
			font-size: 3rem;
		}

		&-icons {
			width: 100%;
			height: auto;
			display: flex;
			align-items: center;
			justify-content: center;
			align-content: center;
			flex-wrap: wrap;
			&-icon {
				margin: 1rem;
				width: 10rem;
				height: 10rem;
				background-color: white;
				color: black;
				padding: 1.5rem;
				border-radius: 500rem;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				font-size: 2rem;

				& > p {
					font-size: 0.9rem;
					margin: 0rem;
					padding: 0rem;
					text-align: center;
				}

				& > div {
					font-size: 4rem;
				}
			}
		}
	}

	.DescriptionContainer {
		width: 100%;
		color: white;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		align-content: center;
		& > h3 {
			font-size: 3rem;
		}
		& > p {
			width: 90%;
			font-size: 1.5rem;
			text-align: justify;
			text-indent: 50px;
			line-height: 2.25rem;
			display: flex;
			align-items: center;
			justify-content: center;
			@media (max-width: 37.5em) {
				font-size: 1rem;
				line-height: 1.25rem;
			}
		}
	}
`;

export default ProjectContentStyle;
