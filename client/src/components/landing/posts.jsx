import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import * as React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid2";
import { Container, Box } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Posts() {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log(isLoading);
  // }, [isLoading]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://dummyjson.com/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{ textAlign: "center", minHeight: "60vh" }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Typography variant="h1">Movies!</Typography>
        <Typography variant="h6">My Favourite Movies</Typography>
      </Box>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ paddingBottom: "50px" }}
      >
        {products ? (
          products.products.map((post, index) => (
            <Grid key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.thumbnail}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {post.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : isLoading ? (
          <Grid container spacing={2} justifyContent="center">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
              <Grid item key={item}>
                <Stack spacing={1}>
                  <Skeleton
                    variant="rectangular"
                    animation="wave"
                    width={345}
                    height={450}
                    color="white"
                  />
                </Stack>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body">No products found</Typography>
        )}
      </Grid>
    </Container>
  );
}
