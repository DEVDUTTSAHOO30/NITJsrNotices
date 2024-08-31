import React from "react";
import Image from "next/image";

import img1 from "../../assets/images/invalid_image.png";

import { Box } from "@mui/material";

export default function CurrentAchvCard({ item, fontsize }) {
  return (
    <Box
      sx={{
        transition: "all 0.3s ease-in-out",
        ":hover": {
          transform: "scale(1.05)",
        },
        maxWidth: "250px",
        height: "100%",
        margin: "auto",
        padding: "0.1rem",
      }}
    >
      <div
        className="achvCard text-center"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Image
          src={item.imageLink}
          alt="thumb"
          style={{
            maxWidth: "100%",
            borderRadius: "50%",
            height: "230px",
          }}
        />
        <div style={{ flex: 1, overflow: "auto" }}>
          <h5
            style={{
              fontSize: "1.2em",
              fontWeight: "700",
              letterSpacing: "-0.5px",
            }}
          >
            {item.title}
          </h5>
          <h5
            style={{
              fontSize: "1.2em",
              fontWeight: "700",
              letterSpacing: "-0.5px",
            }}
          >
            <Image
              src={item.desc}
              alt="thumb"
              className="thumbnailachImg"
              style={{
                width: "80%",
                height: "auto",
              }}
            />
          </h5>
        </div>
      </div>
    </Box>
  );
}
