"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          bottom: 0,
          // zIndex: 100,
          backgroundColor: "#6699CC",
          py: 2,
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            backgroundColor: "#6699CC",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                mt: 3,
                mb: 0.5,
                color: "#E5F9FA",
                fontSize: { xs: "1.08rem", lg: "1.2rem" },
              }}
            >
              {"Designed, Developed and Hosted by "}
              <Link
                href="https://www.nitjsr.ac.in/Clubs/Webteam"
                style={{ textDecoration: "none", color: "#003A6E" }}
              >
                WebTeam
              </Link>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 0.5,
                color: "#E5F9FA",
                fontSize: { xs: "1.08rem", lg: "1.2rem" },
              }}
            >
              National Institute of Technology Jamshedpur
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 1,
                color: "#E5F9FA",
                fontSize: { xs: "1.08rem", lg: "1.2rem" },
              }}
            >
              राष्ट्रीय प्रौद्योगिकी संस्थान जमशेदपुर
            </Typography>
            <Typography
              variant="h3"
              sx={{ mb: 3, color: "#E5F9FA", fontSize: "1.75rem" }}
            >
              Visitors: 2263588
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            color: "#003A8C",
            px: 1.5,
            py: 1.5,
          }}
        >
          <Typography
            variant="body1"
            sx={{ color: "#003A8C", fontSize: "1rem" }}
          >
            {"© 2023 "}
            <Link
              href="https://www.nitjsr.ac.in/"
              style={{ textDecoration: "none", color: "#003A8C" }}
            >
              NIT Jamshedpur
            </Link>
          </Typography>
          <Typography
            variant="body1"
            sx={{
              position: "relative",
              top: 2,
              mb: 1,// margin bottom 
              color: "#003A8C",
              fontSize: "1rem",
            }}
          >
            <Link
              href="https://www.nitjsr.ac.in/policy"
              style={{ textDecoration: "none", color: "#003A8C" }}
            >
              Policies
            </Link>
          </Typography>
        </Box>
      </Box>
    </>
  );
}
