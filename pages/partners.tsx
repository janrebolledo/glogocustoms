import Script from 'next/script';
import Head from "next/head";
import {IProduct} from "../components/Product";
import Partners from "../components/Partners";

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
                <meta name="description" content="See all of Glogo Custom's partners"></meta>
                <meta name="keywords" content="glogo customs, glogocustoms, lightbox, custom lights"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name="language" content="English"></meta>
                <meta name="revisit-after" content="12 days"></meta>
            </Head>
            <main className="main">
                <Partners/>
            </main>
        </>
    )
}