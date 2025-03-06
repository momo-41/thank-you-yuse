import { Card, CardContent, Typography, Box } from "@mui/material";

const MessageCard: React.FC<MessageCardProps> = ({ name, message }) => {
  return (
    <Card
      sx={{
        width: { xs: 310, xl: 700 },
        borderRadius: 2,
        boxShadow: 3,
        px: 3,
        pt: 2,
        position: "relative",
      }}
    >
      <Box
        position={"absolute"}
        top={70}
        left={5}
        width={"400px"}
        bgcolor={"#F7B0DC"}
        height={"2px"}
      />
      <Box
        position={"absolute"}
        top={30}
        left={20}
        height={"200px"}
        bgcolor={"#F7B0DC"}
        width={"2px"}
      />
      <Box
        position={"absolute"}
        bottom={30}
        right={5}
        width={"400px"}
        bgcolor={"#F7B0DC"}
        height={"2px"}
      />
      <Box
        position={"absolute"}
        bottom={5}
        right={20}
        height={"200px"}
        bgcolor={"#F7B0DC"}
        width={"2px"}
      />
      <CardContent>
        <Typography
          fontFamily={"serif"}
          color={"#CB6A9C"}
          fontWeight={"bold"}
          fontSize={{ xs: 25, md: 28 }}
        >
          {name}
        </Typography>
        <Typography
          whiteSpace={"pre-line"}
          fontFamily={"serif"}
          color={"black"}
          my={2}
          fontSize={{ xs: 16, md: 20 }}
        >
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MessageCard;
