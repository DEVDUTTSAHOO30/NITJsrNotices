"use client";

import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { HeroContext } from "@/context/hero-context";

import newBuilding from "../../assets/images/others/newbuilding.jpg";

export default function Hero() {
  const text = useContext(HeroContext).heroText;

  return (
    <Box
      sx={{
        background: `url(${newBuilding.src}) center center / cover no-repeat`,
        height: {
          xs: "200px",
          md: "400px",
        },
        color: "white",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
      <Typography
        variant="h1"
        sx={{
          zIndex: 10,
          fontSize: {
            xs: "35px",
            md: "60px",
          },
          fontWeight: "700",
          wordWrap: "break-word",
          textShadow: "2px 2px #274187",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}
