"use client";

import React from "react";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import Image from "next/image";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import Img1 from "@/assets/images/Organizational Chart.jpg";
import Link from "next/link";
import DownloadForOfflineSharpIcon from "@mui/icons-material/DownloadForOfflineSharp";

function page() {
  // const locale = getLocaleClient();
  // const t = getTranslations(locale);
  const locale = getLocaleClient();
  const t = getTranslations(locale);
  return (
    <>
      {" "}
      <HeroText>Organizational Chart</HeroText>
      <Image
        src={Img1}
        alt="Nimcet"
        style={{
          objectFit: "cover",
          maxWidth: "100%",
          height: "auto",
          verticalAlign: "middle",
        }}
      />
      <Typography>
        <Link
          href="https://nitjsr.ac.in/backend/uploads/uploads_2023/Organizational Chart2.pdf"
          target="_blank"
        >
          <b> NIT Jamshedpur Organizational Chart</b>
          <DownloadForOfflineSharpIcon
            sx={{
              fontSize: 30,
              paddingTop: 1,
              marginBottom: 0,
            }}
          />
        </Link>
      </Typography>
    </>
  );
}

export default page;
