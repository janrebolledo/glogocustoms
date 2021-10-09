import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Head from "next/head";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>Glogo Customs</title>
                <link rel="preconnect" href="https://app.snipcart.com"/>
                <link rel="preconnect" href="https://cdn.snipcart.com"/>
                <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css"/>
                <link rel="icon" href="https://www.glogocustoms.com/favicon.ico" type="image/x-icon" />
                <meta name="title" content="Glogo Customs"></meta>
                <meta name="description" content="Frequently asked questions about our Glogos."></meta>
                <meta name="keywords" content="glogo customs, glogocustoms, lightbox, custom lights"></meta>
                <meta name="robots" content="index, follow"></meta>
                <meta name="language" content="English"></meta>
                <meta name="revisit-after" content="12 days"></meta>
            </Head>
            <main className="main">
                <FAQ />
                <Contact/>
            </main>
        </>
    )
}