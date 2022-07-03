import { useRef, Suspense } from "react";
import { GlobalStyles } from "../components/GlobalStyles";
import Head from "next/dist/shared/lib/head";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import ContextProvider from "../components/organisms/Context";
import Menu from "../components/organisms/Menu";
import PageLoaded from "../components/PageLoaded";
import Footer from "../components/organisms/Footer";
import Contact from "../components/organisms/Contact";

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
						<meta
							name="keywords"
							content="Front-End, Developer, HTML, CSS, JavaScript, PHP, React, NextJS"
						/>
						<meta
							name="description"
							content="Hello, my name is Oskar Dąbrowski. I'm Front-End Developer learning modern technologies to create awesome projects!"
						/>
						<meta name="author" content="Oskar Dąbrowski" />
						<meta name="og:title" content="Abstract Developer" />
						<meta name="og:type" content="website" />
						<meta name="og:image" content="" />
						<meta
							name="og:description"
							content="Hello, my name is Oskar Dąbrowski. I'm Front-End Developer learning modern technologies to create awesome projects!"
						/>
					</Head>
					<GlobalStyles />
					<Menu />
					<Suspense fallback={null}>
						<Component {...pageProps} />
						<Contact />
						<Footer />
						<PageLoaded />
					</Suspense>
				</main>
			</LocomotiveScrollProvider>
		</ContextProvider>
	);
}

export default MyApp;
