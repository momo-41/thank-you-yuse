import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { messageData } from "../data/data"; // メッセージデータをインポート
import MessageCard from "./MessageCard"; // メッセージカードコンポーネント

type GridCardProps = {
  nameColor: string;
  lineColor: string;
};

const GridCard: React.FC<GridCardProps> = ({ nameColor, lineColor }) => {
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
        {messageData.map((message) => (
          <Grid key={message.name} sx={{ xs: 12, md: 6 }}>
            <MessageCard
              name={message.name}
              message={message.message}
              year={message.year}
              nameColor={nameColor}
              lineColor={lineColor}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default GridCard;
