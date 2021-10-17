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
        <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
        <div hidden id="snipcart" data-api-key="ODA2ODg4M2EtOTRjOS00MjFkLWE2MjgtZWI2YWI0NWQyY2M2NjM3Njc1MzM3MjEzOTQ5NTY4"></div>
        <link rel="preconnect" href="https://app.snipcart.com"></link>
        <link rel="preconnect" href="https://cdn.snipcart.com"></link>
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.1/default/snipcart.css" />
        <script data-host="https://microanalytics.io" data-dnt="false" src="https://microanalytics.io/js/script.js" id="ZwSg9rf6GA" async defer></script>
    </div>
}

export default MyApp
