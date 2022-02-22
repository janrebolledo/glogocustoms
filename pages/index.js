import Head from "next/head";
import Landing from "../components/Landing";
import Carousel from "../components/Carousel";
import Contact from "../components/Contact";
import Collection from "../components/Collection";

export default function Home() {
  return (
    <main>
      <Head>
        <title>Glogo Customs</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="title" content="Glogo Customs"></meta>
        <meta
          name="description"
          content="Customized light products made in the U.S.A"
        ></meta>
        <meta
          name="keywords"
          content="glogo customs, glogocustoms, lightbox, custom lights"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta name="language" content="English"></meta>
        <meta name="revisit-after" content="12 days"></meta>

        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.glogocustoms.com/"></meta>
        <meta property="og:title" content="Glogo Customs"></meta>
        <meta
          property="og:description"
          content="Customized light products made in the U.S.A"
        ></meta>
        <meta
          property="og:image"
          content="https://www.glogocustoms.com/Social-Image.png"
        ></meta>

        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          property="twitter:url"
          content="https://www.glogocustoms.com/"
        ></meta>
        <meta property="twitter:title" content="Glogo Customs"></meta>
        <meta
          property="twitter:description"
          content="Customized light products made in the U.S.A"
        ></meta>
        <meta
          property="twitter:image"
          content="https://www.glogocustoms.com/Social-Image.png"
        ></meta>
      </Head>
      <Landing />
      <Carousel />
      <Collection />
      <Contact />
    </main>
  );
}
