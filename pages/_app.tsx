import Script from 'next/script';
import "../styles/globals.scss";
import type {AppProps} from 'next/app'
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({Component, pageProps}: AppProps) {
    return <div className="app">
        <Header/>
        <Component {...pageProps} />
        <Footer/>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
        <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js"></script>
        <div id="snipcart" data-config-modal-style="side" data-api-key="ODA2ODg4M2EtOTRjOS00MjFkLWE2MjgtZWI2YWI0NWQyY2M2NjM3Njc1MzM3MjEzOTQ5NTY4" hidden></div>
        <script data-host="https://microanalytics.io" data-dnt="false" src="https://microanalytics.io/js/script.js" id="ZwSg9rf6GA" async defer></script>
    </div>
}

export default MyApp
