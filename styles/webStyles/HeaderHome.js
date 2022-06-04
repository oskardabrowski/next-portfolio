import styled from "styled-components";

const HomeHeaderStyle = styled.header`
	/* background-color: white; */
	width: 100%;
	height: 130vh;

	.AbstractPicture {
		width: 100%;
		height: 130vh;
		overflow: hidden;
		&-layer1 {
			top: 0;
			left: 0;
			width: 100%;
			height: 130vh;
			overflow: hidden;
			position: relative;
			z-index: 5;
			&-obj1 {
				position: absolute;
				top: -3;
				left: -8rem;
				width: 18rem;
				height: 7.5rem;
				background: linear-gradient(to right, #3f00ff, #ff00ca);
				transform: rotate(-45deg);
				z-index: 100;
			}
			&-obj2 {
				position: absolute;
				top: 2rem;
				left: -10rem;
				width: 35rem;
				height: 10rem;
				background: linear-gradient(to right, #000fff, #ff0045);
				transform: rotate(-45deg);
				z-index: 110;
				box-shadow: 2px -5px 10px rgba(0, 0, 0, 0.8);
			}
			&-obj3 {
				position: absolute;
				top: 10rem;
				left: -13rem;
				width: 50rem;
				height: 9rem;
				background: linear-gradient(to right, #000b3d, #000b3d, #9500ff);
				transform: rotate(-45deg);
				z-index: 100;
				/* box-shadow: 2px -5px 10px rgba(0, 0, 0, 0.8); */
			}
			&-obj4 {
				position: absolute;
				top: 20rem;
				left: -29rem;
				width: 80rem;
				height: 3rem;
				background: linear-gradient(to right, #000b3d, #9500ff);
				transform: rotate(-45deg);
				z-index: 50;
				/* box-shadow: 2px -5px 10px rgba(0, 0, 0, 0.8); */
			}
			&-obj5 {
				position: absolute;
				top: 20rem;
				left: -25rem;
				width: 80rem;
				height: 5rem;
				background: linear-gradient(to right, #000b3d, #000b3d, #0028dc);
				transform: rotate(-45deg);
				z-index: 25;
				/* box-shadow: 2px -5px 10px rgba(0, 0, 0, 0.8); */
			}
			&-obj6 {
				position: absolute;
				top: 15rem;
				left: -23rem;
				width: 100rem;
				height: 15rem;
				background: linear-gradient(
					to right bottom,
					#000b3d,
					#000b3d,
					#000b3d,
					#0028dc
				);
				transform: rotate(-45deg);
				z-index: 10;
				/* box-shadow: 2px -5px 10px rgba(0, 0, 0, 0.8); */
			}
			&-obj7 {
				position: absolute;
				top: 45rem;
				left: -45rem;
				width: 80rem;
				height: 10rem;
				background: linear-gradient(
					to right bottom,
					#000b3d,
					#000b3d,
					#000b3d,
					#00198d
				);
				transform: rotate(-45deg) skewX(50deg);
				z-index: 20;
				/* box-shadow: 2px -5px 10px rgba(0, 0, 0, 0.8); */
			}
			&-obj8 {
				position: absolute;
				top: 50rem;
				left: -35rem;
				width: 80rem;
				height: 8rem;
				background: linear-gradient(
					to right bottom,
					#000b3d,
					#000b3d,
					#000b3d,
					#00198d
				);
				transform: rotate(-45deg) skewX(50deg);
				z-index: 15;
				/* box-shadow: 2px -5px 10px rgba(0, 0, 0, 0.8); */
			}
		}
		&-layer2 {
			width: 100%;
			height: 130vh;
			overflow: hidden;
			position: absolute;
			z-index: 200;
			top: 0rem;
			left: 0rem;
			&-obj1 {
				position: absolute;
				top: -2rem;
				left: -2rem;
				width: 5rem;
				height: 5rem;
				border-radius: 50%;
				z-index: 200;
				background: linear-gradient(to right top, #2200ff, #02ff00);
			}
			&-obj2 {
				position: absolute;
				top: 1rem;
				left: -0.5rem;
				width: 2rem;
				height: 12rem;
				border-radius: 25px;
				z-index: 210;
				background: linear-gradient(to top, #ffac00, #006a8e);
				transform: rotate(45deg);
			}
			&-obj3 {
				position: absolute;
				top: -4rem;
				left: 10rem;
				width: 4rem;
				height: 15rem;
				border-radius: 50px;
				z-index: 210;
				background: linear-gradient(to top, #000ffe, #9500ff);
				transform: rotate(45deg);
				box-shadow: -2px 2px 5px black;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-evenly;
				& > span {
					width: 1.25rem;
					height: 1.25rem;
					/* border-radius: 50%; */
					background-color: white;
					&:nth-child(1) {
						width: 0.5rem;
						height: 4rem;
						border-radius: 15px;
					}
					&:nth-child(2) {
						width: 0.5rem;
						height: 4rem;
						border-radius: 15px;
					}
					&:last-child {
						background: transparent;
						width: 2rem;
						height: 2rem;
						position: relative;
						display: flex;
						align-items: center;
						justify-content: center;
						transform: rotate(45deg);
						& > div {
							position: absolute;
							width: 100%;
							height: 0.35rem;
							background-color: white;
							z-index: 220;
							border-radius: 25px;

							&:first-child {
								transform: rotate(90deg);
							}
						}
					}
				}
			}
			&-obj4 {
				position: absolute;
				top: 10rem;
				left: 1rem;
				width: 4rem;
				height: 4rem;
				border-radius: 50%;
				z-index: 210;
				background: linear-gradient(to top right, #0026ff, #9a00ff);
				box-shadow: -2px -1px 5px black;
				display: flex;
				align-items: center;
				justify-content: center;
				& > span {
					width: 1.25rem;
					height: 1.25rem;
					border-radius: 50%;
					background-color: white;
				}
			}
			&-obj5 {
				position: absolute;
				top: 7rem;
				left: 15rem;
				width: 0.75rem;
				height: 0.75rem;
				border-radius: 50%;
				z-index: 210;
				background: white;
			}
			&-obj6 {
				position: absolute;
				top: 5rem;
				left: 17rem;
				width: 0.75rem;
				height: 0.75rem;
				border-radius: 50%;
				z-index: 210;
				background: white;
			}
			&-obj7 {
				position: absolute;
				top: 3rem;
				left: 19rem;
				width: 0.75rem;
				height: 0.75rem;
				border-radius: 50%;
				z-index: 210;
				background: white;
			}
			&-obj8 {
				position: absolute;
				top: 14rem;
				left: 6rem;
				width: 1.25rem;
				height: 8rem;
				border-radius: 50px;
				z-index: 210;
				transform: rotate(45deg);
				background: linear-gradient(to top, #008fff, #ff0074);
			}
			&-obj9 {
				position: absolute;
				top: 22rem;
				left: 1rem;
				width: 1.25rem;
				height: 1.25rem;
				border-radius: 50px;
				z-index: 210;
				background: linear-gradient(to top right, #0026ff, #9a00ff);
			}
			&-obj10 {
				position: absolute;
				top: 22rem;
				left: 3rem;
				width: 1.25rem;
				height: 8rem;
				border-radius: 50px;
				z-index: 210;
				transform: rotate(45deg);
				background: linear-gradient(to top, #9500ff, #000b3d);
			}
			&-obj11 {
				position: relative;
				top: 1rem;
				left: 27rem;
				width: 2rem;
				height: 2rem;
				z-index: 210;
				background: transparent;
				display: flex;
				align-items: center;
				justify-content: center;

				& > span {
					position: absolute;
					width: 100%;
					height: 0.35rem;
					background-color: white;
					z-index: 220;
					border-radius: 25px;

					&:first-child {
						transform: rotate(90deg);
					}
				}
			}
			&-obj11_5 {
				position: relative;
				top: 1rem;
				left: 1rem;
				width: 2rem;
				height: 2rem;
				z-index: 210;
				background: transparent;
				display: flex;
				align-items: center;
				justify-content: center;

				& > span {
					position: absolute;
					width: 100%;
					height: 0.35rem;
					background-color: white;
					z-index: 220;
					border-radius: 25px;

					&:first-child {
						transform: rotate(90deg);
					}
				}
			}
			&-obj12 {
				position: relative;
				top: -1rem;
				left: 25.5rem;
				width: 1.5rem;
				height: 1.5rem;
				z-index: 210;
				background: white;
				display: flex;
				align-items: center;
				justify-content: center;
				transform: rotate(45deg);
				clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
			}
			&-obj13 {
				position: relative;
				top: -0.5rem;
				left: 23.5rem;
				width: 1.5rem;
				height: 1.5rem;
				z-index: 210;
				background: white;
				display: flex;
				align-items: center;
				justify-content: center;
				transform: rotate(45deg);
				clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
			}
			&-obj14 {
				position: relative;
				top: 6rem;
				left: 14rem;
				width: 4rem;
				height: 4rem;
				z-index: 210;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				background: linear-gradient(to top right, #0072ff, #dc00ff);

				& > span {
					position: absolute;
					width: 1.25rem;
					height: 1.25rem;
					background-color: white;
					z-index: 220;
					border-radius: 25px;
				}
			}
			&-obj15 {
				position: relative;
				top: 5.5rem;
				left: 0rem;
				width: 6rem;
				height: 35rem;
				z-index: 210;
				display: flex;
				align-items: center;
				justify-content: start;
				flex-direction: column;
				border-radius: 75px;
				transform: rotate(45deg);
				background: linear-gradient(to top, #00c9b2, #00c9b2, #ffa900);
				& > span {
					width: 2rem;
					height: 2rem;
					background-color: white;
					z-index: 220;
					margin: 0.5rem 0rem;
					clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
					&:first-child {
						margin-top: 2.5rem;
					}
				}
			}
			&-obj16 {
				position: absolute;
				top: -17.5rem;
				left: 40rem;
				width: 3rem;
				height: 35rem;
				z-index: 210;
				display: flex;
				align-items: center;
				justify-content: end;
				flex-direction: column;
				border-radius: 75px;
				transform: rotate(45deg);
				background: linear-gradient(to top, #00ffec, #000b3d, #000b3d);
				& > span {
					width: 1.5rem;
					height: 1.5rem;
					background-color: white;
					z-index: 220;
					margin: 0.75rem 0rem;
					border-radius: 50%;
				}
			}
			&-obj17 {
				position: absolute;
				top: -20rem;
				left: 52rem;
				width: 1rem;
				height: 35rem;
				z-index: 210;
				display: flex;
				align-items: center;
				justify-content: end;
				flex-direction: column;
				border-radius: 75px;
				transform: rotate(45deg);
				background: linear-gradient(to top, #ff00e9, #000b3d, #000b3d, #000b3d);
			}
			&-obj18 {
				position: absolute;
				top: -12rem;
				left: 42rem;
				width: 1.5rem;
				height: 35rem;
				z-index: 210;
				display: flex;
				align-items: center;
				justify-content: end;
				flex-direction: column;
				border-radius: 75px;
				transform: rotate(45deg);
				background: linear-gradient(to top, #5400ff, #000b3d, #000b3d, #000b3d);
			}
			&-obj19 {
				position: absolute;
				top: 5rem;
				left: 25rem;
				width: 1.5rem;
				height: 35rem;
				z-index: 210;
				display: flex;
				align-items: center;
				justify-content: end;
				flex-direction: column;
				border-radius: 75px;
				transform: rotate(45deg);
				background: linear-gradient(
					to top,
					#009bff,
					transparent,
					transparent,
					transparent
				);
			}
			&-obj20 {
				position: absolute;
				top: 30rem;
				left: 5rem;
				width: 0.75rem;
				height: 20rem;
				z-index: 210;
				display: flex;
				align-items: center;
				justify-content: end;
				flex-direction: column;
				border-radius: 75px;
				transform: rotate(225deg);
				background: linear-gradient(to top, #9500ff, transparent, transparent);
			}
			&-obj21 {
				position: absolute;
				top: 5rem;
				left: 40rem;
				width: 1.5rem;
				height: 1.5rem;
				z-index: 210;
				display: flex;
				align-items: center;
				justify-content: end;
				flex-direction: column;
				border-radius: 75px;
				background: linear-gradient(to top right, #00ff18, #ffff00);
			}
			&-obj22 {
				position: absolute;
				top: 30rem;
				left: 12rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
			}
			&-obj23 {
				position: absolute;
				top: 29rem;
				left: 13rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
			}
			&-obj24 {
				position: absolute;
				top: 28rem;
				left: 14rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
			}
			&-obj25 {
				position: absolute;
				top: 26rem;
				left: 16rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
			}
			&-obj26 {
				position: absolute;
				top: 25rem;
				left: 17rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
			}
			&-obj27 {
				position: absolute;
				top: 24rem;
				left: 18rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
			}
			&-obj28 {
				position: absolute;
				top: 23rem;
				left: 19rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
			}
			&-obj29 {
				position: absolute;
				top: 21rem;
				left: 21rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
			}
			&-obj30 {
				position: absolute;
				top: 20rem;
				left: 22rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
			}
			&-obj31 {
				position: absolute;
				top: 19rem;
				left: 23rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
			}
			&-obj32 {
				position: absolute;
				top: 18rem;
				left: 24rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
			}
			&-obj33 {
				position: absolute;
				top: 16rem;
				left: 16rem;
				width: 7rem;
				height: 0.5rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				transform: rotate(-45deg);
			}
			&-obj34 {
				position: absolute;
				top: 12rem;
				left: 23rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				transform: rotate(-45deg);
			}
			&-obj35 {
				position: absolute;
				top: 11rem;
				left: 24rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				transform: rotate(-45deg);
			}
			&-obj36 {
				position: absolute;
				top: 10rem;
				left: 25rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				transform: rotate(-45deg);
			}
		}
		&-layer3 {
			width: 100%;
			height: 100vh;
			overflow: hidden;
			position: absolute;
			z-index: 300;
			top: 0rem;
			left: 0rem;
			display: flex;
			align-items: center;
			justify-content: end;

			&-hello {
				min-width: 10rem;
				min-height: 5rem;
				& > h1 {
					font-size: 3rem;
					color: white;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: stretch;
					& > div {
						&:first-child {
							font-size: 7rem;
							padding-right: 20rem;
						}
						&:nth-child(2) {
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 3.5rem;
							padding-right: 5rem;
						}
						&:nth-child(3) {
							display: flex;
							align-items: center;
							justify-content: end;
							font-size: 2.5rem;
							padding-right: 5rem;
							& > span {
								padding-right: 0.75rem;
								font-size: 2.65rem;
							}
						}
						& > span {
							background: linear-gradient(to top right, #0062ff, #ff007b);
							-webkit-background-clip: text;
							background-clip: text;
							-webkit-text-fill-color: transparent;
							font-family: "Arimo";
							font-weight: 1500;
						}
					}
				}
			}
		}
	}
`;

export default HomeHeaderStyle;
