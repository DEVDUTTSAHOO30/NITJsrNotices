"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import Table from "@/components/Table";
import Minutes from "@/components/minutes/minutes";

import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

export default function FinanceCommittee() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  let row = [
    {
      name: "Sri Krishna Prasad, IPS(Retd.)",
      post: "Chairman",
      email: "chairman.bog#",
    },
  ];
  let minutes = [
    {
      name: "50th Meeting",
      link: "#",
    },
    {
      name: "49th Meeting",
      link: "#",
    },
    {
      name: "48th Meeting",
      link: "#",
    },
    {
      name: "47th Meeting",
      link: "#",
    },
    {
      name: "46th Meeting",
      link: "#",
    },
    {
      name: "45th Meeting",
      link: "#",
    },
    {
      name: "44th Meeting",
      link: "#",
    },
  ];
  return (
    <>
      <HeroText>{t("Buildings_and_Works_Committee")}</HeroText>
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
          {t("Finance_Committee_members")}
        </Typography>
      </Box>
      <Table rows={row} />
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
          {t("heading-min_of_meet")}
        </Typography>
      </Box>
      <Minutes minutes={minutes} />
    </>
  );
}
