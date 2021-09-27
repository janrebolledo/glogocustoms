import Script from 'next/script';
import ProductList from "../components/ProductList";
import Contact from "../components/Contact-Page";
import Head from "next/head";
import {IProduct} from "../components/Product";
import {GetStaticProps} from "next";
import Jumbotron from "../components/Jumbotron";

interface IProductListProps {
    products: IProduct[]
}

export default function Home({products}: IProductListProps) {
    return (
        <>
            <Head>
                <title>Glogo Customs</title>
                <link rel="preconnect" href="https://app.snipcart.com"/>
                <link rel="preconnect" href="https://cdn.snipcart.com"/>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
                <link rel="icon" href="https://www.glogocustoms.com/favicon.ico" type="image/x-icon" />
                <meta name="title" content="Glogo Customs"></meta>
                <meta name="description" content="Contact us with questions or comments about your order."></meta>
                <meta name="keywords" content="glogo customs, glogocustoms, lightbox, custom lights"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name="language" content="English"></meta>
                <meta name="revisit-after" content="12 days"></meta>
            </Head>
            <main className="main">
                <Contact/>
            </main>
            <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
            <div hidden id="snipcart" data-api-key="ODA2ODg4M2EtOTRjOS00MjFkLWE2MjgtZWI2YWI0NWQyY2M2NjM3Njc1MzM3MjEzOTQ5NTY4
"></div>
        </>
    )
}