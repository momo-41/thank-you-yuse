import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar
      position="absolute"
      sx={{
        bgcolor: "transparent",
        WebkitBackdropFilter: "blur(4px)",
        backdropFilter: "blur(4px)",
      }}
    >
      <Toolbar sx={{ color: "#E45C92" }}>
        <Typography
          align={"center"}
          width={"100%"}
          fontFamily={"serif"}
          fontSize={{ xs: 25, md: 40 }}
        >
          Yusei's Graduate web
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
