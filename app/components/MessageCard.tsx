import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const MessageCard = ({ name, message }: MessageCardProps) => {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: 700,
        borderRadius: "16px",
        boxShadow: 3,
        padding: 3,
        position: "relative",
        ".UppercrossSide": {
          content: '""',
          position: "absolute",
          top: 90,
          left: 5,
          width: "400px",
          height: "2px",
          backgroundColor: "#F7B0DC",
        },
        ".UppercrossVertical": {
          content: '""',
          position: "absolute",
          top: 30,
          left: 20,
          width: "2px",
          height: "200px",
          backgroundColor: "#F7B0DC",
        },
        ".UndercrossSide": {
          content: '""',
          position: "absolute",
          bottom: 30,
          right: 5,
          width: "400px",
          height: "2px",
          backgroundColor: "#F7B0DC",
        },
        ".UndercrossVertical": {
          content: '""',
          position: "absolute",
          bottom: 5,
          right: 20,
          width: "2px",
          height: "200px",
          backgroundColor: "#F7B0DC",
        },
      }}
    >
      <div className="UppercrossSide"></div>
      <div className="UppercrossVertical"></div>
      <div className="UndercrossSide"></div>
      <div className="UndercrossVertical"></div>

      <CardContent>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "serif",
            color: "#CB6A9C",
            fontWeight: "bold",
            paddingBottom: "4px",
            fontSize: { xs: 25, md: 32 },
          }}
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            marginTop: 2,
            whiteSpace: "pre-line",
            fontFamily: "serif",
            color: "black",
            fontSize: { xs: 16, md: 20 },
          }}
        >
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MessageCard;
