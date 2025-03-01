"use client";

import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";

const ProfileText = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      width={isMobile ? "100%" : "47%"}
      textAlign={isMobile ? "center" : "left"}
    >
      <Typography
        fontFamily={"serif"}
        color="#848484"
        fontSize={isMobile ? 30 : 40}
        paddingLeft={isMobile ? 0 : 3}
        paddingTop={isMobile ? 3 : 10}
      >
        2nd President
      </Typography>
      <Box
        borderTop={0.5}
        borderBottom={0.5}
        borderColor={"#10537F"}
        display="flex"
        flexDirection="column"
        alignItems={isMobile ? "center" : "flex-start"}
        textAlign={isMobile ? "center" : "left"}
      >
        <Typography
          fontFamily={"serif"}
          color="#0C6DAE"
          fontSize={isMobile ? 60 : 70}
          paddingLeft={isMobile ? 0 : 12}
          marginBottom={-3}
        >
          Yusei
        </Typography>
        <Typography
          fontFamily={"serif"}
          color="#0C6DAE"
          fontSize={isMobile ? 60 : 70}
          paddingLeft={isMobile ? 0 : 25}
        >
          Imamura
        </Typography>
      </Box>
      <Typography
        fontFamily={"serif"}
        fontSize={isMobile ? 30 : 40}
        color="#10537F"
        textAlign={"center"}
        paddingTop={isMobile ? 2 : 5}
        marginBottom={isMobile ? -3 : 0}
      >
        2022.12.15 ~ 2025.3.19
      </Typography>
    </Box>
  );
};
export default ProfileText;
