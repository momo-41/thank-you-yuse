"use client";

import * as React from "react";
import { Button, Box, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
const TopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Button
        variant="contained"
        onClick={handleScrollToTop}
        sx={{
          bgcolor: "white",
          color: "black",
          minWidth: {
            xs: 60,
            md: 100,
          },
          minHeight: {
            xs: 60,
            md: 100,
          },
          borderRadius: "50%",
          flexDirection: "column", // 縦並びに

          marginBottom: {
            xs: 5,
            md: 10,
          },
        }}
      >
        <ArrowUpwardIcon
          sx={{
            fontSize: {
              xs: 24,
              md: 36,
            },
          }}
        />
        <Typography
          sx={{
            fontSize: {
              xs: 14,
              md: 20,
            },
          }}
        >
          Top
        </Typography>
      </Button>
    </Box>
  );
};

export default TopButton;
