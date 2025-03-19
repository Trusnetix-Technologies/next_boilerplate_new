import Head from "next/head";

import MUIPosts from "../components/landing/muiPosts";
import Posts from "../components/landing/testPosts";

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
      {/* ====== POSTS WITH BACKEND STARTS HERE ====== */}
      <Posts />
      {/* ====== POSTS WITH BACKEND END HERE ====== */}
      {/* ====== MUI POSTS STARTS HERE ====== */}
      {/* <MUIPosts /> */}
      {/* ====== MUI POSTS END HERE ====== */}
    </>
  );
}
