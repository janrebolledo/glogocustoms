import "../styles/globals.css";
import Header from "../components/Header";
// import Footer from "../components/Footer";

function app({ Component, pageProps }) {
  return (
    <>
      <link rel="preconnect" href="https://app.snipcart.com" />
      <link rel="preconnect" href="https://cdn.snipcart.com" />
      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.css"
      />
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
      <script
        async
        src="https://cdn.snipcart.com/themes/v3.3.0/default/snipcart.js"
      ></script>
      <div
        id="snipcart"
        data-config-modal-style="side"
        data-api-key="OGI5YWJiY2MtNjBhMC00YmFlLWIwZDgtNGQwODljMTk3MjJhNjM3Njc1MzM3MjEzOTQ5NTY4"
        hidden
      ></div>
      {/* Microanalytics */}
      <script
        data-host="https://microanalytics.io"
        data-dnt="false"
        src="https://microanalytics.io/js/script.js"
        id="ZwSg9rf6GA"
        async
        defer
      ></script>
    </>
  );
}

export default app;
