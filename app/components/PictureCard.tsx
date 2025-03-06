import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const PictureCard = () => {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "94%", md: 550 },
          height: { xs: 250, md: 450 },
          pt: 1.5,
          px: 1.5,
          bgcolor: "#f8f8f8",
        }}
      >
        <CardMedia
          sx={{ height: { xs: 200, md: 400 }, width: "100%" }}
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
            <Typography fontSize={11} mr={1} fontFamily={"serif"}>
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
