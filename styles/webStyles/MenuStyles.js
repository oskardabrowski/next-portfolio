import styled from "styled-components";

const MenuStyles = styled.nav`
	position: fixed;
	top: 0;
	right: 0;
	background: linear-gradient(30deg, #0026ff, #9a00ff);
	z-index: 10000000000;
	padding: 0.75rem;
	border-radius: 0px 0px 0px 25px;

	.Buttons {
		display: flex;
		flex-direction: row-reverse;
		align-items: center;

		& > div {
			&:not(:first-child) {
				margin-right: 1rem;
			}
		}

		&-menu {
			margin-right: 1rem;
			display: flex;
			align-items: center;
			justify-content: center;
			& > button {
				border: none;
				background: none;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
		&-github {
			font-size: 2rem;
			color: white;
			margin-right: 1rem;
			text-decoration: none;
			&:hover {
				cursor: pointer;
			}
		}
		&-lang {
			height: 100%;
			display: flex;
			align-items: center;
			position: relative;
			align-items: center;

			&-current {
				width: max-content;
				height: 2.5rem;
				border: none;
				background: black;
				border-radius: 25px 25px 0px 25px;
				color: white;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				& > span {
					margin: 0.5rem;
				}

				&:hover {
					cursor: pointer;
				}

				&-flag {
					border-radius: 25rem;
					overflow: hidden;
					background-color: red;
					width: 1.75rem;
					height: 1.75rem;
					display: flex;
					align-items: center;
					justify-content: center;
					& > img {
						width: 1.75rem;
					}
				}

				&-open {
					font-size: 1rem;
					display: flex;
					align-items: center;
					position: absolute;
					bottom: -0.15rem;
					right: -0.15rem;
				}

				&-options {
					position: absolute;
					top: 4rem;
					width: 5rem;
					height: auto;
					background-color: black;
					border-radius: 15px;
					&-option {
						width: max-content;
						height: 2.5rem;
						display: flex;
						align-items: center;
						margin-left: 0.5rem;
						border: none;
						background: none;
						color: white;
						border-radius: 25rem;
						& > span {
							margin-left: 0.5rem;
						}

						&:hover {
							cursor: pointer;
						}
					}
				}
			}
		}
	}

	.CurrentLang {
		background: #9a00ff;
	}
`;

export default MenuStyles;
