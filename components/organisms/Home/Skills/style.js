import styled from "styled-components";

const SkillsStyles = styled.div`
	width: 100%;
	height: auto;

	.SkillsBtns {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		align-content: center;
		flex-wrap: wrap;
		margin-top: 2rem;
		&-item {
			margin: 1.5rem;
			width: 15rem;
			height: 15rem;
			background-color: red;
			border-radius: 100rem;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			color: white;
			font-size: 1.5rem;
			position: relative;
			overflow: hidden;
			transform: scale(0);
			transition: all 0.5s ease-in-out;
			@media (max-width: 62.5em) {
				margin: 1rem;
				width: 12rem;
				height: 12rem;
			}
			@media (max-width: 37.5em) {
				margin: 0.5rem;
				width: 6rem;
				height: 6rem;
			}
			& > span {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				margin-top: 0.5rem;
				width: 60%;
				overflow-wrap: break-word;
				text-align: center;
				@media (max-width: 37.5em) {
					font-size: 0.75rem;
					margin-top: 0rem;
				}
			}

			&-inprogress {
				position: absolute;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.75);
				display: flex;
				align-items: center;
				justify-content: center;
				@media (max-width: 37.5em) {
					font-size: 0.75rem;
				}
			}
			& > .ico {
				font-size: 7rem;
				@media (max-width: 62.5em) {
					font-size: 5rem;
				}
				@media (max-width: 37.5em) {
					font-size: 3rem;
				}
			}
		}
	}

	.Scale1 {
		transform: scale(1);
	}
`;

export default SkillsStyles;
