import { Card, CardContent, Typography, Box } from "@mui/material";
import { MessageCardProps } from "../types/types";

const MessageCard: React.FC<MessageCardProps> = ({
  name,
  message,
  nameColor,
  lineColor,
}) => {
  return (
    <Card
      sx={{
        width: { xs: 300, md: 500, xl: 700 },
        borderRadius: 4,
        boxShadow: 3,
        px: 3,
        position: "relative",
        m: { md: 2 },
        pt: { xs: 0.5, md: 1, xl: 2 },
      }}
    >
      <Box
        position={"absolute"}
        top={{ xs: 50, md: 63, xl: 70 }}
        left={5}
        width={{ xs: 300, md: 450 }}
        bgcolor={lineColor}
        height={"2px"}
      />
      <Box
        position={"absolute"}
        top={20}
        left={20}
        height={{ xs: 150, md: 200 }}
        bgcolor={lineColor}
        width={"2px"}
      />
      <Box
        position={"absolute"}
        bottom={30}
        right={5}
        width={{ xs: 300, md: 450 }}
        bgcolor={lineColor}
        height={"2px"}
      />
      <Box
        position={"absolute"}
        bottom={5}
        right={20}
        height={{ xs: 150, md: 200 }}
        bgcolor={lineColor}
        width={"2px"}
      />
      <CardContent>
        <Typography
          fontFamily={"serif"}
          color={nameColor}
          fontWeight={"bold"}
          fontSize={{ xs: 17, md: 22, xl: 28 }}
        >
          {name}
        </Typography>
        <Typography
          fontFamily={"serif"}
          color={"black"}
          my={2}
          mb={3}
          fontSize={{ xs: 12, md: 17, xl: 20 }}
        >
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MessageCard;
