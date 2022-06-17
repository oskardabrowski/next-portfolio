import styled from "styled-components";

const FooterStyle = styled.footer`
	width: 100%;
	position: relative;
	.FooterCopy {
		position: absolute;
		bottom: 5%;
		left: 50%;
		font-family: "Arimo";
		font-size: 2.25rem;
		font-weight: bold;
		color: white;
		transform: translate(-50%, -50%);
	}
`;

export default FooterStyle;
