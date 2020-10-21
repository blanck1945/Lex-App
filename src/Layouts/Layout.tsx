import Head from "next/head";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { useEffect, useState } from "react";
import Axios from "axios";
import { usuarioRoute } from "../../api/routes";
import Router from "next/router";

interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>La Ley</title>
      </Head>
      <Navbar />
      <main className="is-w-full is-hm-70v py-4 has-background-light ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
