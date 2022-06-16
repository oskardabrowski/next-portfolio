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
`;

export default ContactOptions;
