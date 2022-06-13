import { useRef } from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import Head from "next/dist/shared/lib/head";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";

function MyApp({ Component, pageProps }) {
	const containerRef = useRef(null);
	return (
		<>
			<LocomotiveScrollProvider
				options={{}}
				watch={[]}
				containerRef={containerRef}
			>
				<main data-scroll-container ref={containerRef}>
					<Head>
						<title>Abstract Developer</title>
						<link href="/absico.png" rel="icon" type="image/png" />
					</Head>
					<GlobalStyles />
					<Component {...pageProps} />
				</main>
			</LocomotiveScrollProvider>
		</>
	);
}

export default MyApp;
