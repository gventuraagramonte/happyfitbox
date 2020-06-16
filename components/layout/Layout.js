import React from "react";
import { Global, css } from "@emotion/core";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }
          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }
          body {
            background-image: url("/static/img/FONDO.jpg");
            background-size: 100%;
            font-size: 1.6rem;
          }

          @media (max-width: 720px) {
            background-size: 50%;
          }
        `}
      />
      <Head>
        <html lang="es"></html>
        <title>HappyFitBox</title>
      </Head>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
