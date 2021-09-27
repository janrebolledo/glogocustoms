import Script from 'next/script';
import ProductList from "../components/ProductList";
import Contact from "../components/Contact";
import Head from "next/head";
import {IProduct} from "../components/Product";
import lightbox from "../public/lightbox.jpg";
import {GetStaticProps} from "next";
import Jumbotron from "../components/Jumbotron";
import Carousel from "../components/Carousel";
import Collections from "../components/Collections";

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
                <link rel="shortcut icon" href="../public/favicon.ico" />
            </Head>
            <main className="main">
                <Jumbotron />
                <ProductList products={products}/>
                <Carousel />
                <Collections />
                <Contact/>
            </main>
            <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"/>
            <div hidden id="snipcart" data-api-key="ODA2ODg4M2EtOTRjOS00MjFkLWE2MjgtZWI2YWI0NWQyY2M2NjM3Njc1MzM3MjEzOTQ5NTY4">
            </div>
        </>
    )
}

export const products: IProduct[] = [
    {
        id: "sign",
        name: "Lightbox Sign",
        price: 125.00,
        image: lightbox,
        description: "Made in the U.S.",
        url: '/api/products/lightbox'
    },
    {
        id: "sign-2",
        name: "Lightbox Sign",
        price: 100.00,
        image: lightbox,
        description: "Made in the U.S.",
        url: '/api/products/lightbox'
    }

]

export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
            products
        }
    }
}
