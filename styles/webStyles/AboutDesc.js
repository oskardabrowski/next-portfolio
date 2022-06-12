import styled from "styled-components";

const AboutDesc = styled.div`
	width: 100%;
	min-height: 100vh;
	background-color: rgba(255, 255, 255, 0.5);
	display: flex;
	flex-direction: column;

	.AboutHead {
		width: 100%;
		position: relative;
		&-title {
			margin-top: 0.5rem;
			width: 60rem;
			height: 6.5rem;
			border-radius: 25rem;
			background: linear-gradient(to right, #f400ff, #6500ff);
			position: relative;
			left: -5rem;
			display: flex;
			align-items: center;
			justify-content: end;
			font-family: "Arimo";
			font-size: 2rem;
			color: white;
			font-weight: bold;
			box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.75);
			& > span {
				margin-right: 3rem;
				font-size: 2.5rem;
				background: linear-gradient(to top right, #0062ff, #ff007b);
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
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
						&:nth-child(1) {
							margin-right: 4rem;
						}
						&:nth-child(5) {
							margin-right: 4rem;
						}
						&:nth-child(9) {
							margin-right: 4rem;
						}
					}
				}
			}
		}
	}

	.AboutDescription {
		width: 100%;
		background-color: red;
		min-height: 32rem;
		/* min-height: 80%; */
	}
	.AboutReadMore {
		display: flex;
		overflow-x: hidden;
		&-left {
			width: 50%;
		}
		&-right {
			width: 50%;
			display: flex;
			align-items: center;
			justify-content: end;

			&-el {
				margin-top: 0.5rem;
				width: 35rem;
				position: relative;
				right: -5rem;
				height: 4.5rem;
				border-radius: 25rem;
				background-color: blue;
			}
		}
	}
`;

export default AboutDesc;
