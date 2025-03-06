import { Box, Typography } from "@mui/material";

const ProfileText = () => {
  return (
    <Box width={{ xs: "100%" }} textAlign={{ xs: "center", md: "left" }}>
      <Typography
        fontFamily={"serif"}
        color="#848484"
        fontSize={{ xs: 30, md: 40 }}
        pl={{ md: 7 }}
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
          pl={{ md: 18 }}
          mb={-3}
        >
          Yusei
        </Typography>
        <Typography
          fontFamily={"serif"}
          color="#0C6DAE"
          fontSize={{ xs: 60, md: 70 }}
          pl={{ md: 30 }}
        >
          Imamura
        </Typography>
      </Box>
      <Typography
        fontFamily={"serif"}
        fontSize={{ xs: 30, md: 40 }}
        color="#10537F"
        textAlign={"center"}
        pt={{ xs: 2, md: 5 }}
      >
        2022.12.15 ~ 2025.3.19
      </Typography>
    </Box>
  );
};
export default ProfileText;
