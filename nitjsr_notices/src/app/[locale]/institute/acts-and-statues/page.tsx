"use client";

import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";

import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

import Link from "next/link";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export default function actsandstatues() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  return (
    <>
      <HeroText>{t("head_acts")}</HeroText>
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
          {t("head_acts")}
        </Typography>
      </Box>

      <Typography color="#757575" align="justify">
        <CloudDownloadIcon sx={{ fontSize: 18 }} />
        <Link
          href="https://nitjsr.ac.in/backend/uploads/old_uploads/Gazette%20Notification%20Notifying%20the%20%20Amendments%20in%20First%20Statutes%20of%20NITs.pdf"
          target="_blank"
          style={{ textDecoration: "none", color: "#003A6E" }}
        >
          &nbsp;&nbsp; Gazette Notification Notifying the Amendments in First
          Statutes of NITs
        </Link>
      </Typography>
      <Typography color="#757575" align="justify">
        <CloudDownloadIcon sx={{ fontSize: 18 }} />
        <Link
          href="https://nitjsr.ac.in/backend/uploads/old_institute/NIT_ACT.pdf#"
          target="_blank"
          style={{ textDecoration: "none", color: "#003A6E" }}
        >
          &nbsp;&nbsp; Gazette Notification NIT Act 2007
        </Link>
      </Typography>
      <Typography color="#757575" align="justify">
        <CloudDownloadIcon sx={{ fontSize: 18 }} />
        <Link
          href="https://nitjsr.ac.in/backend/uploads/old_institute/NIT_statutes.pdf"
          target="_blank"
          style={{ textDecoration: "none", color: "#003A6E" }}
        >
          &nbsp;&nbsp; Gazette Notification NIT Statutes Dated 23/04/2009
        </Link>
      </Typography>
      <Typography color="#757575" align="justify">
        <CloudDownloadIcon sx={{ fontSize: 18 }} />
        <Link
          href="https://nitjsr.ac.in/backend/uploads/recents/Annexure%20and%20Gazette.pdf#"
          target="_blank"
          style={{ textDecoration: "none", color: "#003A6E" }}
        >
          &nbsp;&nbsp; Annexure and Gazette
        </Link>
      </Typography>
      <Typography color="#757575" align="justify">
        <CloudDownloadIcon sx={{ fontSize: 18 }} />
        <Link
          href="https://nitjsr.ac.in/backend/uploads/old_uploads/PAN%20&%20GST%20DETAILS.PDF"
          target="_blank"
          style={{ textDecoration: "none", color: "#003A6E" }}
        >
          &nbsp;&nbsp; Pan and Gst Details
        </Link>
      </Typography>
    </>
  );
}
