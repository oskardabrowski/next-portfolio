import styled from "styled-components";

const AboutHeaderStyles = styled.header`
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	& > img {
		width: 100%;
	}
	& > h1 {
		color: white;
		position: absolute;
		font-size: 2.5rem;
		@media (max-width: 50em) {
			margin-top: 2.5rem;
			font-size: 1.75rem;
		}
		& > span {
			background: linear-gradient(to top right, #0062ff, #ff007b);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
`;

export default AboutHeaderStyles;
