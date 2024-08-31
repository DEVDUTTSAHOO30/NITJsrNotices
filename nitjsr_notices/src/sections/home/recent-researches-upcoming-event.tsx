"use client";
import React from "react";
import LearnMoreButton from "@/components/learn-more-button/learn-more-button";
import { Box } from "@mui/material";
import Image from "next/image";
import img from "../../assets/images/default.jpg";
import RecentResearchCarousel from "@/components/carousel/recent-research-carousel";
import UpcomingEventCarousel from "@/components/carousel/upcoming-event-carousel";


export function BottomCarousel({ researchData, upcomingEvents }) {
  return (
    <>

      <Box
        sx={{
          width: "100%",
          height: "100%",
          marginBottom: "2rem",
          paddingTop: "1rem",
          paddingBottom: "2rem",
          background: "rgb(245,248,253)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            color: "rgba(39,65,135)",
          }}
        >
          {/* {t("home_latest_news_events")} */}
        </h1>

        <UpcomingEventCarousel upcomingEvents={upcomingEvents} />

      </Box>

    </>
  );
}
