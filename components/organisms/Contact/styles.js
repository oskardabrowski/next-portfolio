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
			left: -50rem;
			background: linear-gradient(to right, #f400ff, #6500ff);
			box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
			display: flex;
			align-items: center;
			justify-content: end;
			font-size: 2rem;
			font-weight: bold;
			color: white;
			transition: all 1s ease-in-out;

			@media (max-width: 62.5em) {
				width: 40rem;
				height: 5rem;
				font-size: 1.5rem;
			}
			@media (max-width: 50em) {
				width: 30rem;
			}
			@media (max-width: 37.5em) {
				width: 30rem;
				height: 3rem;
				font-size: 1.2rem;
			}

			& > span {
				font-size: 2.5rem;
				margin-right: 3.5rem;
				background: linear-gradient(to top right, #0062ff, #ff007b);
				-webkit-background-clip: text;
				background-clip: text;
				-webkit-text-fill-color: transparent;
				@media (max-width: 62.5em) {
					font-size: 1.5rem;
				}
			}
		}
		&-el1 {
			width: 60rem;
			height: 5rem;
			background-color: red;
			border-radius: 25rem;
			position: relative;
			left: -65rem;
			background: linear-gradient(to right, #00b1ff, #ffd500);
			box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
			display: flex;
			align-items: center;
			justify-content: end;
			transition: all 1s ease-in-out;

			@media (max-width: 62.5em) {
				width: 45rem;
				height: 3rem;
			}
			@media (max-width: 50em) {
				width: 35rem;
			}
			@media (max-width: 37.5em) {
				width: 30rem;
				height: 2rem;
			}

			& > span {
				margin-right: 3.5rem;
				border-radius: 25rem;
				width: 0.5rem;
				height: 0.5rem;
				background-color: white;
				@media (max-width: 37.5em) {
					margin-right: 1.5rem;
				}

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
			left: -50rem;
			background: linear-gradient(to right, #9500ff, #000ffe);
			box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
			display: flex;
			flex-direction: row-reverse;
			align-items: center;
			justify-content: end;
			transition: all 1s ease-in-out;
			@media (max-width: 62.5em) {
				width: 35rem;
				height: 2.5rem;
			}
			@media (max-width: 50em) {
				width: 25rem;
			}
			& > span {
				width: 0.75rem;
				height: 0.75rem;
				background-color: white;
				border-radius: 15rem;
				margin-right: 2rem;
				@media (max-width: 62.5em) {
					width: 0.5rem;
					height: 0.5rem;
					margin-right: 1rem;
				}
				@media (max-width: 37.5em) {
					margin-right: 0.5rem;
				}
				&:nth-child(1) {
					margin-right: 4rem;
					@media (max-width: 37.5em) {
						margin-right: 1rem;
					}
				}
				&:nth-child(5) {
					margin-right: 4rem;
					@media (max-width: 37.5em) {
						margin-right: 1rem;
					}
				}
				&:nth-child(9) {
					margin-right: 4rem;
					@media (max-width: 37.5em) {
						margin-right: 1rem;
					}
				}
			}
		}
	}

	.TitleVisible {
		left: -5rem;
		@media (max-width: 37.5em) {
			left: -12.5rem;
		}
	}
	.El1Visible {
		left: -5rem;
		@media (max-width: 37.5em) {
			left: -10rem;
		}
	}
	.El2Visible {
		left: -5rem;
		@media (max-width: 37.5em) {
			left: -10rem;
		}
	}

	// 1450

	.ContactOptions {
		display: flex;
		margin-top: 1.5rem;
		overflow: hidden;
		@media (max-width: 62.5em) {
			flex-direction: column;
		}
		&-form {
			width: 66%;
			display: flex;
			flex-direction: column;
			@media (max-width: 62.5em) {
				width: 100%;
			}
			&-header {
				font-size: 2rem;
				color: white;
				width: 100%;
				padding-left: 50%;
				font-weight: bold;
				position: relative;
				left: -50rem;
				transition: all 1s ease-in-out;
				@media (max-width: 50em) {
					padding-left: 0%;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				& > span {
					background: linear-gradient(to top right, #0062ff, #ff007b);
					-webkit-background-clip: text;
					background-clip: text;
					-webkit-text-fill-color: transparent;
				}
			}

			&-button {
				left: -70rem;
				background: linear-gradient(30deg, #000ffe, #ff0045);
				transition: all 1s ease-in-out;
				position: relative;
				display: flex;
				align-items: center;
				justify-content: end;
				border-radius: 25rem;
				width: 60rem;
				margin-top: 2rem;
				@media (max-width: 50em) {
					width: 100%;
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
					@media (max-width: 50em) {
						width: 100%;
					}

					&:hover {
						cursor: pointer;
						color: black;
					}
				}
			}

			&-span {
				background: linear-gradient(to right, #00ff51, #ffc100);
				margin-top: 0.5rem;
				width: 60rem;
				display: flex;
				align-items: center;
				justify-content: end;
				border-radius: 25rem;
				overflow: hidden;
				position: relative;
				left: -70rem;
				transition: all 1s ease-in-out;
				@media (max-width: 50em) {
					width: 100%;
				}
				&:nth-child(4) {
					border-radius: 25px;
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
					@media (max-width: 50em) {
						width: 100%;
					}
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
					@media (max-width: 50em) {
						width: 100%;
					}
					&::placeholder {
						color: rgba(255, 255, 255, 0.5);
					}
				}
			}
		}
		&-other {
			width: 34%;
			display: flex;
			flex-direction: column;
			padding-top: 5.75rem;
			@media (max-width: 62.5em) {
				width: 100%;
			}
			@media (max-width: 62.5em) {
				padding-top: 1rem;
			}

			&-el {
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
				right: -50rem;
				transition: all 1s ease-in-out;

				@media (min-width: 100em) {
					width: 50rem;
					right: -80rem;
				}
				@media (max-width: 62.5em) {
					display: flex;
					align-items: center;
					justify-content: right;
				}
				@media (max-width: 50em) {
					background: linear-gradient(to right, #ffd500, #00b1ff);
				}
			}
		}
	}

	.HeaderVisible {
		left: 0rem;
	}
	.SpanLeftVisible {
		left: -5rem;
		@media (max-width: 90.625em) {
			left: -10rem;
		}
		@media (max-width: 75em) {
			left: -15rem;
		}
		@media (max-width: 62.5em) {
			left: -15rem;
		}
		@media (max-width: 50em) {
			left: 0rem;
		}
	}
	.LastSpanLeftVisible {
		left: -18rem;
		@media (max-width: 90.625em) {
			left: -23rem;
		}
		@media (max-width: 75em) {
			left: -28rem;
		}
		@media (max-width: 62.5em) {
			left: -28rem;
		}
		@media (max-width: 50em) {
			left: 0rem;
		}
	}
	.OtherVisible {
		right: 0rem;
		@media (max-width: 90.625em) {
			right: -5rem;
		}
		@media (max-width: 62.5em) {
			left: -5rem;
		}
		@media (max-width: 50em) {
			left: -17.5rem;
		}
	}
`;

export default ContactOptions;
