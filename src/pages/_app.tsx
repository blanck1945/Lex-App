import Layout from "../Layouts/Layout";

import "../styles/globals.scss";

//importing Bulma
import "../scss/style.scss";

//helpers
import "../scss/helpers/_helpers.scss";

//variables
import "../scss/helpers/_variables.scss";

//custom classes
import "../scss/helpers/_customClass.scss";
import Wrapper from "../components/ContextWrapper/Wrapper";
import { Router } from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  return (
    <Wrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Wrapper>
  );
}

export default MyApp;
