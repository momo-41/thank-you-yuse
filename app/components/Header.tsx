import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "white" }}>
        <Toolbar sx={{ color: "#E45C92" }}>
          <Typography
            align={"center"}
            width={"100%"}
            fontFamily={"serif"}
            fontSize={{ xs: 25, md: 40 }}
          >
            Yusei's Graduate web
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
