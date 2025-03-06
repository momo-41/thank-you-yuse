"use client";
import { Box, styled, useTheme } from "@mui/material";
import PictureCard from "./PictureCard";
import ProfileText from "./ProfileText";

const FirstView = () => {
  const theme = useTheme();
  return (
    <CustomBox>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="center"
        sx={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.3)), url('/sakura.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          minHeight: "90vh",
        }}
      >
        <Box width="100%">
          <ProfileText />
        </Box>
        <Box width="100%">
          <PictureCard />
        </Box>
      </Box>
    </CustomBox>
  );
};

const CustomBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  overflow: "hidden",

  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundImage: 'url("/sakura.png")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    opacity: 0.4,
    zIndex: -1,
  },
}));

export default FirstView;
