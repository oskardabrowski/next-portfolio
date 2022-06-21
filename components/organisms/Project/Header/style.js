import styled from "styled-components";

const ProjectHeaderStyle = styled.header`
	width: 100%;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	& > img {
		position: absolute;
		top: 0rem;
		left: 0rem;
		width: 100%;
	}
	& > h1 {
		position: absolute;
		color: white;
		font-size: 2.5rem;
	}
`;

export default ProjectHeaderStyle;
