import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import MessageCard from "./MessageCard";
import { YearGridCardProps } from "../types/types";

const YearGridCard: React.FC<YearGridCardProps> = ({
  yearProps,
  nameColor,
  lineColor,
  messageData,
}) => {
  return (
    <Box pt={{ xs: 4, md: 8 }}>
      <Grid
        container
        spacing={{ xs: 6, md: 7, xl: 10 }}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {messageData
          .filter((message) => message.year === yearProps) // 指定の学年だけを表示
          .map((message) => (
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

export default YearGridCard;
