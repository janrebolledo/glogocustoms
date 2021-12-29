import Script from 'next/script';
import "../styles/globals.scss";
import type {AppProps} from 'next/app'
import Footer from "../components/Footer";
import Header from "../components/Header";
import Head from "next/head";

function MyApp({Component, pageProps}: AppProps) {
    return <div className="app">
        <Head>
            <link rel="preconnect" href="https://app.snipcart.com" />
            <link rel="preconnect" href="https://cdn.snipcart.com" />
            <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css" />
        </Head>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
        <script async src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"></script>
        <div id="snipcart" data-config-modal-style="side" data-api-key="OGI5YWJiY2MtNjBhMC00YmFlLWIwZDgtNGQwODljMTk3MjJhNjM3Njc1MzM3MjEzOTQ5NTY4" hidden></div>
        {/* Microanalytics */}
        <script data-host="https://microanalytics.io" data-dnt="false" src="https://microanalytics.io/js/script.js" id="ZwSg9rf6GA" async defer></script>
    </div>
}

export default MyApp
