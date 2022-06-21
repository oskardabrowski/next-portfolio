import styled from "styled-components";

const ContactTitleStyle = styled.div`
	width: 100%;
	.titleName {
		width: 50rem;
		height: 7.5rem;
		background-color: red;
		border-radius: 25rem;
		position: relative;
		left: -50rem;
		background: linear-gradient(to right, #f400ff, #6500ff);
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: end;
		font-size: 2rem;
		font-weight: bold;
		color: white;
		transition: all 1s ease-in-out;

		@media (max-width: 62.5em) {
			width: 40rem;
			height: 5rem;
			font-size: 1.5rem;
		}
		@media (max-width: 50em) {
			width: 30rem;
		}
		@media (max-width: 37.5em) {
			width: 30rem;
			height: 3rem;
			font-size: 1.2rem;
		}

		& > span {
			font-size: 2.5rem;
			margin-right: 3.5rem;
			background: linear-gradient(to top right, #0062ff, #ff007b);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			@media (max-width: 62.5em) {
				font-size: 1.5rem;
			}
		}
	}
	.el1 {
		width: 60rem;
		height: 5rem;
		background-color: red;
		border-radius: 25rem;
		position: relative;
		left: -65rem;
		background: linear-gradient(to right, #00b1ff, #ffd500);
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: end;
		transition: all 1s ease-in-out;

		@media (max-width: 62.5em) {
			width: 45rem;
			height: 3rem;
		}
		@media (max-width: 50em) {
			width: 35rem;
		}
		@media (max-width: 37.5em) {
			width: 30rem;
			height: 2rem;
		}

		& > span {
			margin-right: 3.5rem;
			border-radius: 25rem;
			width: 0.5rem;
			height: 0.5rem;
			background-color: white;
			@media (max-width: 37.5em) {
				margin-right: 1.5rem;
			}

			&:first-child {
				width: 10rem;
				height: 0.35rem;
			}
		}
	}
	.el2 {
		width: 45rem;
		height: 5rem;
		background-color: red;
		border-radius: 25rem;
		position: relative;
		left: -50rem;
		background: linear-gradient(to right, #9500ff, #000ffe);
		box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
		display: flex;
		flex-direction: row-reverse;
		align-items: center;
		justify-content: end;
		transition: all 1s ease-in-out;
		@media (max-width: 62.5em) {
			width: 35rem;
			height: 2.5rem;
		}
		@media (max-width: 50em) {
			width: 25rem;
		}
		& > span {
			width: 0.75rem;
			height: 0.75rem;
			background-color: white;
			border-radius: 15rem;
			margin-right: 2rem;
			@media (max-width: 62.5em) {
				width: 0.5rem;
				height: 0.5rem;
				margin-right: 1rem;
			}
			@media (max-width: 37.5em) {
				margin-right: 0.5rem;
			}
			&:nth-child(1) {
				margin-right: 4rem;
				@media (max-width: 37.5em) {
					margin-right: 1rem;
				}
			}
			&:nth-child(5) {
				margin-right: 4rem;
				@media (max-width: 37.5em) {
					margin-right: 1rem;
				}
			}
			&:nth-child(9) {
				margin-right: 4rem;
				@media (max-width: 37.5em) {
					margin-right: 1rem;
				}
			}
		}
	}

	.TitleVisible {
		left: -5rem;
		@media (max-width: 37.5em) {
			left: -12.5rem;
		}
	}
	.El1Visible {
		left: -5rem;
		@media (max-width: 37.5em) {
			left: -10rem;
		}
	}
	.El2Visible {
		left: -5rem;
		@media (max-width: 37.5em) {
			left: -10rem;
		}
	}
`;

export default ContactTitleStyle;
