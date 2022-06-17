import styled from "styled-components";

const SkillsStyles = styled.div`
	width: 100%;
	height: auto;

	.SkillsHead {
		width: 100%;
		position: relative;
		&-title {
			width: 60rem;
			height: 7.5rem;
			position: relative;
			left: -70rem;
			border-radius: 25rem;
			background-color: red;
			display: flex;
			align-items: center;
			justify-content: end;
			font-family: "Arimo";
			font-size: 2rem;
			color: white;
			background: linear-gradient(to right, #f400ff, #6500ff);
			box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
			transition: all 1s ease-in-out;

			& > span {
				font-size: 2.5rem;
				margin-right: 3.5rem;
				background: linear-gradient(to top right, #0062ff, #ff007b);
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
			}
		}
		&-el1 {
			position: absolute;
			width: 40rem;
			height: 5rem;
			background: linear-gradient(to right, #00b1ff, #ffd500);
			border-radius: 25rem;
			top: 5rem;
			left: -60rem;
			z-index: 100;
			display: flex;
			align-items: center;
			justify-content: right;
			box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
			transition: all 1s ease-in-out;
			& > span {
				margin-right: 1.5rem;
				&:nth-child(1) {
					width: 1.75rem;
					height: 1.75rem;
					background-color: white;
					clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
					transform: rotate(90deg);
				}
				&:nth-child(2) {
					width: 1.75rem;
					height: 1.75rem;
					background-color: white;
					clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
					transform: rotate(90deg);
				}
				&:nth-child(3) {
					width: 2rem;
					height: 2rem;
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					transform: rotate(45deg);
					&:after {
						position: absolute;
						content: "";
						width: 100%;
						height: 0.3rem;
						border-radius: 25rem;
						background-color: white;
						transform: rotate(90deg);
					}
					&:before {
						position: absolute;
						content: "";
						width: 100%;
						height: 0.3rem;
						border-radius: 25rem;
						background-color: white;
					}
				}
			}
		}
		&-el2 {
			margin-top: 2rem;
			width: 40rem;
			height: 5rem;
			position: relative;
			left: -60rem;
			border-radius: 25rem;
			background: linear-gradient(to top right, #9500ff, #000ffe);
			display: flex;
			align-items: center;
			justify-content: right;
			box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
			transition: all 1s ease-in-out;
			& > span {
				margin-right: 1.5rem;
				&:nth-child(1) {
					width: 7.5rem;
					height: 0.35rem;
					background-color: white;
					border-radius: 25rem;
				}
				&:nth-child(2) {
					width: 7.5rem;
					height: 0.35rem;
					background-color: white;
					border-radius: 25rem;
				}
				&:nth-child(3) {
					width: 2rem;
					height: 2rem;
					position: relative;
					display: flex;
					align-items: center;
					justify-content: center;
					transform: rotate(45deg);
					&:after {
						position: absolute;
						content: "";
						width: 100%;
						height: 0.3rem;
						border-radius: 25rem;
						background-color: white;
						transform: rotate(90deg);
					}
					&:before {
						position: absolute;
						content: "";
						width: 100%;
						height: 0.3rem;
						border-radius: 25rem;
						background-color: white;
					}
				}
			}
		}
	}

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
			& > span {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				margin-top: 0.5rem;
				width: 60%;
				overflow-wrap: break-word;
				text-align: center;
			}

			&-inprogress {
				position: absolute;
				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.75);
				display: flex;
				align-items: center;
				justify-content: center;
			}
			& > .ico {
				font-size: 7rem;
			}
		}
	}

	.TitleView {
		left: -5rem;
	}
	.El1View {
		left: -10rem;
	}
	.El2View {
		left: -5rem;
	}
	.Scale1 {
		transform: scale(1);
	}
`;

export default SkillsStyles;
