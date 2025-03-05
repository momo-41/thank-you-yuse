import { Card, CardContent, Typography, Box } from "@mui/material";

const MessageCard: React.FC<MessageCardProps> = ({ name, message }) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 700,
        borderRadius: "16px",
        boxShadow: 3,
        padding: 3,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 90,
          left: 5,
          width: "400px",
          borderTop: "2px solid #F7B0DC",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 30,
          left: 20,
          height: "200px",
          borderLeft: "2px solid #F7B0DC",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 30,
          right: 5,
          width: "400px",
          borderBottom: "2px solid #F7B0DC",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 5,
          right: 20,
          height: "200px",
          borderRight: "2px solid #F7B0DC",
        }}
      />
      <CardContent>
        <Typography
          fontFamily="serif"
          color="#CB6A9C"
          fontWeight="bold"
          paddingBottom="4px"
          sx={{ fontSize: { xs: 25, md: 32 } }}
        >
          {name}
        </Typography>
        <Typography
          whiteSpace="pre-line"
          fontFamily="serif"
          color="black"
          sx={{ marginTop: 2, fontSize: { xs: 16, md: 20 } }}
        >
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MessageCard;
