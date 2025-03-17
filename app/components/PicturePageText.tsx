"use client";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";

const ScrollButton = ({ id }: { id: string }) => {
  const scrollToSection = () => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <Button
        onClick={scrollToSection}
        sx={{
          width: 50,
          height: 60,
          borderRadius: "100%",
        }}
      >
        <SouthIcon sx={{ color: "#000000" }} />
      </Button>
    </Box>
  );
};

const PicturePageText = () => {
  return (
    <Box
      height={"100vh"}
      display={{ xs: "flex" }}
      flexDirection={{ xs: "column" }}
      justifyContent={{ xs: "center" }}
    >
      <Box pt={7} px={7}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          border={1}
          borderColor={"#000000"}
        >
          <Box mt={{ xs: 5, md: 15 }} textAlign={"center"}>
            <Typography
              fontFamily={"serif"}
              color="#10537F"
              fontSize={{ xs: 40, md: 80 }}
              mb={{ md: -5 }}
            >
              PeachTech
            </Typography>
            <Typography
              fontFamily={"serif"}
              color="#10537F"
              fontSize={{ xs: 40, md: 80 }}
              textAlign={"center"}
            >
              Memory
            </Typography>
          </Box>
          <Typography
            fontFamily={"serif"}
            fontSize={{ xs: 20, md: 30 }}
            my={{ xs: 5, md: 10 }}
            color="#0C6DAE"
          >
            2022.12.15 ~ 2025.3.19
          </Typography>
        </Box>
      </Box>

      <ScrollButton id="target-gallery" />
    </Box>
  );
};

export default PicturePageText;
