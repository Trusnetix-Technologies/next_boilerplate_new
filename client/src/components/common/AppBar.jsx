import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

export default function NewAppBar() {
  const [token, setToken] = useState();

  useEffect(() => {
    const token = cookies.get("token");
    setToken(token);
  }, []);

  const handleLogout = () => {
    cookies.remove("token");
    window.location.href = "/login";
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">My App</Typography>
        {token ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Link href="/login">
            <Button color="inherit">Login</Button>
          </Link>
        )}
      </Toolbar>
    </AppBar>
  );
}
