import styled from "styled-components";

const HeaderSelectedProjectsStyles = styled.div`
	width: 100%;
	.container {
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
		@media (max-width: 62.5em) {
			width: 45rem;
			height: 5rem;
		}
		@media (max-width: 31.25em) {
			width: 35rem;
			height: 3rem;
			margin-top: 2rem;
		}
		& > h3 {
			font-size: 2rem;
			color: white;
			@media (max-width: 62.5em) {
				font-size: 1.5rem;
			}
			@media (max-width: 31.25em) {
				font-size: 1.25rem;
			}
			& > span {
				margin-right: 3.5rem;
				font-size: 2.5rem;
				background: linear-gradient(to top right, #0062ff, #ff007b);
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
				@media (max-width: 62.5em) {
					font-size: 1.5rem;
				}
				@media (max-width: 31.25em) {
					font-size: 1.25rem;
				}
			}
		}
	}
	.el1 {
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
		@media (max-width: 62.5em) {
			width: 35rem;
			height: 3rem;
		}
		@media (max-width: 31.25em) {
			width: 25rem;
			height: 2.5rem;
		}

		&:before {
			content: "";
			width: 2.5rem;
			height: 2.5rem;
			margin-right: 1rem;
			background-color: white;
			border-radius: 25rem;
			@media (max-width: 62.5em) {
				width: 1.5rem;
				height: 1.5rem;
			}
			@media (max-width: 31.25em) {
				width: 1.25rem;
				height: 1.25rem;
			}
		}
	}
	.el2 {
		width: 20rem;
		height: 2.5rem;
		border-radius: 25rem;
		background: linear-gradient(to right, #008fff, #ff0074);
		position: relative;
		left: -50rem;
		top: -1.25rem;
		transition: all 0.5s ease-in-out;
		@media (max-width: 62.5em) {
			width: 15rem;
			height: 1.5rem;
			top: -0.75rem;
		}
	}

	.SelectedHeaderContainerView {
		left: -5rem;
		@media (max-width: 50em) {
			left: -15rem;
		}
	}
`;

export default HeaderSelectedProjectsStyles;
