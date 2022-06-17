import styled from "styled-components";

const ContactOptions = styled.div`
	margin-top: 5rem;
	.ContactHeader {
		width: 100%;
		&-title {
			width: 50rem;
			height: 7.5rem;
			background-color: red;
			border-radius: 25rem;
			position: relative;
			left: -5rem;
			background: linear-gradient(to right, #f400ff, #6500ff);
			box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
			display: flex;
			align-items: center;
			justify-content: end;
			font-size: 2rem;
			font-weight: bold;
			color: white;
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
			width: 60rem;
			height: 5rem;
			background-color: red;
			border-radius: 25rem;
			position: relative;
			left: -5rem;
			background: linear-gradient(to right, #00b1ff, #ffd500);
			box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
			display: flex;
			align-items: center;
			justify-content: end;

			& > span {
				margin-right: 3.5rem;
				border-radius: 25rem;
				width: 0.5rem;
				height: 0.5rem;
				background-color: white;
				&:first-child {
					width: 10rem;
					height: 0.35rem;
				}
			}
		}
		&-el2 {
			width: 45rem;
			height: 5rem;
			background-color: red;
			border-radius: 25rem;
			position: relative;
			left: -5rem;
			background: linear-gradient(to right, #9500ff, #000ffe);
			box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
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

	.ContactOptions {
		display: flex;
		margin-top: 1.5rem;
		overflow: hidden;
		&-form {
			width: 66%;
			display: flex;
			flex-direction: column;
			&-header {
				font-size: 2rem;
				color: white;
				width: 100%;
				padding-left: 50%;
				font-weight: bold;

				& > span {
					background: linear-gradient(to top right, #0062ff, #ff007b);
					-webkit-background-clip: text;
					background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			}

			& > span {
				width: 100%;
				background: linear-gradient(to right, #00ff51, #ffc100);
				margin-top: 0.5rem;
				width: 60rem;
				display: flex;
				align-items: center;
				justify-content: end;
				border-radius: 25rem;
				overflow: hidden;
				position: relative;
				left: -5rem;
				&:nth-child(4) {
					border-radius: 25px;
				}
				&:last-child {
					left: -18rem;
					background: linear-gradient(30deg, #000ffe, #ff0045);
				}
				& > input {
					width: 60%;
					padding: 1rem;
					border-radius: 25rem;
					font-size: 1.2rem;
					border: none;
					background-color: #009bff;
					font-family: "Arimo";
					color: white;
					font-weight: bold;
					&::placeholder {
						color: rgba(255, 255, 255, 0.5);
					}
				}
				& > textarea {
					width: 60%;
					resize: none;
					padding: 1rem;
					border-radius: 25px;
					font-size: 1.2rem;
					border: none;
					background-color: #009bff;
					font-family: "Arimo";
					color: white;
					font-weight: bold;
					&::placeholder {
						color: rgba(255, 255, 255, 0.5);
					}
				}

				& > button {
					padding: 0.75rem 2.5rem;
					border-radius: 25rem;
					background: #ff0045;
					border: none;
					color: white;
					font-weight: bold;
					font-family: 1.2rem;
					font-family: "Arimo";

					&:hover {
						cursor: pointer;
						color: black;
					}
				}
			}
		}
		&-other {
			width: 34%;
			display: flex;
			flex-direction: column;
			padding-top: 5.75rem;

			& > span {
				background-color: red;
				margin-top: 1rem;
				padding: 0.75rem;
				font-size: 1.2rem;
				font-family: "Arimo";
				font-weight: bold;
				color: white;
				border-radius: 25rem;
				width: 35rem;
				background: linear-gradient(to right, #00b1ff, #ffd500);
				position: relative;
			}
		}
	}
`;

export default ContactOptions;
