import styled from "styled-components";

const ProjectsHeaderStyle = styled.header`
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	& > img {
		width: 100%;
	}
	& > h1 {
		position: absolute;
		color: white;
		font-size: 2.5rem;
		@media (max-width: 37.5em) {
			font-size: 1.5rem;
		}
		& > span {
			background: linear-gradient(to top right, #0062ff, #ff007b);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
		}
	}
`;

export default ProjectsHeaderStyle;
