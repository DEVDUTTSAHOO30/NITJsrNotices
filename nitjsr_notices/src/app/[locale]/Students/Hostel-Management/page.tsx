"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import Table from "@/components/Table";
import Minutes from "@/components/minutes/minutes";
import "../../../../components/member-container/members-container.css"
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
export default function FinanceCommittee() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  let GirlsHostel = [
    {
      name: "Hostel A",
      link: "#",
    },
    {
      name: "Hostel B",
      link: "#",
    },
    {
      name: "Hostel C",
      link: "#",
    },
    {
      name: "Hostel D",
      link: "#",
    },
    {
      name: "Hostel RLB",
      link: "#",
    },
    {
      name: "Hostel AHR",
      link: "#",
    },
    
  ];
  let Boyshostel = [
    {
      name: "Hostel E",
      link: "#",
    },
    {
      name: "Hostel F",
      link: "#",
    },
    {
      name: "Hostel G",
      link: "#",
    },
    {
      name: "Hostel H",
      link: "#",
    },
    {
      name: "Hostel H",
      link: "#",
    },
    {
      name: "Hostel I",
      link: "#",
    },
    {
      name: "Hostel J",
      link: "#",
    },
    {
      name: "Hostel K",
      link: "#",
    },
  ];
  return (
    <>
      <HeroText>{t("Hostel_Management")}</HeroText>
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
          {t("central_facilities_hostels_head")}
        </Typography>
      </Box>
      <Typography color="#757575" align="justify">
      {t("central_facilities_hostels_body")}
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
          {t("central_facilities_hostels_head_boys")}
        </Typography>
      </Box>
      
      <Minutes minutes={Boyshostel} />
      

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
          {t("central_facilities_hostels_head_girls")}
        </Typography>
      </Box>
      <Minutes minutes={GirlsHostel} />
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
          {t("central_facilities_hostels_rules_head")}
        </Typography>
      </Box>
      <a style={{color:"black"}} href="http://nitjsr.ac.in/sw/hostel/pdf/Rules%20and%20regulations%20for%20all%20hostels%20of%20the%20Institute.pdf"> <div style={{display:"flex", gap:"10px"}}><div><CloudDownloadIcon/></div> <div>{t("central_facilities_hostels_rules_body")}</div></div></a>
    </>
  );
}
