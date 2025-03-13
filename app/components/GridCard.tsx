import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { messageData } from "../data/data"; // メッセージデータをインポート
import MessageCard from "./MessageCard"; // メッセージカードコンポーネント

const GridCard = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ py: { xs: 2, md: 13 }, px: { xs: 1, md: 10 } }}
      >
        {messageData.map((message, index) => (
          <Grid sx={{ key: index, xs: 12, md: 6 }}>
            <MessageCard
              name={message.name}
              message={message.message}
              year={message.year}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridCard;
