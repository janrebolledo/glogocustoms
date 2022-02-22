import Head from "next/head";
import PartnersPage from "../components/PartnersPage";

export default function Partners() {
  return (
    <main>
      <Head>
        <title>Partners — Glogo Customs</title>
        <link
          rel="icon"
          href="https://www.glogocustoms.com/favicon.ico"
          type="image/x-icon"
        />
        <meta name="title" content="Glogo Customs"></meta>
        <meta
          name="description"
          content="See all of Glogo Custom's partners"
        ></meta>
        <meta
          name="keywords"
          content="glogo customs, glogocustoms, lightbox, custom lights"
        ></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta name="language" content="English"></meta>
        <meta name="revisit-after" content="12 days"></meta>
      </Head>
      {/* <PartnersPage /> */}
    </main>
  );
}
