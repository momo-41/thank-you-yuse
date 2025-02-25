import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const PictureCard = () => {
  return (
    <Card
      sx={{
        width: 450,
        height: 400,
        paddingTop: 1.5,
        paddingLeft: 1.5,
        paddingRight: 1.5,
        bgcolor: "#f8f8f8",
      }}
    >
      <CardMedia sx={{ height: 350, width: "100%" }} image="/yuse.jpg" />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <Box display={"flex"} alignItems={"center"}>
          <ChatBubbleOutlineIcon />
          <Typography fontSize={11} fontFamily={"Georgia"} marginLeft={1}>
            株式会社PeachTech宣材写真
          </Typography>
        </Box>
        <Box display={"flex"} alignItems={"center"}>
          <Typography fontSize={11} marginRight={1} fontFamily={"Georgia"}>
            Picture More
          </Typography>
          <ArrowRightAltIcon />
        </Box>
      </CardContent>
    </Card>
  );
};
export default PictureCard;
