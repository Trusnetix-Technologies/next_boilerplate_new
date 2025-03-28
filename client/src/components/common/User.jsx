// import Head from "next/head";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import * as React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchUser, selectUser } from "../../redux/reducers/userReducer";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CardActionArea from "@mui/material/CardActionArea";
// import Grid from "@mui/material/Grid2";
// import { Container, Box } from "@mui/material";
// import Skeleton from "@mui/material/Skeleton";
// import Stack from "@mui/material/Stack";

// export default function Posts() {
//   // const [user, setUser] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const dispatch = useDispatch();
//   const user = useSelector(selectUser);

//   // console.log("user: ", user);

//   useEffect(() => {
//     dispatch(fetchUser());
//   }, [dispatch]);

//   //   useEffect(() => {
//   //     fetchData();
//   //   }, []);

//   // useEffect(() => {
//   //   console.log(isLoading);
//   // }, [isLoading]);

//   //   const fetchData = async () => {
//   //     setIsLoading(true);
//   //     try {
//   //       const response = await axios.get(
//   //         "/api/v1/get/user/67e644a68ca3f9278bda4350"
//   //       );
//   //       console.log(response.data);
//   //       setUser(response.data.response);
//   //     } catch (err) {
//   //       setError(err);
//   //     } finally {
//   //       setIsLoading(false);
//   //     }
//   //   };

//   return (
//     <Container maxWidth="lg">
//       <Box>
//         <Typography variant="h4">
//           User:{" "}
//           {user && user.status === "succeeded" ? user.user.response.name : null}
//         </Typography>
//         <Typography variant="h4">
//           Phone:{" "}
//           {user && user.status === "succeeded"
//             ? user.user.response.phone
//             : null}
//         </Typography>
//       </Box>
//     </Container>
//   );
// }
