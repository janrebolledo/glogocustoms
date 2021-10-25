import ProductList from "../components/ProductList2";
import Contact from "../components/Contact";
import Head from "next/head";
import {IProduct} from "../components/Product";
import LightboxBlackFrame from "../public/Glogo Black Frame Mockup.gif";
import LightboxWhiteFrame from "../public/Glogo White Frame Mockup.gif";
import {GetStaticProps} from "next";
import Carousel from "../components/Carousel";
import Collections from "../components/Collections";
import ViewMore from "../components/ViewShopBtn"

interface IProductListProps {
    products: IProduct[]
}

export default function Home({products}: IProductListProps) {
    return (
        <>
            <Head>
                <title>Glogo Customs</title>
                <link rel="icon" href="https://www.glogocustoms.com/favicon.ico" type="image/x-icon" />
                <meta name="title" content="Glogo Customs"></meta>
                <meta name="description" content="Customized light products made in the U.S.A"></meta>
                <meta name="keywords" content="glogo customs, glogocustoms, lightbox, custom lights"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name="language" content="English"></meta>
                <meta name="revisit-after" content="12 days"></meta>

                <meta property="og:type" content="website"></meta>
                <meta property="og:url" content="https://www.glogocustoms.com/"></meta>
                <meta property="og:title" content="Glogo Customs"></meta>
                <meta property="og:description" content="Customized light products made in the U.S.A"></meta>
                <meta property="og:image" content="https://www.glogocustoms.com/Social-Image.png"></meta>

                <meta property="twitter:card" content="summary_large_image"></meta>
                <meta property="twitter:url" content="https://www.glogocustoms.com/"></meta>
                <meta property="twitter:title" content="Glogo Customs"></meta>
                <meta property="twitter:description" content="Customized light products made in the U.S.A"></meta>
                <meta property="twitter:image" content="https://www.glogocustoms.com/Social-Image.png"></meta>
            </Head>
            <main className="main">
                <Carousel />
                <ProductList products={products}/>
                <ViewMore />
                <Collections />
                <Contact/>
            </main>
        </>
    )
}

export const products: IProduct[] = [
    {
        id: "GlogoXL",
        name: "Glogo XL",
        price: 150.00,
        image: LightboxBlackFrame,
        description: "Made in the U.S.",
        url: '/products/glogoxl'
    },
    {
        id: "Glogo",
        name: "Glogo",
        price: 100.00,
        image: LightboxBlackFrame,
        description: "Made in the U.S.",
        url: '/products/glogo'
    }

]

export const getStaticProps: GetStaticProps = async (context) => {

    return {
        props: {
            products
        }
    }
}
