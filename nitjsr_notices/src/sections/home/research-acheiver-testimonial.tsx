"use client";
import React from "react";
import LearnMoreButton from "@/components/learn-more-button/learn-more-button";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import OurAcheiver from "../home/OurAcheivers/OurAcheiver";
import Testimonial from "../home/Testimonial/testimonial";
import Publications from "../home/Publications/Publications";
export function MiddleCarousel({ research, acheiver, testimonial }) {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          marginBottom: "2rem",
          paddingTop: "1rem",
          paddingBottom: "2rem",
          background: "#fff",
        }}
      >
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
              <Publications />
            </Grid>
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                padding: "1em",
              }}
            >
              {/* CurrentAcheivement Testimonial */}
              <OurAcheiver fontsize={"1em"} />
              <Testimonial />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
