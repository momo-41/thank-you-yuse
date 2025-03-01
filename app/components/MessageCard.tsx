import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const messageData = {
  name: "國井 太陽",
  message:
    "先輩、今まで本当にありがとうございました！\nいつも優しく接してくださり、たくさんのことを教えていただきました。\n先輩のおかげでサークルの活動がとても楽しく、充実したものになりました。\nこれから新しい環境でも頑張ってください！またお会いできる機会があれば、ぜひお話ししましょう。\n本当にありがとうございました！お体に気をつけて、これからも応援しています！",
};

const MessageCard = () => {
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
          {messageData.name}
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
          {messageData.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MessageCard;
