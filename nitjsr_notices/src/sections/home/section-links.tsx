"use client";
import * as React from "react";
import Grid from "@mui/material/Grid"; // Grid version 1
import Image from "next/image";
import Alumni from "@/assets/images/feature/undraw_Graduation_ktn0-removebg-preview_backrem.png";
import Notice from "@/assets/images/feature/notices.png";
import Placement from "@/assets/images/feature/undraw_career_progress_ivdb.png";
import Internal from "@/assets/images/feature/fac2.png";
import { Box } from "@mui/material";
import Arrow from "@/assets/images/feature/rightArrow.png";
import Link from "@mui/material";

// src\assets\images\feature\undraw_Graduation_ktn0-removebg-preview_backrem.png
export default function SectionLinks() {
  return (
    <>
      <Grid
        container
        sx={{
          padding: "10px",
          boxSizing: "border-box",
          marginBottom: "50px",
          boxShadow:
            "0px 0px 11px 1px rgba(0,0,0,0.14),0px 0px 19px 6px rgba(0,0,0,0.03),0px 0px 26px 12px rgba(0,0,0,0.14),0px 0px 29px 12px rgba(0,0,0,0.14)",
          border: "1px solid rgba(0,0,0,0)",
          borderRadius: "8px",
          maxWidth: "1200px",
          marginX: "auto",
          // marginLeft: { xs: "0px", md: "40px" },
          marginY: "30px",
        }}
      >
        {/* background-color: rgb(245, 248, 253); */}
        <Grid
          item
          xs={12}
          md={3}
          style={{
            margin: "auto",
            backgroundColor: "rgb(245, 248, 253)",
            cursor: "pointer",
          }}
        >
          <a href="https://www.nitjaa.org/" style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                //   border: "1px solid grey",
                minHeight: "200px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <div className="image" style={{ objectFit: "contain" }}>
                <Image
                  src={Alumni}
                  alt="Alumni Network"
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    padding: "10px",
                    width: "100px",
                    height: "100px",
                    background: "transparent",
                  }}
                />
              </div>

              <div
                style={{
                  color: "rgb(39, 65, 135)",
                  fontSize: "4vh",
                  paddingBottom: "10px",
                }}
              >
                Alumni Network
              </div>

              <Box
                sx={{
                  color: "rgb(97, 105, 112)",
                  fontSize: "16px",
                  display: { xs: "none", md: "block" },
                }}
              >
                The official Alumni Network of NIT JSR
              </Box>
            </div>
          </a>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row-reverse",
            }}
          >
            <Image
              src={Arrow}
              alt="Arrow"
              style={{ height: "50px", maxWidth: "60px" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={3} style={{ margin: "auto", cursor: "pointer" }}>
          <a
            href="http://archive.nitjsr.ac.in/tap/portfolio/"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                //   border: "1px solid grey",
                minHeight: "200px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <div className="image">
                <Image
                  src={Placement}
                  alt="Alumni Network"
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    padding: "10px",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </div>
              <div
                style={{
                  color: "rgb(39, 65, 135)",
                  fontSize: "4vh",
                  paddingBottom: "10px",
                }}
              >
                Placements
              </div>
              <Box
                sx={{
                  color: "rgb(97, 105, 112)",
                  fontSize: "16px",
                  display: { xs: "none", md: "block" },
                }}
              >
                Information related to Placements
              </Box>
            </div>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "row-reverse",
              }}
            >
              <Image
                src={Arrow}
                alt="Arrow"
                style={{ height: "50px", maxWidth: "60px" }}
              />
            </Box>
          </a>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          style={{
            margin: "auto",
            backgroundColor: "rgb(245, 248, 253)",
            cursor: "pointer",
          }}
        >
          <a
            href="https://nitjsr.ac.in/internalLinks"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                //   border: "1px solid grey",
                minHeight: "200px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <div className="image" style={{ objectFit: "contain" }}>
                <Image
                  src={Internal}
                  alt="Alumni Network"
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    padding: "10px",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </div>
              <div
                style={{
                  color: "rgb(39, 65, 135)",
                  fontSize: "4vh",
                  paddingBottom: "10px",
                }}
              >
                Internal Links
              </div>
              <Box style={{ color: "rgb(97, 105, 112)", fontSize: "16px" }}>
                Institute trusted websites
              </Box>
            </div>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "row-reverse",
              }}
            >
              <Image
                src={Arrow}
                alt="Arrow"
                style={{ height: "50px", maxWidth: "60px" }}
              />
            </Box>
          </a>
        </Grid>
        <Grid item xs={12} md={3} style={{ margin: "auto", cursor: "pointer" }}>
          <a
            href="https://nitjsr.ac.in/Notices/Students"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",

                //   border: "1px solid grey",
                minHeight: "200px",
                padding: "10px",
                textAlign: "center",
              }}
            >
              <div className="image">
                <Image
                  src={Notice}
                  alt="Alumni Network"
                  style={{
                    position: "relative",
                    justifyContent: "center",
                    padding: "10px",
                    width: "100px",
                    height: "100px",
                  }}
                />
              </div>
              <div
                style={{
                  color: "rgb(39, 65, 135)",
                  fontSize: "4vh",
                  paddingBottom: "10px",
                }}
              >
                Notices
              </div>
              <Box
                sx={{
                  color: "rgb(97, 105, 112)",
                  fontSize: "16px",
                  display: { xs: "none", md: "block" },
                }}
              >
                Latest Notification & Office Announcement
              </Box>
            </div>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "row-reverse",
              }}
            >
              <Image
                src={Arrow}
                alt="Arrow"
                style={{ height: "50px", maxWidth: "60px" }}
              />
            </Box>
          </a>
        </Grid>
      </Grid>
    </>
  );
}
