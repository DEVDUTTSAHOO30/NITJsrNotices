"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

export default function AboutNITJSR() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  return (
    <>
      <HeroText>{t("head_about_nitjsr")}</HeroText>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          bottom: 0,
          backgroundColor: colors.secondary,
          py: 1,
          px: 2,
          my: 2,
        }}
      >
        <Typography variant="h5" color="common.white">
          {t("heading_about_us")}
        </Typography>
      </Box>
      <Typography color="#757575" align="justify">
        {t("about_us_para")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          bottom: 0,
          backgroundColor: colors.secondary,
          py: 1,
          px: 2,
          my: 2,
        }}
      >
        <Typography variant="h5" color="common.white">
          {t("head_location")}
        </Typography>
      </Box>
      <Typography color="#757575" align="justify">
        {t("location_para")} {t("to_view")}
        <a href="/" style={{ textDecoration: "none" }}>
          {t("academics_link")}
        </a>
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          bottom: 0,
          backgroundColor: colors.secondary,
          py: 1,
          px: 2,
          my: 2,
        }}
      >
        <Typography variant="h5" color="common.white">
          {t("head_history")}
        </Typography>
      </Box>
      <Typography></Typography>
      <Typography color="#757575" align="justify">
        {t("history_para")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          bottom: 0,
          backgroundColor: colors.secondary,
          py: 1,
          px: 2,
          my: 2,
        }}
      >
        <Typography variant="h5" color="common.white">
          {t("Address")}
        </Typography>
      </Box>
      <Typography color="#757575">
        NATIONAL INSTITUTE OF TECHNOLOGY, JAMSHEDPUR
      </Typography>
      <Typography color="#757575">
        NIT Campus, P.O .RIT Jamshedpur 831014, Jharkhand, India
      </Typography>
      <Typography color="#757575">
        <CallIcon fontSize="small" /> +91-657-2374108
      </Typography>
      <Typography color="#757575">
        Fax No. : +91-657-2382246, 2408811
      </Typography>
      <Typography color="#757575">
        <EmailIcon fontSize="small" /> director@nitjsr.ac.in
      </Typography>
    </>
  );
}
