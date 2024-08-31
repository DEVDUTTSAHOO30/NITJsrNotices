"use client";
import React from "react";
import { Stack, Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import Nimcet from "@/assets/images/nimcet.jpg";
import Ranking from "@/assets/images/ranking.jpg";
import Recruitment from "@/assets/images/recruitment.jpg";
import Link from "next/link";

export default function HomePageLinks() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          padding: "5px",
          flexWrap: "wrap",
          paddingY: "5vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: "15px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div
            style={{
              flexBasis: "380px",
              position: "relative",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            <Link href="http://117.252.249.12/" target="_blank">
              <Image
                src={Nimcet}
                alt="Nimcet"
                style={{
                  objectFit: "cover",
                  maxWidth: "100%",
                  height: "auto",
                  verticalAlign: "middle",
                }}
              />
            </Link>
          </div>
          <div
            style={{
              flexBasis: "380px",
              position: "relative",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            <Link
              href="https://www.nitjsr.ac.in/Institute/Ranking_and_Recognition"
              target="_blank"
            >
              <Image
                src={Ranking}
                alt="Nimcet"
                style={{
                  objectFit: "cover",
                  maxWidth: "100%",
                  height: "auto",
                  verticalAlign: "middle",
                }}
              />
            </Link>
          </div>
          <div
            style={{
              flexBasis: "380px",
              position: "relative",
              cursor: "pointer",
              padding: "10px",
            }}
          >
            <Link
              href="http://online.nitjsr.ac.in/faculty/CandidateLogin/Login.aspx"
              target="_blank"
            >
              <Image
                src={Recruitment}
                alt="Nimcet"
                style={{
                  objectFit: "cover",
                  maxWidth: "100%",
                  height: "auto",
                  verticalAlign: "middle",
                }}
              />
            </Link>
          </div>
        </Box>
      </Box>
    </>
  );
}
