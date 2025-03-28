import Head from "next/head";
import { CssBaseline } from "@mui/material";
import Movies from "../components/items/Movies";
import Box from "@mui/material/Box";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Favourite Movies | Next.JS Boilerplate | Trusnetix</title>
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
        <Movies />
        <Box height={25} />
      </div>
    </>
  );
}
