import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { messageData } from "../data/data";
import MessageCard from "./MessageCard";

type TProps = {
  yearProps: string;
};

const YearGridCard: React.FC<TProps> = ({ yearProps }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 6, md: 12 }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        sx={{ py: { xs: 2, md: 13 }, px: { xs: 1, md: 10 } }}
      >
        {messageData
          .filter((message) => message.year === yearProps) // 指定の学年だけを表示
          .map((message, index) => (
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

export default YearGridCard;
