import Head from "next/head";
import { CssBaseline } from "@mui/material";
import Products from "../components/items/Products";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Favourite Products | Next.JS Boilerplate</title>
        <meta
          name="description"
          content="Use this useful boilerplate to complete your projects promptly."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <div
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
          margin: "0",
          padding: "0",
          color: "black",
        }}
      >
        <Products />
      </div>
    </>
  );
}
