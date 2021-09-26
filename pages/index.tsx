import Script from 'next/script';
import ProductList from "../components/ProductList";
import Contact from "../components/Contact";
import Head from "next/head";
import {IProduct} from "../components/Product";
import lightbox from "../public/lightbox.jpg";
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
                <link rel="shortcut icon" href="../public/favicon.ico" />
            </Head>
            <main className="main">
                <Jumbotron />
                <ProductList products={products}/>
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
    }
    //,
    // {
    //     id: "dragonscale",
    //     name: "Dragon Scale Betta",
    //     price: 35,
    //     image: dragonScaleBettaPicture,
    //     description: "The dragon scale betta is a rarer and higher maintenance fish. It is named by its thick white scales covering his sides that looks like dragon scale armor.",
    //     url: '/api/products/dragonscale'
    // },
    // {
    //     id: "crowntail",
    //     name: "Crowntail Betta",
    //     price: 7.50,
    //     image: crowntailBettaPicture,
    //     description: "The crowntail is pretty common, but interesting none the less. It's recognized by the shape of its tail that has an appearance of a comb.",
    //     url: '/api/products/crowntail'
    // },
    // {
    //     id: "veiltail",
    //     name: "Veiltail Betta",
    //     price: 5.00,
    //     image: veiltailBettaPicture,
    //     description: "By far the most common betta fish. You can recognize it by its long tail aiming downwards.",
    //     url: '/api/products/veiltail'
    // }
]

export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
            products
        }
    }
}
