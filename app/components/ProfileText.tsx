import React from "react";
import { Box, Typography } from "@mui/material";

const ProfileText = () => {
  return (
    <Box
      width={{ xs: "100%", md: "47%" }}
      textAlign={{ xs: "center", md: "left" }}
    >
      <Typography
        fontFamily={"serif"}
        color="#848484"
        fontSize={{ xs: 30, md: 40 }}
        paddingLeft={{ xs: 0, md: 3 }}
        paddingTop={{ xs: 3, md: 10 }}
      >
        2nd President
      </Typography>
      <Box
        borderTop={0.5}
        borderBottom={0.5}
        borderColor={"#10537F"}
        display="flex"
        flexDirection="column"
        alignItems={{ xs: "center", md: "flex-start" }}
        textAlign={{ xs: "center", md: "left" }}
      >
        <Typography
          fontFamily={"serif"}
          color="#0C6DAE"
          fontSize={{ xs: 60, md: 70 }}
          paddingLeft={{ xs: 0, md: 12 }}
          marginBottom={-3}
        >
          Yusei
        </Typography>
        <Typography
          fontFamily={"serif"}
          color="#0C6DAE"
          fontSize={{ xs: 60, md: 70 }}
          paddingLeft={{ xs: 0, md: 25 }}
        >
          Imamura
        </Typography>
      </Box>
      <Typography
        fontFamily={"serif"}
        fontSize={{ xs: 30, md: 40 }}
        color="#10537F"
        textAlign={"center"}
        paddingTop={{ xs: 2, md: 5 }}
        marginBottom={{ xs: -3, md: 0 }}
      >
        2022.12.15 ~ 2025.3.19
      </Typography>
    </Box>
  );
};
export default ProfileText;
