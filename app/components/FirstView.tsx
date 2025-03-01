import { Box, useMediaQuery } from "@mui/material";
import PictureCard from "./PictureCard";
import ProfileText from "./ProfileText";

const FirstVeiw = () => {
  return (
    <Box
      display={{ xs: "column", md: "flex" }}
      sx={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.3)),url('/sakura.png')",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "90vh",
      }}
    >
      <ProfileText />
      <PictureCard />
    </Box>
  );
};

export default FirstVeiw;
