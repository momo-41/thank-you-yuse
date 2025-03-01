"use client";

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const PictureCard = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <Box marginLeft={isMobile ? 3 : 0} marginRight={isMobile ? 6 : 0}>
      <Card
        sx={{
          width: isMobile ? "100%" : 600,
          height: isMobile ? 250 : 450,
          paddingTop: 1.5,
          paddingLeft: 1.5,
          paddingRight: 1.5,
          bgcolor: "#f8f8f8",
          marginTop: 5,
        }}
      >
        <CardMedia
          sx={{ height: isMobile ? 200 : 400, width: "100%" }}
          image="/yuse.jpg"
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box display={"flex"} alignItems={"center"}>
            <ChatBubbleOutlineIcon />
            <Typography fontSize={11} fontFamily={"serif"} marginLeft={1}>
              株式会社PeachTech宣材写真
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Typography fontSize={11} marginRight={1} fontFamily={"serif"}>
              Picture More
            </Typography>
            <ArrowRightAltIcon />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};
export default PictureCard;
