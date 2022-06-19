import React from "react";
import Head from "next/head";
import Nav from "components/Nav";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>원태부모님</title>
        <meta name="description" content="Kepler-452b Contents Page" />
        <link rel="icon" href="images/logo.jpg" />

        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta property="og:url" content="https://원태부모님.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="생신 축하드려요" />
        <meta property="og:description" content="#0624 #생신 #축하 #행복" />
        <meta property="og:image" content="images/logo.jpg" />
      </Head>
      <Nav />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
