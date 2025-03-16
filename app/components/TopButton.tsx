"use client";

import * as React from "react";
import { Button, Box, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const TopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      mt={5}
    >
      <Button
        variant="contained"
        onClick={handleScrollToTop}
        sx={{
          bgcolor: "white",
          width: {
            xs: 60,
            md: 100,
          },
          height: {
            xs: 60,
            md: 100,
          },
          borderRadius: "50%",
          flexDirection: "column", // 縦並びに
          mb: {
            xs: 5,
            md: 10,
          },
        }}
      >
        <KeyboardArrowUpIcon
          sx={{
            fontSize: {
              xs: 24,
              md: 36,
              color: "#858181",
            },
          }}
        />
        <Typography color="#706D6D" fontSize={{ xs: 14, md: 20 }}>
          Top
        </Typography>
      </Button>
    </Box>
  );
};

export default TopButton;
