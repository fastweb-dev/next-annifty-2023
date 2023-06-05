import React from "react";
import NextHead from "next/head";
import GoogleFonts from "next-google-fonts";

const Head = ({ children, title }) => (
  <>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@900&display=swap" />
    <NextHead>

      <title>{title ? `${title} - ANNIFTY` : 'ANNIFTY - An NFT Art Gallery'}</title>

      <link rel="icon" href="/favicon.ico" />

      {children}
    </NextHead>
  </>
);

export default Head