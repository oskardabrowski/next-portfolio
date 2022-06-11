import styled from "styled-components";

const HomeHeaderStyle = styled.header`
	/* background-color: white; */
	width: 100%;
	height: 130vh;

	@keyframes expandBlock {
		0% {
			width: 0%;
		}
		100% {
			width: 100%;
		}
	}
	@keyframes showBlock {
		0% {
			opacity: 0%;
		}
		100% {
			opacity: 100%;
		}
	}

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
				top: -6rem;
				left: -7rem;
				width: 18rem;
				height: 18rem;
				transform: rotate(-45deg);
				z-index: 100;
				display: flex;
				align-items: center;
				justify-content: left;
				@media (max-width: 75em) {
					top: -6rem;
					left: -7rem;
					width: 14rem;
					height: 14rem;
				}
				@media (max-width: 46.875em) {
					top: -5rem;
					left: -6rem;
					width: 10rem;
					height: 10rem;
				}

				&:before {
					content: "";
					width: 100%;
					height: 7.5rem;
					background: linear-gradient(to right, #3f00ff, #ff00ca);
					animation: expandBlock 1s ease-in-out forwards;
				}
			}
			&-obj2 {
				position: absolute;
				top: -10rem;
				left: -10rem;
				width: 35rem;
				height: 35rem;
				transform: rotate(-45deg);
				z-index: 110;
				display: flex;
				align-items: center;
				justify-content: right;
				@media (max-width: 75em) {
					top: -8rem;
					left: -8rem;
					width: 25rem;
					height: 25rem;
				}
				@media (max-width: 46.875em) {
					top: -6rem;
					left: -6rem;
					width: 20rem;
					height: 20rem;
				}
				&:before {
					content: "";
					width: 100%;
					height: 10rem;
					background: linear-gradient(to right, #000fff, #ff0045);
					box-shadow: 2px -5px 10px rgba(0, 0, 0, 0.8);
					animation: expandBlock 1.2s ease-in-out forwards;
					@media (max-width: 75em) {
						height: 7rem;
					}
				}
			}
			&-obj3 {
				position: absolute;
				top: 10rem;
				left: -13rem;
				width: 50rem;
				height: 9rem;
				transform: rotate(-45deg);
				display: flex;
				align-items: center;
				justify-content: left;
				z-index: 100;
				@media (max-width: 75em) {
					top: 10rem;
					left: -19rem;
					width: 45rem;
					height: 7rem;
				}
				@media (max-width: 46.875em) {
					top: 10rem;
					left: -19rem;
					width: 45rem;
					height: 5rem;
				}
				&:before {
					content: "";
					width: 100%;
					height: 100%;
					background: linear-gradient(to right, #000b3d, #000b3d, #9500ff);
					animation: expandBlock 1.5s ease-in-out forwards;
				}
			}
			&-obj4 {
				position: absolute;
				top: 20rem;
				left: -29rem;
				width: 80rem;
				height: 3rem;
				transform: rotate(-45deg);
				z-index: 50;
				display: flex;
				align-items: center;
				justify-content: right;
				@media (max-width: 75em) {
					top: 20rem;
					left: -38rem;
					width: 80rem;
					height: 2rem;
				}
				@media (max-width: 46.875em) {
					top: 19.5rem;
					left: -40rem;
					width: 80rem;
					height: 1rem;
				}
				&:before {
					content: "";
					width: 100%;
					height: 100%;
					background: linear-gradient(to right, #000b3d, #9500ff);
					animation: expandBlock 0.75s ease-in-out forwards;
				}
			}
			&-obj5 {
				position: absolute;
				top: 20rem;
				left: -25rem;
				width: 80rem;
				height: 5rem;

				transform: rotate(-45deg);
				z-index: 25;
				display: flex;
				align-items: center;
				justify-content: left;
				@media (max-width: 75em) {
					top: 20rem;
					left: -35rem;
					width: 80rem;
					height: 3rem;
				}
				@media (max-width: 46.875em) {
					top: 20rem;
					left: -39rem;
					width: 80rem;
					height: 2rem;
				}
				&:before {
					content: "";
					width: 100%;
					height: 100%;
					background: linear-gradient(to right, #000b3d, #000b3d, #0028dc);
					animation: expandBlock 1s ease-in-out forwards;
				}
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
				animation: showBlock 1s ease-in-out forwards;
				@media (max-width: 75em) {
					top: 15rem;
					left: -35rem;
					width: 100rem;
					height: 12rem;
				}
				@media (max-width: 46.875em) {
					top: 15rem;
					left: -47.5rem;
					width: 100rem;
					height: 12rem;
				}
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
				animation: showBlock 1s ease-in-out forwards;
				@media (max-width: 75em) {
					top: 45rem;
					left: -52rem;
					width: 70rem;
					height: 10rem;
				}
				@media (max-width: 46.875em) {
					display: none;
				}
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
				animation: showBlock 1s ease-in-out forwards;
				@media (max-width: 75em) {
					top: 50rem;
					left: -50rem;
					width: 80rem;
					height: 8rem;
				}
				@media (max-width: 46.875em) {
					display: none;
				}
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

			@keyframes obj1animation {
				0% {
					top: -5rem;
					left: -5rem;
				}
				100% {
					top: -2rem;
					left: -2rem;
				}
			}
			@keyframes obj1animation75em {
				0% {
					top: -5rem;
					left: -5rem;
				}
				100% {
					top: -1.5rem;
					left: -1.5rem;
				}
			}
			&-obj1 {
				position: absolute;
				top: -5rem;
				left: -5rem;
				width: 5rem;
				height: 5rem;
				border-radius: 50%;
				z-index: 200;
				background: linear-gradient(to right top, #2200ff, #02ff00);
				animation: obj1animation 1s ease-in-out 1s forwards;
				@media (max-width: 75em) {
					width: 3rem;
					height: 3rem;
					animation: obj1animation75em 1s ease-in-out 1s forwards;
				}
				@media (max-width: 46.875em) {
					width: 3rem;
					height: 3rem;
					animation: obj1animation75em 1s ease-in-out 1s forwards;
				}
			}
			@keyframes obj2animation {
				0% {
					top: 6rem;
					left: -5.5rem;
				}
				100% {
					top: 1rem;
					left: -0.5rem;
				}
			}
			&-obj2 {
				position: absolute;
				top: 6rem;
				left: -5.5rem;
				width: 2rem;
				height: 12rem;
				border-radius: 25px;
				z-index: 210;
				background: linear-gradient(to top, #ffac00, #006a8e);
				transform: rotate(45deg);
				animation: obj2animation 1s ease-in-out 0.5s forwards;
				@media (max-width: 75em) {
					width: 1.5rem;
					height: 10rem;
				}
				@media (max-width: 46.875em) {
					width: 1rem;
					height: 7rem;
				}
			}
			@keyframes obj3animation {
				0% {
					top: -15rem;
					left: 21rem;
				}
				100% {
					top: -5rem;
					left: 11rem;
				}
			}
			@keyframes obj3animation75em {
				0% {
					top: -15rem;
					left: 21rem;
				}
				100% {
					top: -7rem;
					left: 9rem;
				}
			}
			&-obj3 {
				position: absolute;
				top: -15rem;
				left: 21rem;
				width: 4rem;
				height: 16rem;
				border-radius: 50px;
				z-index: 210;
				background: linear-gradient(to top, #000ffe, #9500ff);
				transform: rotate(45deg);
				box-shadow: -2px 2px 5px black;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-evenly;
				animation: obj3animation 1s ease-in-out 1.5s forwards;
				@media (max-width: 75em) {
					top: -13rem;
					left: 15rem;
					width: 3rem;
					height: 14rem;
					animation: obj3animation75em 1s ease-in-out 1.5s forwards;
				}
				@media (max-width: 46.875em) {
					width: 2rem;
					height: 12rem;
				}
				& > span {
					width: 1.25rem;
					height: 1.25rem;
					background-color: white;
					&:nth-child(1) {
						width: 0.5rem;
						height: 4rem;
						border-radius: 15px;
						@media (max-width: 75em) {
							width: 0.35rem;
							height: 4rem;
						}
						@media (max-width: 46.875em) {
							width: 0.2rem;
							height: 4rem;
						}
					}
					&:nth-child(2) {
						width: 0.5rem;
						height: 4rem;
						border-radius: 15px;
						@media (max-width: 75em) {
							width: 0.35rem;
							height: 4rem;
						}
						@media (max-width: 46.875em) {
							width: 0.2rem;
							height: 4rem;
						}
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
						@media (max-width: 46.875em) {
							width: 1.2rem;
							height: 1.2rem;
						}
						& > div {
							position: absolute;
							width: 100%;
							height: 0.35rem;
							background-color: white;
							z-index: 220;
							border-radius: 25px;
							@media (max-width: 75em) {
								height: 0.3rem;
							}
							@media (max-width: 46.875em) {
								height: 0.2rem;
							}

							&:first-child {
								transform: rotate(90deg);
							}
						}
					}
				}
			}
			@keyframes obj4animation {
				0% {
					top: -6rem;
					left: 18rem;
				}
				100% {
					top: 10rem;
					left: 2rem;
				}
			}
			@keyframes obj4animation75em {
				0% {
					top: -3rem;
					left: 10rem;
				}
				100% {
					top: 7rem;
					left: 1rem;
				}
			}
			@keyframes obj4animation45em {
				0% {
					top: -4rem;
					left: 10rem;
				}
				100% {
					top: 6rem;
					left: 1rem;
				}
			}
			&-obj4 {
				position: absolute;
				top: -6rem;
				left: 18rem;
				width: 4rem;
				height: 4rem;
				border-radius: 50%;
				z-index: 210;
				background: linear-gradient(to top right, #0026ff, #9a00ff);
				box-shadow: -2px -1px 5px black;
				display: flex;
				align-items: center;
				justify-content: center;
				animation: obj4animation 1s ease-in-out 1s forwards;
				@media (max-width: 75em) {
					top: -3rem;
					left: 10rem;
					width: 3rem;
					height: 3rem;
					animation: obj4animation75em 1s ease-in-out 1s forwards;
				}
				@media (max-width: 46.875em) {
					top: -4rem;
					left: 10rem;
					width: 2rem;
					height: 2rem;
					animation: obj4animation45em 1s ease-in-out 1s forwards;
				}
				& > span {
					width: 1.25rem;
					height: 1.25rem;
					border-radius: 50%;
					background-color: white;
					@media (max-width: 75em) {
						width: 1rem;
						height: 1rem;
					}
					@media (max-width: 46.875em) {
						width: 0.75rem;
						height: 0.75rem;
					}
				}
			}
			@keyframes obj5animation {
				0% {
					top: -1rem;
					left: 24rem;
				}
				100% {
					top: 7rem;
					left: 16rem;
				}
			}
			@keyframes obj5animation75em {
				0% {
					top: -5rem;
					left: 20rem;
				}
				100% {
					top: 5rem;
					left: 10rem;
				}
			}
			@keyframes obj5animation45em {
				0% {
					top: -1rem;
					left: 14.5rem;
				}
				100% {
					top: 4rem;
					left: 9.5rem;
				}
			}
			&-obj5 {
				position: absolute;
				top: -1rem;
				left: 24rem;
				width: 0.75rem;
				height: 0.75rem;
				border-radius: 50%;
				z-index: 210;
				background: white;
				animation: obj5animation 1s ease-in-out 1.25s forwards;
				@media (max-width: 75em) {
					top: -5rem;
					left: 20rem;
					width: 0.5rem;
					height: 0.5rem;
					animation: obj5animation75em 1s ease-in-out 1.25s forwards;
				}
				@media (max-width: 46.875em) {
					top: -1rem;
					left: 14.5rem;
					width: 0.5rem;
					height: 0.5rem;
					animation: obj5animation45em 1s ease-in-out 1.25s forwards;
				}
			}
			@keyframes obj6animation {
				0% {
					top: -1rem;
					left: 24rem;
				}
				100% {
					top: 5rem;
					left: 18rem;
				}
			}
			@keyframes obj6animation75em {
				0% {
					top: -5rem;
					left: 20rem;
				}
				100% {
					top: 4rem;
					left: 11rem;
				}
			}
			@keyframes obj6animation45em {
				0% {
					top: -1rem;
					left: 14.5rem;
				}
				100% {
					top: 3rem;
					left: 10.5rem;
				}
			}
			&-obj6 {
				position: absolute;
				top: -1rem;
				left: 24rem;
				width: 0.75rem;
				height: 0.75rem;
				border-radius: 50%;
				z-index: 210;
				background: white;
				animation: obj6animation 1s ease-in-out 1.5s forwards;
				@media (max-width: 75em) {
					top: -2rem;
					left: 17rem;
					width: 0.5rem;
					height: 0.5rem;
					animation: obj6animation75em 1s ease-in-out 1.5s forwards;
				}
				@media (max-width: 46.875em) {
					top: -1rem;
					left: 14.5rem;
					width: 0.5rem;
					height: 0.5rem;
					animation: obj6animation45em 1s ease-in-out 1.5s forwards;
				}
			}
			@keyframes obj7animation {
				0% {
					top: -1rem;
					left: 24rem;
				}
				100% {
					top: 3rem;
					left: 20rem;
				}
			}
			@keyframes obj7animation75em {
				0% {
					top: -5rem;
					left: 20rem;
				}
				100% {
					top: 3rem;
					left: 12rem;
				}
			}
			@keyframes obj7animation45em {
				0% {
					top: -1rem;
					left: 14.5rem;
				}
				100% {
					top: 2rem;
					left: 11.5rem;
				}
			}
			&-obj7 {
				position: absolute;
				top: -1rem;
				left: 24rem;
				width: 0.75rem;
				height: 0.75rem;
				border-radius: 50%;
				z-index: 210;
				background: white;
				animation: obj7animation 1s ease-in-out 1.75s forwards;
				@media (max-width: 75em) {
					top: -5rem;
					left: 20rem;
					width: 0.5rem;
					height: 0.5rem;
					animation: obj7animation75em 1s ease-in-out 1.75s forwards;
				}
				@media (max-width: 46.875em) {
					top: -1rem;
					left: 14.5rem;
					width: 0.5rem;
					height: 0.5rem;
					animation: obj7animation45em 1s ease-in-out 1.75s forwards;
				}
			}
			@keyframes obj8animation {
				0% {
					top: -8rem;
					left: 28rem;
				}
				100% {
					top: 14rem;
					left: 6rem;
				}
			}
			@keyframes obj8animation75em {
				0% {
					top: -6rem;
					left: 18.5rem;
				}
				100% {
					top: 8rem;
					left: 4.5rem;
				}
			}
			@keyframes obj8animation45em {
				0% {
					top: -6rem;
					left: 18.5rem;
				}
				100% {
					top: 8rem;
					left: 4.5rem;
				}
			}
			&-obj8 {
				position: absolute;
				top: -8rem;
				left: 28rem;
				width: 1.25rem;
				height: 8rem;
				border-radius: 50px;
				z-index: 210;
				transform: rotate(45deg);
				background: linear-gradient(to top, #008fff, #ff0074);
				animation: obj8animation 1s ease-in-out 1s forwards;
				@media (max-width: 75em) {
					top: -6rem;
					left: 18.5rem;
					width: 1rem;
					height: 6rem;
					animation: obj8animation75em 1s ease-in-out 1s forwards;
				}
				@media (max-width: 46.875em) {
					width: 0.75rem;
					height: 4rem;
					animation: obj8animation75em 1s ease-in-out 1s forwards;
				}
			}
			@keyframes obj9animation {
				0% {
					top: -8rem;
					left: 28rem;
				}
				100% {
					top: 22rem;
					left: 1rem;
				}
			}
			@keyframes obj9animation75em {
				0% {
					top: -2rem;
					left: 17rem;
				}
				100% {
					top: 14rem;
					left: 1rem;
				}
			}
			@keyframes obj9animation45em {
				0% {
					top: -3rem;
					left: 17rem;
				}
				100% {
					top: 13rem;
					left: 1rem;
				}
			}
			&-obj9 {
				position: absolute;
				top: -8rem;
				left: 28rem;
				width: 1.25rem;
				height: 1.25rem;
				border-radius: 50px;
				z-index: 210;
				background: linear-gradient(to top right, #0026ff, #9a00ff);
				animation: obj9animation 1s ease-in-out 0.75s forwards;
				@media (max-width: 75em) {
					top: -2rem;
					left: 17rem;
					width: 1rem;
					height: 1rem;
					animation: obj9animation75em 1s ease-in-out 0.75s forwards;
				}
				@media (max-width: 46.875em) {
					top: -3rem;
					left: 17rem;
					animation: obj9animation45em 1s ease-in-out 0.75s forwards;
				}
			}
			@keyframes obj10animation {
				0% {
					top: -10rem;
					left: 35rem;
				}
				100% {
					top: 22rem;
					left: 3rem;
				}
			}
			@keyframes obj10animation75em {
				0% {
					top: -5rem;
					left: 22rem;
				}
				100% {
					top: 14rem;
					left: 3rem;
				}
			}
			@keyframes obj10animation45em {
				0% {
					top: -5rem;
					left: 21rem;
				}
				100% {
					top: 14rem;
					left: 2rem;
				}
			}
			&-obj10 {
				position: absolute;
				top: -10rem;
				left: 35rem;
				width: 1.25rem;
				height: 8rem;
				border-radius: 50px;
				z-index: 210;
				transform: rotate(45deg);
				background: linear-gradient(to top, #9500ff, transparent);
				animation: obj10animation 1s ease-in-out 1s forwards;
				@media (max-width: 75em) {
					top: -5rem;
					left: 22rem;
					width: 1rem;
					height: 5rem;
					animation: obj10animation75em 1s ease-in-out 1s forwards;
				}
				@media (max-width: 46.875em) {
					top: -5rem;
					left: 21rem;
					width: 1rem;
					height: 3rem;
					animation: obj10animation45em 1s ease-in-out 1s forwards;
				}
			}
			@keyframes obj11animation {
				0% {
					top: 30rem;
					left: -2rem;
				}
				100% {
					top: 1rem;
					left: 27rem;
				}
			}
			@keyframes obj11animation75em {
				0% {
					top: 20.5rem;
					left: -2rem;
				}
				100% {
					top: 0.5rem;
					left: 18rem;
				}
			}
			@keyframes obj11animation45em {
				0% {
					top: 20.5rem;
					left: -4rem;
				}
				100% {
					top: 0.5rem;
					left: 16rem;
				}
			}
			&-obj11 {
				position: relative;
				top: 30rem;
				left: -2rem;
				width: 2rem;
				height: 2rem;
				z-index: 210;
				background: transparent;
				display: flex;
				align-items: center;
				justify-content: center;
				animation: obj11animation 1.5s ease-in-out 1s forwards;
				@media (max-width: 75em) {
					top: 20.5rem;
					left: -2rem;
					width: 1.5rem;
					height: 1.5rem;
					animation: obj11animation75em 1.5s ease-in-out 1s forwards;
				}
				@media (max-width: 46.875em) {
					top: 20.5rem;
					left: -4rem;
					width: 1.2rem;
					height: 1.2rem;
					animation: obj11animation45em 1.5s ease-in-out 1s forwards;
				}

				& > span {
					position: absolute;
					width: 100%;
					height: 0.35rem;
					background-color: white;
					z-index: 220;
					border-radius: 25px;
					@media (max-width: 75em) {
						height: 0.3rem;
					}
					@media (max-width: 46.875em) {
						height: 0.2rem;
					}

					&:first-child {
						transform: rotate(90deg);
					}
				}
			}
			@keyframes obj11_5animation {
				0% {
					top: -2rem;
					left: -2rem;
				}
				100% {
					top: 1rem;
					left: 1rem;
				}
			}
			&-obj11_5 {
				position: relative;
				top: -2rem;
				left: -2rem;
				width: 2rem;
				height: 2rem;
				z-index: 210;
				background: transparent;
				display: flex;
				align-items: center;
				justify-content: center;
				animation: obj11_5animation 0.5s ease-in-out 1.5s forwards;
				@media (max-width: 75em) {
					width: 1.5rem;
					height: 1.5rem;
				}
				@media (max-width: 46.875em) {
					width: 1.2rem;
					height: 1.2rem;
				}

				& > span {
					position: absolute;
					width: 100%;
					height: 0.35rem;
					background-color: white;
					z-index: 220;
					border-radius: 25px;
					@media (max-width: 75em) {
						height: 0.3rem;
					}
					@media (max-width: 46.875em) {
						height: 0.2rem;
					}

					&:first-child {
						transform: rotate(90deg);
					}
				}
			}
			@keyframes obj12animation {
				0% {
					top: 27rem;
					left: -2rem;
				}
				100% {
					top: -1rem;
					left: 25.5rem;
				}
			}
			@keyframes obj12animation75em {
				0% {
					top: 18rem;
					left: -2rem;
				}
				100% {
					top: -1rem;
					left: 17rem;
				}
			}
			@keyframes obj12animation45em {
				0% {
					top: 20rem;
					left: -5rem;
				}
				100% {
					top: -0.5rem;
					left: 15rem;
				}
			}
			&-obj12 {
				position: relative;
				top: 27rem;
				left: -2rem;
				width: 1.5rem;
				height: 1.5rem;
				z-index: 210;
				background: white;
				display: flex;
				align-items: center;
				justify-content: center;
				transform: rotate(45deg);
				clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
				animation: obj12animation 1.5s ease-in-out 1.5s forwards;
				@media (max-width: 75em) {
					top: 18rem;
					left: -2rem;
					width: 1rem;
					height: 1rem;
					animation: obj12animation75em 1.5s ease-in-out 1.5s forwards;
				}
				@media (max-width: 46.875em) {
					top: 20rem;
					left: -5rem;
					width: 1rem;
					height: 1rem;
					animation: obj12animation45em 1.5s ease-in-out 1.5s forwards;
				}
			}
			@keyframes obj13animation {
				0% {
					top: 27rem;
					left: -2rem;
				}
				100% {
					top: -0.5rem;
					left: 23.5rem;
				}
			}
			@keyframes obj13animation75em {
				0% {
					top: 18rem;
					left: -2rem;
				}
				100% {
					top: -0.5rem;
					left: 15.5rem;
				}
			}
			@keyframes obj13animation45em {
				0% {
					top: 18rem;
					left: -3.5rem;
				}
				100% {
					top: -0.5rem;
					left: 14rem;
				}
			}
			&-obj13 {
				position: relative;
				top: 27rem;
				left: -2rem;
				width: 1.5rem;
				height: 1.5rem;
				z-index: 210;
				background: white;
				display: flex;
				align-items: center;
				justify-content: center;
				transform: rotate(45deg);
				clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
				animation: obj13animation 1.5s ease-in-out 2s forwards;
				@media (max-width: 75em) {
					top: 18rem;
					left: -2rem;
					width: 1rem;
					height: 1rem;
					animation: obj13animation75em 1.5s ease-in-out 2s forwards;
				}
				@media (max-width: 46.875em) {
					top: 18rem;
					left: -3.5rem;
					animation: obj13animation45em 1.5s ease-in-out 2s forwards;
				}
			}
			@keyframes obj14animation {
				0% {
					top: -15rem;
					left: 35rem;
				}
				100% {
					top: 6rem;
					left: 14rem;
				}
			}
			@keyframes obj14animation75em {
				0% {
					top: -8.5rem;
					left: 21.5rem;
				}
				100% {
					top: 2.5rem;
					left: 10.5rem;
				}
			}
			&-obj14 {
				position: relative;
				top: -15rem;
				left: 35rem;
				width: 4rem;
				height: 4rem;
				z-index: 210;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				background: linear-gradient(to top right, #0072ff, #dc00ff);
				animation: obj14animation 1.5s ease-in-out 1s forwards;
				@media (max-width: 75em) {
					top: -8.5rem;
					left: 21.5rem;
					width: 3rem;
					height: 3rem;
					animation: obj14animation75em 1.5s ease-in-out 1s forwards;
				}
				@media (max-width: 46.875em) {
					top: -8.5rem;
					left: 21.5rem;
					width: 2rem;
					height: 2rem;
					animation: obj14animation75em 1.5s ease-in-out 1s forwards;
				}

				& > span {
					position: absolute;
					width: 1.25rem;
					height: 1.25rem;
					background-color: white;
					z-index: 220;
					border-radius: 25px;
					@media (max-width: 75em) {
						width: 1rem;
						height: 1rem;
					}
					@media (max-width: 46.875em) {
						width: 0.75rem;
						height: 0.75rem;
					}
				}
			}
			@keyframes obj15animation {
				0% {
					top: 25.5rem;
					left: -20rem;
				}
				100% {
					top: 5.5rem;
					left: 0rem;
				}
			}
			@keyframes obj15animation75em {
				0% {
					top: 25.5rem;
					left: -20rem;
				}
				100% {
					top: 2rem;
					left: 0rem;
				}
			}
			@keyframes obj15animation45em {
				0% {
					top: 26.5rem;
					left: -20rem;
				}
				100% {
					top: 3.5rem;
					left: 0rem;
				}
			}
			&-obj15 {
				position: relative;
				top: 25.5rem;
				left: -20rem;
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
				animation: obj15animation 1.5s ease-in-out 1s forwards;
				@media (max-width: 75em) {
					top: 14rem;
					left: -12rem;
					width: 5rem;
					height: 25rem;
					animation: obj15animation75em 1.5s ease-in-out 1s forwards;
				}
				@media (max-width: 46.875em) {
					top: 26.5rem;
					left: -20rem;
					width: 3rem;
					height: 20rem;
					animation: obj15animation45em 1.5s ease-in-out 1s forwards;
				}
				& > span {
					width: 2rem;
					height: 2rem;
					background-color: white;
					z-index: 220;
					margin: 0.5rem 0rem;
					clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
					@media (max-width: 75em) {
						width: 1.5rem;
						height: 1.5rem;
					}
					@media (max-width: 46.875em) {
						width: 1rem;
						height: 1rem;
					}
					&:first-child {
						margin-top: 2.5rem;
						@media (max-width: 46.875em) {
							margin-top: 1.5rem;
						}
					}
				}
			}
			@keyframes obj16animation {
				0% {
					top: -30.5rem;
					left: 53rem;
				}
				100% {
					top: -17.5rem;
					left: 40rem;
				}
			}
			@keyframes obj16animation75em {
				0% {
					top: -22.5rem;
					left: 37.5rem;
				}
				100% {
					top: -12.5rem;
					left: 27.5rem;
				}
			}
			@keyframes obj16animation45em {
				0% {
					top: -24.5rem;
					left: 34.5rem;
				}
				100% {
					top: -14.5rem;
					left: 24.5rem;
				}
			}
			&-obj16 {
				position: absolute;
				top: -30.5rem;
				left: 53rem;
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
				animation: obj16animation 1.5s ease-in-out 1s forwards;
				@media (max-width: 75em) {
					width: 2rem;
					height: 25rem;
					top: -22.5rem;
					left: 37.5rem;
					animation: obj16animation75em 1.5s ease-in-out 1s forwards;
				}
				@media (max-width: 46.875em) {
					top: -24.5rem;
					left: 34.5rem;
					animation: obj16animation45em 1.5s ease-in-out 1s forwards;
				}
				& > span {
					width: 1.5rem;
					height: 1.5rem;
					background-color: white;
					z-index: 220;
					margin: 0.75rem 0rem;
					border-radius: 50%;
					@media (max-width: 75em) {
						width: 1rem;
						height: 1rem;
					}
				}
			}
			@keyframes obj17animation {
				0% {
					top: -30rem;
					left: 62rem;
				}
				100% {
					top: -20rem;
					left: 52rem;
				}
			}
			@keyframes obj17animation75em {
				0% {
					top: -32.5rem;
					left: 52.5rem;
				}
				100% {
					top: -22.5rem;
					left: 42.5rem;
				}
			}
			&-obj17 {
				position: absolute;
				top: -30rem;
				left: 62rem;
				width: 1rem;
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
					#ff00e9,
					transparent,
					transparent,
					transparent
				);
				animation: obj17animation 0.75s ease-in-out 1s forwards;
				@media (max-width: 75em) {
					top: -32.5rem;
					left: 52.5rem;
					animation: obj17animation75em 0.75s ease-in-out 1s forwards;
				}
				@media (max-width: 46.875em) {
					display: none;
				}
			}
			@keyframes obj18animation {
				0% {
					top: -32rem;
					left: 62rem;
				}
				100% {
					top: -12rem;
					left: 42rem;
				}
			}
			@keyframes obj18animation {
				0% {
					top: -32rem;
					left: 62rem;
				}
				100% {
					top: -12rem;
					left: 42rem;
				}
			}
			@keyframes obj18animation75em {
				0% {
					top: -32rem;
					left: 48rem;
				}
				100% {
					top: -16rem;
					left: 32rem;
				}
			}
			@keyframes obj18animation45em {
				0% {
					top: -34rem;
					left: 46rem;
				}
				100% {
					top: -18rem;
					left: 30rem;
				}
			}
			&-obj18 {
				position: absolute;
				top: -32rem;
				left: 62rem;
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
					#5400ff,
					transparent,
					transparent,
					transparent
				);
				animation: obj18animation 1s ease-in-out 1s forwards;
				@media (max-width: 75em) {
					top: -32rem;
					left: 48rem;
					animation: obj18animation75em 1s ease-in-out 1s forwards;
				}
				@media (max-width: 46.875em) {
					top: -34rem;
					left: 46rem;
					animation: obj18animation45em 1s ease-in-out 1s forwards;
				}
			}
			@keyframes obj19animation {
				0% {
					top: -35rem;
					left: 65rem;
				}
				100% {
					top: 5rem;
					left: 25rem;
				}
			}
			@keyframes obj19animation75em {
				0% {
					top: -30.5rem;
					left: 48rem;
				}
				100% {
					top: -2.5rem;
					left: 20rem;
				}
			}
			&-obj19 {
				position: absolute;
				top: -35rem;
				left: 65rem;
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
				animation: obj19animation 1.25s ease-in-out 1s forwards;
				@media (max-width: 75em) {
					top: -30.5rem;
					left: 48rem;
					animation: obj19animation75em 1.25s ease-in-out 1s forwards;
				}
				@media (max-width: 46.875em) {
					display: none;
				}
			}
			@keyframes obj20animation {
				0% {
					top: 45rem;
					left: -10rem;
				}
				100% {
					top: 30rem;
					left: 5rem;
				}
			}
			@keyframes obj20animation75em {
				0% {
					top: 30rem;
					left: -10rem;
				}
				100% {
					top: 20rem;
					left: 0rem;
				}
			}
			&-obj20 {
				position: absolute;
				top: 45rem;
				left: -10rem;
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
				animation: obj20animation 1s ease-in-out 1s forwards;
				@media (max-width: 75em) {
					top: 30rem;
					left: -10rem;
					animation: obj20animation75em 1s ease-in-out 1s forwards;
				}
				@media (max-width: 46.875em) {
					display: none;
				}
			}
			@keyframes obj21animation {
				0% {
					top: -5rem;
					left: 50rem;
				}
				100% {
					top: 5rem;
					left: 40rem;
				}
			}
			@keyframes obj21animation75em {
				0% {
					top: -3rem;
					left: 32rem;
				}
				100% {
					top: 3rem;
					left: 29rem;
				}
			}
			&-obj21 {
				position: absolute;
				top: -5rem;
				left: 50rem;
				width: 1.5rem;
				height: 1.5rem;
				z-index: 210;
				display: flex;
				align-items: center;
				justify-content: end;
				flex-direction: column;
				border-radius: 75px;
				background: linear-gradient(to top right, #00ff18, #ffff00);
				animation: obj21animation 1s ease-in-out 2.5s forwards;
				@media (max-width: 75em) {
					top: -3rem;
					left: 32rem;
					animation: obj21animation75em 1s ease-in-out 2.5s forwards;
				}
				@media (max-width: 46.875em) {
					display: none;
				}
			}
			@keyframes obj22animation {
				0% {
					top: 45rem;
					left: -3rem;
				}
				100% {
					top: 30rem;
					left: 12rem;
				}
			}
			@keyframes obj22animation75em {
				0% {
					top: 29.5rem;
					left: -1.5rem;
				}
				100% {
					top: 20.5rem;
					left: 8.5rem;
				}
			}
			@keyframes obj22animation45em {
				0% {
					top: 26rem;
					left: -2rem;
				}
				100% {
					top: 18rem;
					left: 6rem;
				}
			}
			&-obj22 {
				position: absolute;
				top: 45rem;
				left: -3rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj22animation 1s ease-in-out 3.25s forwards;
				@media (max-width: 75em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 29.5rem;
					left: -1.5rem;
					animation: obj22animation75em 1s ease-in-out 3.25s forwards;
				}
				@media (max-width: 46.875em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 26rem;
					left: -2rem;
					animation: obj22animation45em 1s ease-in-out 3.25s forwards;
				}
			}
			@keyframes obj23animation {
				0% {
					top: 45rem;
					left: -3rem;
				}
				100% {
					top: 29rem;
					left: 13rem;
				}
			}
			@keyframes obj23animation75em {
				0% {
					top: 29.5rem;
					left: -1.5rem;
				}
				100% {
					top: 20rem;
					left: 9rem;
				}
			}
			@keyframes obj23animation45em {
				0% {
					top: 26rem;
					left: -2rem;
				}
				100% {
					top: 17.5rem;
					left: 6.5rem;
				}
			}
			&-obj23 {
				position: absolute;
				top: 45rem;
				left: -3rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj23animation 1s ease-in-out 3s forwards;
				@media (max-width: 75em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 29.5rem;
					left: -1.5rem;
					animation: obj23animation75em 1s ease-in-out 3s forwards;
				}
				@media (max-width: 46.875em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 26rem;
					left: -2rem;
					animation: obj23animation45em 1s ease-in-out 3s forwards;
				}
			}
			@keyframes obj24animation {
				0% {
					top: 45rem;
					left: -3rem;
				}
				100% {
					top: 28rem;
					left: 14rem;
				}
			}
			@keyframes obj24animation75em {
				0% {
					top: 29.5rem;
					left: -1.5rem;
				}
				100% {
					top: 19.5rem;
					left: 9.5rem;
				}
			}
			@keyframes obj24animation45em {
				0% {
					top: 26rem;
					left: -2rem;
				}
				100% {
					top: 17rem;
					left: 7rem;
				}
			}
			&-obj24 {
				position: absolute;
				top: 45rem;
				left: -3rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj24animation 1s ease-in-out 2.75s forwards;
				@media (max-width: 75em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 29.5rem;
					left: -1.5rem;
					animation: obj24animation75em 1s ease-in-out 2.75s forwards;
				}
				@media (max-width: 46.875em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 26rem;
					left: -2rem;
					animation: obj24animation45em 1s ease-in-out 2.75s forwards;
				}
			}
			@keyframes obj25animation {
				0% {
					top: 45rem;
					left: -3rem;
				}
				100% {
					top: 26rem;
					left: 16rem;
				}
			}
			@keyframes obj25animation75em {
				0% {
					top: 29.5rem;
					left: -1.5rem;
				}
				100% {
					top: 18.5rem;
					left: 10.5rem;
				}
			}
			@keyframes obj25animation45em {
				0% {
					top: 26rem;
					left: -2rem;
				}
				100% {
					top: 16rem;
					left: 8rem;
				}
			}
			&-obj25 {
				position: absolute;
				top: 45rem;
				left: -3rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj25animation 1s ease-in-out 2.5s forwards;
				@media (max-width: 75em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 29.5rem;
					left: -1.5rem;
					animation: obj25animation75em 1s ease-in-out 2.5s forwards;
				}
				@media (max-width: 46.875em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 26rem;
					left: -2rem;
					animation: obj25animation45em 1s ease-in-out 2.5s forwards;
				}
			}
			@keyframes obj26animation {
				0% {
					top: 45rem;
					left: -3rem;
				}
				100% {
					top: 25rem;
					left: 17rem;
				}
			}
			@keyframes obj26animation75em {
				0% {
					top: 29.5rem;
					left: -1.5rem;
				}
				100% {
					top: 18rem;
					left: 11rem;
				}
			}
			@keyframes obj26animation45em {
				0% {
					top: 26rem;
					left: -2rem;
				}
				100% {
					top: 15.5rem;
					left: 8.5rem;
				}
			}
			&-obj26 {
				position: absolute;
				top: 45rem;
				left: -3rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj26animation 1s ease-in-out 2.25s forwards;
				@media (max-width: 75em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 29.5rem;
					left: -1.5rem;
					animation: obj26animation75em 1s ease-in-out 2.25s forwards;
				}
				@media (max-width: 46.875em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 26rem;
					left: -2rem;
					animation: obj26animation45em 1s ease-in-out 2.25s forwards;
				}
			}
			@keyframes obj27animation {
				0% {
					top: 45rem;
					left: -3rem;
				}
				100% {
					top: 24rem;
					left: 18rem;
				}
			}
			@keyframes obj27animation75em {
				0% {
					top: 29.5rem;
					left: -1.5rem;
				}
				100% {
					top: 17.5rem;
					left: 11.5rem;
				}
			}
			@keyframes obj27animation45em {
				0% {
					top: 26rem;
					left: -2rem;
				}
				100% {
					top: 15rem;
					left: 9rem;
				}
			}
			&-obj27 {
				position: absolute;
				top: 45rem;
				left: -3rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj27animation 1s ease-in-out 2s forwards;
				@media (max-width: 75em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 29.5rem;
					left: -1.5rem;
					animation: obj27animation75em 1s ease-in-out 2s forwards;
				}
				@media (max-width: 46.875em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 26rem;
					left: -2rem;
					animation: obj27animation45em 1s ease-in-out 2s forwards;
				}
			}
			@keyframes obj28animation {
				0% {
					top: 45rem;
					left: -3rem;
				}
				100% {
					top: 23rem;
					left: 19rem;
				}
			}
			@keyframes obj28animation75em {
				0% {
					top: 29.5rem;
					left: -1.5rem;
				}
				100% {
					top: 17rem;
					left: 12rem;
				}
			}
			@keyframes obj28animation45em {
				0% {
					top: 26rem;
					left: -2rem;
				}
				100% {
					top: 14.5rem;
					left: 9.5rem;
				}
			}
			&-obj28 {
				position: absolute;
				top: 45rem;
				left: -3rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj28animation 1s ease-in-out 1.75s forwards;
				@media (max-width: 75em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 29.5rem;
					left: -1.5rem;
					animation: obj28animation75em 1s ease-in-out 1.75s forwards;
				}
				@media (max-width: 46.875em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 26rem;
					left: -2rem;
					animation: obj28animation45em 1s ease-in-out 1.75s forwards;
				}
			}
			@keyframes obj29animation {
				0% {
					top: 45rem;
					left: -3rem;
				}
				100% {
					top: 21rem;
					left: 21rem;
				}
			}
			@keyframes obj29animation75em {
				0% {
					top: 29.5rem;
					left: -1.5rem;
				}
				100% {
					top: 16rem;
					left: 13rem;
				}
			}
			@keyframes obj29animation45em {
				0% {
					top: 26rem;
					left: -2rem;
				}
				100% {
					top: 13.5rem;
					left: 10.5rem;
				}
			}
			&-obj29 {
				position: absolute;
				top: 45rem;
				left: -3rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj29animation 1s ease-in-out 1.5s forwards;
				@media (max-width: 75em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 29.5rem;
					left: -1.5rem;
					animation: obj29animation75em 1s ease-in-out 1.5s forwards;
				}
				@media (max-width: 46.875em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 26rem;
					left: -2rem;
					animation: obj29animation45em 1s ease-in-out 1.5s forwards;
				}
			}
			@keyframes obj30animation {
				0% {
					top: 45rem;
					left: -3rem;
				}
				100% {
					top: 20rem;
					left: 22rem;
				}
			}
			@keyframes obj30animation75em {
				0% {
					top: 29.5rem;
					left: -1.5rem;
				}
				100% {
					top: 15.5rem;
					left: 13.5rem;
				}
			}
			@keyframes obj30animation45em {
				0% {
					top: 26rem;
					left: -2rem;
				}
				100% {
					top: 13rem;
					left: 11rem;
				}
			}
			&-obj30 {
				position: absolute;
				top: 45rem;
				left: -3rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj30animation 1s ease-in-out 1.25s forwards;
				@media (max-width: 75em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 29.5rem;
					left: -1.5rem;
					animation: obj30animation75em 1s ease-in-out 1.25s forwards;
				}
				@media (max-width: 46.875em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 26rem;
					left: -2rem;
					animation: obj30animation45em 1s ease-in-out 1.25s forwards;
				}
			}
			@keyframes obj31animation {
				0% {
					top: 45rem;
					left: -3rem;
				}
				100% {
					top: 19rem;
					left: 23rem;
				}
			}
			@keyframes obj31animation75em {
				0% {
					top: 29.5rem;
					left: -1.5rem;
				}
				100% {
					top: 15rem;
					left: 14rem;
				}
			}
			@keyframes obj31animation45em {
				0% {
					top: 26rem;
					left: -2rem;
				}
				100% {
					top: 12.5rem;
					left: 11.5rem;
				}
			}
			&-obj31 {
				position: absolute;
				top: 45rem;
				left: -3rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj31animation 1s ease-in-out 1s forwards;
				@media (max-width: 75em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 29.5rem;
					left: -1.5rem;
					animation: obj31animation75em 1s ease-in-out 1s forwards;
				}
				@media (max-width: 46.875em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 26rem;
					left: -2rem;
					animation: obj31animation45em 1s ease-in-out 1s forwards;
				}
			}
			@keyframes obj32animation {
				0% {
					top: 45rem;
					left: -3rem;
				}
				100% {
					top: 18rem;
					left: 24rem;
				}
			}
			@keyframes obj32animation75em {
				0% {
					top: 29.5rem;
					left: -1.5rem;
				}
				100% {
					top: 14.5rem;
					left: 14.5rem;
				}
			}
			@keyframes obj32animation45em {
				0% {
					top: 26rem;
					left: -2rem;
				}
				100% {
					top: 12rem;
					left: 12rem;
				}
			}
			&-obj32 {
				position: absolute;
				top: 45rem;
				left: -3rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj32animation 1s ease-in-out 0.75s forwards;
				@media (max-width: 75em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 29.5rem;
					left: -1.5rem;
					animation: obj32animation75em 1s ease-in-out 0.75s forwards;
				}
				@media (max-width: 46.875em) {
					width: 0.4rem;
					height: 0.4rem;
					top: 26rem;
					left: -2rem;
					animation: obj32animation45em 1s ease-in-out 0.75s forwards;
				}
			}
			@keyframes obj33animation {
				0% {
					top: -4rem;
					left: 36rem;
				}
				100% {
					top: 16rem;
					left: 16rem;
				}
			}
			@keyframes obj33animation75em {
				0% {
					top: -2.5rem;
					left: 24.5rem;
				}
				100% {
					top: 11.5rem;
					left: 11.5rem;
				}
			}
			@keyframes obj33animation45em {
				0% {
					top: -3.5rem;
					left: 22rem;
				}
				100% {
					top: 9.5rem;
					left: 9.5rem;
				}
			}
			&-obj33 {
				position: absolute;
				top: -4rem;
				left: 36rem;
				width: 7rem;
				height: 0.5rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				transform: rotate(-45deg);
				animation: obj33animation 1s ease-in-out 1.5s forwards;
				@media (max-width: 75em) {
					width: 5rem;
					height: 0.35rem;
					top: -2.5rem;
					left: 24.5rem;
					animation: obj33animation75em 1s ease-in-out 1.5s forwards;
				}
				@media (max-width: 46.875em) {
					top: -3.5rem;
					left: 22rem;
					width: 5rem;
					height: 0.35rem;
					animation: obj33animation45em 1s ease-in-out 1.5s forwards;
				}
			}
			@keyframes obj34animation {
				0% {
					top: -3rem;
					left: 38rem;
				}
				100% {
					top: 12rem;
					left: 23rem;
				}
			}
			@keyframes obj34animation75em {
				0% {
					top: -1.5rem;
					left: 26rem;
				}
				100% {
					top: 8.5rem;
					left: 17rem;
				}
			}
			@keyframes obj34animation45em {
				0% {
					top: -3.5rem;
					left: 22rem;
				}
				100% {
					top: 7rem;
					left: 14.25rem;
				}
			}
			&-obj34 {
				position: absolute;
				top: -3rem;
				left: 38rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj34animation 1s ease-in-out 1.75s forwards;
				@media (max-width: 75em) {
					top: -1.5rem;
					left: 26rem;
					width: 0.4rem;
					height: 0.4rem;
					animation: obj34animation75em 1s ease-in-out 1.75s forwards;
				}
				@media (max-width: 46.875em) {
					top: -2.5rem;
					left: 24.5rem;
					width: 0.4rem;
					height: 0.4rem;
					animation: obj34animation45em 1s ease-in-out 1.75s forwards;
				}
			}
			@keyframes obj35animation {
				0% {
					top: -3rem;
					left: 38rem;
				}
				100% {
					top: 11rem;
					left: 24rem;
				}
			}
			@keyframes obj35animation75em {
				0% {
					top: -1.5rem;
					left: 26rem;
				}
				100% {
					top: 7.5rem;
					left: 18rem;
				}
			}
			@keyframes obj35animation45em {
				0% {
					top: -3.5rem;
					left: 22rem;
				}
				100% {
					top: 6.5rem;
					left: 14.75rem;
				}
			}
			&-obj35 {
				position: absolute;
				top: -3rem;
				left: 38rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj35animation 1s ease-in-out 2s forwards;
				@media (max-width: 75em) {
					top: -1.5rem;
					left: 26rem;
					width: 0.4rem;
					height: 0.4rem;
					animation: obj35animation75em 1s ease-in-out 2s forwards;
				}
				@media (max-width: 46.875em) {
					top: -2.5rem;
					left: 24.5rem;
					width: 0.4rem;
					height: 0.4rem;
					animation: obj35animation45em 1s ease-in-out 2s forwards;
				}
			}
			@keyframes obj36animation {
				0% {
					top: -3rem;
					left: 38rem;
				}
				100% {
					top: 10rem;
					left: 25rem;
				}
			}
			@keyframes obj36animation75em {
				0% {
					top: -1.5rem;
					left: 26rem;
				}
				100% {
					top: 6.5rem;
					left: 19rem;
				}
			}
			@keyframes obj36animation45em {
				0% {
					top: -3.5rem;
					left: 22rem;
				}
				100% {
					top: 6rem;
					left: 15.25rem;
				}
			}
			&-obj36 {
				position: absolute;
				top: -3rem;
				left: 38rem;
				width: 0.6rem;
				height: 0.6rem;
				z-index: 210;
				border-radius: 75px;
				background: white;
				animation: obj36animation 1s ease-in-out 2.25s forwards;
				@media (max-width: 75em) {
					top: -1.5rem;
					left: 26rem;
					width: 0.4rem;
					height: 0.4rem;
					animation: obj36animation75em 1s ease-in-out 2.25s forwards;
				}
				@media (max-width: 46.875em) {
					top: -2.5rem;
					left: 24.5rem;
					width: 0.4rem;
					height: 0.4rem;
					animation: obj36animation45em 1s ease-in-out 2.25s forwards;
				}
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
			@media (max-width: 46.875em) {
				justify-content: center;
				align-items: end;
			}
			&-hello {
				min-width: 10rem;
				min-height: 5rem;
				@media (max-width: 46.875em) {
					width: 100%;
				}
				& > h1 {
					font-size: 3rem;
					color: white;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: stretch;
					height: 17rem;
					@media (max-width: 90.625em) {
						height: 12rem;
						margin-right: 1rem;
					}
					@media (max-width: 62.5em) {
						height: 10rem;
					}
					@media (max-width: 46.875em) {
						margin-right: 0rem;
						margin-bottom: 8rem;
						width: 100%;
					}
					& > div {
						@media (max-width: 46.875em) {
							width: 100%;
						}
						&:first-child {
							font-size: 7rem;
							overflow: hidden;
							height: 50%;
							position: relative;
							width: 60rem;
							@media (max-width: 90.625em) {
								width: 40rem;
								font-size: 5rem;
							}
							@media (max-width: 62.5em) {
								width: 30rem;
								font-size: 4rem;
							}
							@media (max-width: 46.875em) {
								width: 100%;
								font-size: 3.5rem;
							}
							@keyframes godown {
								0% {
									top: -100%;
								}
								100% {
									top: 0%;
								}
							}
							@keyframes godown2 {
								0% {
									top: -100%;
								}
								100% {
									top: 50%;
									left: 50%;
									transform: translate(-50%, -50%);
								}
							}
							& > main {
								position: absolute;
								top: -100%;
								left: 0;
								transition: all 0.5s ease-in-out;
								animation: godown 1s ease-in-out 2s forwards;
								@media (max-width: 46.875em) {
									width: max-content;
									animation: godown2 1s ease-in-out 2s forwards;
								}
							}
						}
						&:nth-child(2) {
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 3.5rem;
							padding-right: 5rem;
							height: 30%;
							position: relative;
							width: 60rem;
							overflow: hidden;
							@media (max-width: 90.625em) {
								padding-right: 10rem;
								width: 40rem;
								font-size: 2.5rem;
							}
							@media (max-width: 62.5em) {
								padding-right: 10rem;
								width: 30rem;
								font-size: 2rem;
							}
							@media (max-width: 46.875em) {
								padding-right: 0rem;
								width: 100%;
								font-size: 1.5rem;
							}
							@keyframes goup {
								0% {
									top: 100%;
								}
								100% {
									top: 0%;
								}
							}
							@keyframes goup2 {
								0% {
									top: 100%;
								}
								100% {
									top: 50%;
									left: 50%;
									transform: translate(-50%, -50%);
								}
							}
							& > main {
								position: absolute;
								top: 100%;
								left: 10rem;
								transition: all 0.5s ease-in-out;
								animation: goup 1s ease-in-out 2s forwards;
								@media (max-width: 90.625em) {
									left: 5rem;
								}
								@media (max-width: 46.875em) {
									width: max-content;
									left: 0;
									animation: goup2 1s ease-in-out 2s forwards;
								}
							}
						}
						&:nth-child(3) {
							display: flex;
							align-items: center;
							justify-content: end;
							font-size: 2.5rem;
							padding-right: 5rem;
							height: 20%;
							position: relative;
							width: 60rem;
							overflow: hidden;
							@media (max-width: 90.625em) {
								padding-right: 10rem;
								width: 40rem;
								font-size: 2rem;
							}
							@media (max-width: 62.5em) {
								padding-right: 10rem;
								width: 30rem;
								font-size: 1.5rem;
							}
							@media (max-width: 46.875em) {
								padding-right: 0rem;
								width: 100%;
								font-size: 1rem;
							}
							@keyframes goleft {
								0% {
									left: 110%;
								}
								100% {
									left: 50%;
								}
							}
							& > main {
								position: absolute;
								width: max-content;
								left: 110%;
								transition: all 0.5s ease-in-out;
								animation: goleft 1s ease-in-out 2s forwards;
							}
							& > span {
								padding-right: 0.75rem;
								font-size: 2.65rem;
							}
						}
						& > main {
							& > span {
								background: linear-gradient(to top right, #0062ff, #ff007b);
								-webkit-background-clip: text;
								background-clip: text;
								-webkit-text-fill-color: transparent;
								font-family: "Arimo";
								font-weight: 700;
							}
						}
					}
				}
			}
		}
	}

	@media (min-width: 100em) {
		.AbstractPicture {
			&-layer3 {
				&-hello {
					& > h1 {
						height: 25rem;
						& > div {
							&:first-child {
								font-size: 9rem;
								width: 80rem;
							}
							&:nth-child(2) {
								font-size: 4.5rem;
								padding-right: 5rem;
								height: 30%;
								width: 80rem;
							}
							&:nth-child(3) {
								font-size: 3.5rem;
								width: 80rem;
							}
						}
					}
				}
			}
		}
	}
`;

export default HomeHeaderStyle;
