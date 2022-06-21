import styled from "styled-components";

const FooterStyle = styled.footer`
	width: 100%;
	position: relative;
	@media (max-width: 62.5em) {
		font-size: 1rem;
		position: relative;
		width: 100%;
		height: 5rem;
		background-color: red;
		bottom: 0rem;
		margin-top: 2rem;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(45deg, #ffd500, #00b1ff);
	}
	.FooterCopy {
		position: absolute;
		bottom: 5%;
		left: 50%;
		font-family: "Arimo";
		font-size: 2.25rem;
		font-weight: bold;
		color: white;
		transform: translate(-50%, -50%);
		@media (max-width: 75em) {
			font-size: 1.75rem;
		}
		@media (max-width: 62.5em) {
			font-size: 1rem;
			position: absolute;
			width: max-content;
		}
	}

	.FooterImage {
		width: 100%;
		& > span > img {
			width: 100%;
		}
		@media (max-width: 62.5em) {
			display: none;
		}
	}
`;

export default FooterStyle;
