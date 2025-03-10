"use client";
import { Box, Paper, styled } from "@mui/material";
import Grid from "@mui/material/Grid2";

const PicturePage = () => {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={1}>
        <Grid size={{ xs: 6, md: 3 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid size={{ xs: 6, md: 3 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid size={{ xs: 6, md: 3 }}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid>
    </Box>
  );
};
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));
export default PicturePage;
