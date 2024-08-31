"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Hidden, Typography } from "@mui/material";
import colors from "@/theme/colors";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import Image from "next/image";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

import CVO_HL_Yadav from "../../../../assets/images/CVO_HL_Yadav.jpg";

export default function ChiefVigilanceOfficer() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  return (
    <>
      <HeroText>Cheif Vigilance Officer</HeroText>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4em",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            bottom: 0,
            width: "100%",
            maxWidth: "1250px",
            backgroundColor: colors.secondary,
            py: 1,
            px: 2,
            my: 2,
          }}
        >
          <Typography variant="h5" color="common.white">
            Cheif Vigilance Officer
          </Typography>
        </Box>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            padding: 8,
            textAlign: "center",
          }}
        >
          <Image
            style={{
              borderRadius: 128,
              overflow: "Hidden",
            }}
            src={CVO_HL_Yadav}
            width={256}
            height={256}
            alt="Cvo"
          />
        </Box>
        <Typography variant="body1" sx={{ alignSelf: "center" }}>
          <b>Prof. Hira Lal Yadav</b>
        </Typography>
        <Typography variant="body1" sx={{ alignSelf: "center" }}>
          <b>CVO</b>(Cheif Vigilance Officer)
        </Typography>
        <Typography variant="body1" sx={{ alignSelf: "center" }}>
          Email-ID: cvo@nitjsr.ac.in
        </Typography>{" "}
        <Typography variant="body1" sx={{ alignSelf: "center" }}>
          Contact No: +91-657-237-XXXX
        </Typography>
      </Box>
    </>
  );
}
