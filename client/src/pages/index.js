import Head from "next/head";
import { CssBaseline } from "@mui/material";
import Posts from "../components/landing/posts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.JS Boilerplate | Trusnetix</title>
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
        <Posts />
      </div>
    </>
  );
}
