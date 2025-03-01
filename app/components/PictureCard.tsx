import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const PictureCard = () => {
  return (
    <Box marginLeft={{ xs: 3, md: 0 }} marginRight={{ xs: 6, md: 0 }}>
      <Card
        sx={{
          width: { xs: "100%", md: 600 },
          height: { xs: 250, md: 450 },
          paddingTop: 1.5,
          paddingLeft: 1.5,
          paddingRight: 1.5,
          bgcolor: "#f8f8f8",
          marginTop: 5,
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
