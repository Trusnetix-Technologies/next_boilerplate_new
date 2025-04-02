import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const sendOtp = async () => {
    console.log(phone);
    const response = await axios.post("/api/v1/send/otp/number", { phone });
    console.log(response.data);
    if (response.status === 201) {
      setShowOtp(true);
    }
  };

  const verifyOtp = async () => {
    const response = await axios.post("/api/v1/verify/otp/number", {
      phone,
      otp,
    });
    console.log(response.data);
    if (response.status === 200) {
      setShowOtp(false);
      console.log("response.data.token:", response.data.token);
      cookies.set("token", response.data.token);
      //   cookies.set("user", JSON.stringify(response.data.user));
      window.location.href = "/";
    }
  };

  return (
    <Box sx={{ paddingTop: "100px" }}>
      <Container maxWidth="sm">
        <Typography variant="h1">Login</Typography>
        <br />
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {showOtp ? (
            <>
              <TextField
                label="Enter OTP"
                onChange={(f) => {
                  setOtp(f.target.value);
                }}
                value={otp}
              />
              <Button variant="contained" onClick={verifyOtp}>
                Login
              </Button>
            </>
          ) : (
            <>
              <TextField
                label="Phone Number"
                onChange={(f) => {
                  setPhone(f.target.value);
                }}
                value={phone}
              />
              <Button variant="contained" onClick={sendOtp}>
                Send OTP
              </Button>
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Login;
