import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const PictureCard = () => {
  return (
    <Box display={"flex"} justifyContent={{ xs: "center", md: "flex-start" }}>
      <Card
        sx={{
          width: { xs: 300, md: 550 },
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
            <ChatBubbleOutlineIcon sx={{ ml: -1.7 }} />
            <Typography
              fontSize={{ xs: 10, md: 11 }}
              fontFamily={"serif"}
              ml={{ xs: 1, md: 2 }}
            >
              株式会社PeachTech宣材写真
            </Typography>
          </Box>
          <Box display={"flex"} alignItems={"center"}>
            <Typography
              fontSize={{ xs: 10, md: 11 }}
              mr={1}
              fontFamily={"serif"}
            >
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
