import { useRef } from "react";
import { GlobalStyles } from "../components/GlobalStyles";
import Head from "next/dist/shared/lib/head";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ContextProvider from "../components/organisms/Context";
import Menu from "../components/organisms/Menu";

function MyApp({ Component, pageProps }) {
	const containerRef = useRef(null);
	return (
		<ContextProvider>
			<LocomotiveScrollProvider
				options={{}}
				watch={[]}
				containerRef={containerRef}
			>
				<main data-scroll-container ref={containerRef}>
					<Head>
						<title>Abstract Developer</title>
						<link href="/absico.png" rel="icon" type="image/png" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
					</Head>
					<GlobalStyles />
					<Menu />
					<Component {...pageProps} />
				</main>
			</LocomotiveScrollProvider>
		</ContextProvider>
	);
}

export default MyApp;
