import { Box, Button, Typography } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";

const PicturePageText = () => {
  return (
    <Box textAlign="center" alignItems={"center"} mt={5}>
      <Typography
        fontFamily={"serif"}
        color="#848484"
        fontSize={{ xs: 30, md: 40 }}
      >
        2nd President
      </Typography>
      <Box
        borderColor={"#10537F"}
        alignItems={{ xs: "center", md: "flex-start" }}
        textAlign="center"
      >
        <Typography
          fontFamily={"serif"}
          color="#0C6DAE"
          fontSize={{ xs: 60, md: 70 }}
          mb={-3}
        >
          Yusei
        </Typography>
        <Typography
          fontFamily={"serif"}
          color="#0C6DAE"
          fontSize={{ xs: 60, md: 70 }}
        >
          Imamura
        </Typography>
      </Box>
      <Typography
        fontFamily={"serif"}
        fontSize={{ xs: 30, md: 40 }}
        color="#10537F"
        textAlign={"center"}
      >
        2022.12.15 ~ 2025.3.19
      </Typography>
      <Box mt={10}>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Button
            sx={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 3,
            }}
          >
            <Typography fontFamily={"serif"} fontSize={50}>
              memory
            </Typography>
            <SouthIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default PicturePageText;
