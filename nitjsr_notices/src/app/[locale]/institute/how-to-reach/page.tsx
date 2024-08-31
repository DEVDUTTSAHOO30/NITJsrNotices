"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import React from "react";

import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

import colors from "@/theme/colors";
function page() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  return (
    <>
      <HeroText>{t("howreach-head")}</HeroText>
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
          {t("how-intro")}
        </Typography>
      </Box>
      <Typography color="#757575" align="justify">
        {t("intro-body")}
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
          {t("air")}
        </Typography>
      </Box>
      <Typography color="#757575" align="justify">
        <strong>{t("bmairp")}</strong> {t("air-content-1")}
      </Typography>
      <Typography color="#757575" align="justify">
        <strong>{t("air-content-2")}</strong> {t("air-content-3")}
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
          {t("rail")}
        </Typography>
      </Box>
      <Typography color="#757575" align="justify">
        {t("rail-content-1")}
      </Typography>
      <Typography color="#757575" align="justify">
        {t("rail-content-2")}
      </Typography>
      <Typography color="black" align="justify" marginTop={"25px"}>
        {t("rail-highway-1")}
      </Typography>
      <Typography color="black" align="justify">
        {t("rail-highway-2")}
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
          {t("direction-head")}
        </Typography>
      </Box>
      <Typography color="#757575" align="justify">
        {t("dir-para1")} <strong> {t("dir-parabold")} </strong> {t("dir-para2")}
      </Typography>
      <Typography color="#757575" align="justify" marginTop={"1em"}>
        {t("dir-para3")}
      </Typography>
      <div style={{ width: "100%" }}>
        <iframe
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Q4GV+RJ5,%20Adityapur,%20Jamshedpur,%20Jharkhand%20831014+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
        </iframe>
      </div>
    </>
  );
}

export default page;
