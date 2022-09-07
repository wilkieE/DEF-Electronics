import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Foooter from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>OPPA</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Foooter />
      </footer>
    </div>
  );
};

export default Layout;
