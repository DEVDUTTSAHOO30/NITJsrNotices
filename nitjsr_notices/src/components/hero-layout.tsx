"use client";

import Hero from "@/components/hero/hero";
import { HeroContextProvider } from "@/context/hero-context";
import extractSuboptions from "@/utils/extract-suboptions";

import { Grid, Box } from "@mui/material";
import Heading from "./heading";
import Link from "next/link";

export default function HeroLayout({
  children,
  category,
}: {
  children: React.ReactNode;
  category: string;
}) {
  const subOptionData = extractSuboptions(category);

  return (
    <HeroContextProvider>
      <Hero />
      {subOptionData !== null ? (
        <Box
          sx={{
            marginX: {
              xs: "1rem",
              sm: "2rem",
              md: "3rem",
              xl: "3rem",
            },
          }}
        >
          <Grid
            container
            sx={{
              padding: {
                xs: "1rem",
              },
              boxSizing: "border-box",
            }}
          >
            <Grid
              item
              md={4}
              sx={{
                display: {
                  xs: "none",
                  md: "block",
                },
              }}
            >
              <Box
                sx={{
                  border: "1px solid #333",
                  marginRight: "1rem",
                }}
              >
                <Heading>{category}</Heading>
                <Box
                  sx={{
                    margin: "0.7rem",
                  }}
                >
                  {subOptionData &&
                    subOptionData.map((value, index) => (
                      <Box
                        key={index}
                        sx={{
                          padding: "0.7rem",
                          borderBottom: "1px solid #d3d3d3",
                          fontSize: "1.3rem",
                          transition: "all 0.3s",

                          ":last-child": {
                            borderBottom: "none",
                          },

                          ":hover": {
                            transform: "translateX(25px)",
                          },
                        }}
                      >
                        <Link
                          href={value.link}
                          style={{
                            color: "black",
                            textDecoration: "none",
                            display: "block",
                          }}
                        >
                          {value.name}
                        </Link>
                      </Box>
                    ))}
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={8} sx={{}}>
              {children}
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box>{children}</Box>
      )}
    </HeroContextProvider>
  );
}
