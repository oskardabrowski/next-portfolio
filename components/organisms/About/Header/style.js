import styled from "styled-components";

const AboutHeaderStyles = styled.header`
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	& > h1 {
		color: white;
		position: absolute;
		font-size: 2.5rem;
		& > span {
			background: linear-gradient(to top right, #0062ff, #ff007b);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
`;

export default AboutHeaderStyles;
