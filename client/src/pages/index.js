import Head from "next/head";
import { Box, CssBaseline } from "@mui/material";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

import NewAppBar from "../components/common/AppBar";

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

      <NewAppBar />

      <div
        style={{
          backgroundColor: "white",
          minHeight: "100vh",
          margin: "0",
          marginTop: "64px",
          padding: "0",
          color: "black",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h1">
            Welcome to the Next.JS Boilerplate
          </Typography>
          <Typography variant="h6">
            This project.
          </Typography>
          <Box height={25} />
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Link href="/products" style={{ textDecoration: "none" }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Products
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        My Favourite Products
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
            <Grid item xs={12} md={6}>
              <Link href="/movies" style={{ textDecoration: "none" }}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image="https://plus.unsplash.com/premium_photo-1710961232728-1bd418c4081d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Movies
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary" }}
                      >
                        My Favourite Movies
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </div>
    </>
  );
}
