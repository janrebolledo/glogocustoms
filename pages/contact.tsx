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

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Glogo Customs</title>
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
        </>
    )
}