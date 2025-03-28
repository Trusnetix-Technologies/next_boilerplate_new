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
  const [user, setUser] = useState(null);
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
      const response = await axios.get(
        "/api/v1/get/user/67e644a68ca3f9278bda4350"
      );
      console.log(response.data);
      setUser(response.data.response);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h4">
          User: {user ? user.name : "Loading..."}
        </Typography>
        <Typography variant="h4">
          Phone: {user ? user.phone : "Loading..."}
        </Typography>
      </Box>
    </Container>
  );
}
