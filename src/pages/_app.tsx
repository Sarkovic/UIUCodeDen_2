import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<Head>
				<title>UIUCodeDen</title>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				{/*<link rel='icon' href='/favicon.png' />*/}
				<meta
					name='description'
					content='UIUCodeDen is a platform where you can practice problems, compete with others, and learn new concepts.'
				/>
			</Head>
			<ToastContainer />
			<Component {...pageProps} />
		</RecoilRoot>
	);
}
