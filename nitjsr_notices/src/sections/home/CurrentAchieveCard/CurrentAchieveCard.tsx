import React from "react";

import Image from "next/image";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

import img1 from "../../assets/images/invalid_image.png";
// import img1 from "../../assets/images/companylogo/adobe.png";

import { Box } from "@mui/material";

export default function CurrentAchvCard({ item, fontsize }) {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

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
            width: "fit-content",
            borderRadius: "50%",
            height: "200px",
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
              //   preview={false}
              className="thumbnailachImg"
              style={{
                minWidth: "10%",
              }}
              //   fallback={img1}
            />
          </h5>
        </div>
      </div>
    </Box>
  );
}
