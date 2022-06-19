import styled from "styled-components";

const AboutHeadStyle = styled.div`
	width: 100%;
	position: relative;
	.title {
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
		@media (max-width: 62.5em) {
			width: 50rem;
			height: 5rem;
		}
		@media (max-width: 50em) {
			width: 30rem;
			height: 3rem;
			font-size: 1.2rem;
		}
		@media (max-width: 31.25em) {
			width: 25rem;
			height: 3rem;
			font-size: 1.2rem;
		}
		& > h2 {
			font-size: 2rem;
			@media (max-width: 50em) {
				font-size: 1.2rem;
			}
			& > span {
				@media (max-width: 50em) {
					font-size: 1.2rem;
				}
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
			@media (max-width: 62.5em) {
				width: 40rem;
				height: 3rem;
			}
			@media (max-width: 50em) {
				width: 30rem;
				height: 2rem;
				top: 2.5rem;
			}
			@media (max-width: 31.25em) {
				width: 20rem;
				height: 2rem;
				font-size: 1.2rem;
			}
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
					@media (max-width: 62.5em) {
						width: 0.5rem;
						height: 0.5rem;
						margin-right: 1rem;
					}
					@media (max-width: 31.25em) {
						width: 0.25rem;
						height: 0.25rem;
						margin-right: 0.5rem;
					}
					&:nth-child(1) {
						margin-right: 4rem;
						@media (max-width: 62.5em) {
							margin-right: 2rem;
						}
						@media (max-width: 31.25em) {
							margin-right: 0.75rem;
						}
					}
					&:nth-child(5) {
						margin-right: 4rem;
						@media (max-width: 62.5em) {
							margin-right: 2rem;
						}
						@media (max-width: 31.25em) {
							margin-right: 0.75rem;
						}
					}
					&:nth-child(9) {
						margin-right: 4rem;
						@media (max-width: 62.5em) {
							margin-right: 2rem;
						}
						@media (max-width: 31.25em) {
							margin-right: 0.75rem;
						}
					}
				}
			}
		}
	}

	.AboutHeadTitleVisible {
		left: -5rem;
	}
`;

export default AboutHeadStyle;
