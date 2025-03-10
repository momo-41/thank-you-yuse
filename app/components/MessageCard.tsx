import { Card, CardContent, Typography, Box } from "@mui/material";

const MessageCard: React.FC<MessageCardProps> = ({ name, message }) => {
  return (
    <Card
      sx={{
        width: { xs: 310, md: 500, xl: 700 },
        borderRadius: 4,
        boxShadow: 3,
        px: 3,
        position: "relative",
        m: { xs: 1, md: 4 },
      }}
    >
      <Box
        position={"absolute"}
        top={{ xs: 50, md: 55 }}
        left={5}
        width={{ xs: 300, md: 450 }}
        bgcolor={"#F7B0DC"}
        height={"2px"}
      />
      <Box
        position={"absolute"}
        top={15}
        left={20}
        height={{ xs: 150, md: 200 }}
        bgcolor={"#F7B0DC"}
        width={"2px"}
      />
      <Box
        position={"absolute"}
        bottom={30}
        right={5}
        width={{ xs: 300, md: 450 }}
        bgcolor={"#F7B0DC"}
        height={"2px"}
      />
      <Box
        position={"absolute"}
        bottom={5}
        right={20}
        height={{ xs: 150, md: 200 }}
        bgcolor={"#F7B0DC"}
        width={"2px"}
      />
      <CardContent>
        <Typography
          fontFamily={"serif"}
          color={"#CB6A9C"}
          fontWeight={"bold"}
          fontSize={{ xs: 20, md: 24 }}
        >
          {name}
        </Typography>
        <Typography
          fontFamily={"serif"}
          color={"black"}
          my={2}
          mb={3}
          mx={1}
          fontSize={{ xs: 12, md: 17 }}
        >
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MessageCard;
