"use client";
import { Box, styled } from "@mui/material";
import PictureCard from "./PictureCard";
import ProfileText from "./ProfileText";

const FirstView = () => {
  return (
    <CustomBox>
      <Box width="100%" mb={{ xs: 3, md: 0 }}>
        <ProfileText />
      </Box>
      <Box width="100%">
        <PictureCard />
      </Box>
    </CustomBox>
  );
};

const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  height: "100vh", // ヘッダーとの調整で100vhではなく90vh
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: 'url("/sakura.png")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: 0.5,
    zIndex: -1,
  },
}));

export default FirstView;
