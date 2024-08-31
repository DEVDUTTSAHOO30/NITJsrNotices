"use client";
import { Box, Grid, Stack } from "@mui/material";
import CurrentAchievement from "./CurrentAchievement/CurrentAchievement";
import Publication from "./ResearchSection/Publication";
import Testimonial from "./Testimonial/Testimonial";

const AchievementandPublicationSection = () => {
  return (
    <Box
      style={{
        display: "flex",
      }}
    >
      <Grid
        container
        sx={{ padding: "0 10px", margin: "auto", textAlign: "center" }}
      >
        <Grid item xs={12} md={4}>
          <Publication />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          <CurrentAchievement/>
          <Testimonial />
        </Grid>
      </Grid>
    </Box>
  );
};
export default AchievementandPublicationSection;
