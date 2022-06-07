import { GlobalStyles } from "../styles/GlobalStyles";
import Head from "next/dist/shared/lib/head";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Abstract Developer</title>
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
