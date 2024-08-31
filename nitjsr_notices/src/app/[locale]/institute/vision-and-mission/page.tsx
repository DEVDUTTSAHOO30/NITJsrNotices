"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

export default function vision() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);
  return (
    <>
      <HeroText>{t("Vision_and_Mission")}</HeroText>
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
          {t("heading_our_vision")}
        </Typography>
      </Box>
      <Typography color="#757575" align="justify">
        {t("our_vision_para")}
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
          {t("heading_our_mission")}
        </Typography>
      </Box>
      <Typography color="#757575" align="justify">
        {t("our_mission_para")}
      </Typography>
    </>
  );
}
