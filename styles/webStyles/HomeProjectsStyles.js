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
		background-color: red;
		width: 100%;
		min-height: 5rem;
		&-item {
			width: 55rem;
			height: 10rem;
			background-color: blue;
		}
	}
`;

export default SelectedProjects;
