import styled from "styled-components";

const StylesAboutContent = styled.div`
	width: 100%;

	.Photo {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 4rem;
		&-container {
			padding: 1.5rem;
			border-radius: 500rem;
			overflow: hidden;
			background: linear-gradient(to right bottom, #0036ff, #00ffa5);

			& > img {
				border-radius: 500rem;
				overflow: hidden;
				width: 30rem;
			}
		}
	}

	.FirstDescription {
		margin-top: 5rem;
		& > p {
			padding: 0rem 2rem;
			color: white;
			font-size: 1.5rem;
			text-align: justify;
			font-family: "Arimo";
			text-indent: 50px;
			line-height: 1.4;
		}
	}
`;

export default StylesAboutContent;
