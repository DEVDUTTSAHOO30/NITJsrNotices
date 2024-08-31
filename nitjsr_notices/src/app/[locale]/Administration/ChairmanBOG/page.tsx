"use client";
import HeroText from "@/components/hero/hero-text";
import { Box } from "@mui/material";
import colors from "@/theme/colors";
import Chairman from "../../../../assets/images/ChairmanBOG.jpeg";
import Image from "next/image";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
export default function AboutNITJSR() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  return (
    <>
      <HeroText>{t("Chairman,_BOG")}</HeroText>

      <Box
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4em",
          flexDirection: "column",
          border: "1px solid black",
          margin: "3em",
        }}
      >
        <Box
          style={{
            height: "400px",
            width: "300px",
            position: "relative",
          }}
        >
          <Image src={Chairman} alt="Chairman BOG" layout="fill" />
        </Box>
        <Box
          style={{
            color: colors.black,
            padding: "1em",
            fontSize: "20px",
            fontWeight: "bold",
            width: "100%",
            textAlign: "center",
          }}
        >
          <Box style={{ margin: "1em" }}> Sri Krishna Prasad, IPS(Retd.)</Box>
          <Box>
            Former Director Generel of Police and Chairman, Road Safety
            Authority, Telangana
          </Box>
          <Box>Contact : chairman.bog@nitjsr.ac.in</Box>
        </Box>
        <Box style={{ color: colors.secondary, fontSize: "1.2rem" , margin:"0" }}>
          <p>
            Mr. T. Krishna Prasad is currently serving as Chairman BOG, NIT
            Jamshedpur. Mr. Prasad earned a Bachelor of Mechanical Engineering
            degree from National Institute of Technology Warangal, India in 1983
            and a PGDM degree from Indian Institute of Management, Ahmedabad in
            1985. He also has his LLB from Osmania University in 2019 and doing
            Ph.D. in Sustainable Urban Mobility from Osmania University. He is
            an IPS officer of 1986 batch, Telangana Cadre. He is Former DGP &
            Chairman Road Safety Authority Telangana State. He decorated with
            prestigious Indian Police Medal, President’s Police Medal and Antrik
            Suraksha Seva Padak for surrender and rehabilitation of Naxal
            movement members. He is also recognized twice by IIMA Alumni
            Hyderabad Chapter as Distinguished Alumni (2008 & 2018) and
            Recognized as Distinguished Alumni by NIT Warangal (2019). As an IPS
            officer he has contributed as a District Superintendent of Police
            (Nellore, Vizag, Guntur and Medak) and DIG of Warangal Range (4
            districts) and Vizag Range (3 districts) and executed the Surrender
            and rehabilitation of more than 100 Naxals. He also serves as
            Inspector General of Police (Served as IG Grey Hounds, APPA, APSRTC)
            (2008 – 2012) and Additional Director General and Chief of CID of
            United AP (2012 – 2014). As an Officer he has also contributed in
            industrial development of AP and Telangana. He was CMD Leather
            Industries Corporation of AP. Conceptualized and implemented MALUPU
            program who trained about 1,62,000 Below the Poverty Line SC leather
            artisans and created Leather Clusters in 5000 Acres. He also worked
            as Executive Director, AP Industrial Infrastructure Corporation,
            participated in development of several infrastructure projects
            including: (i) Hyderabad International Airport (ii) Cyber Towers and
            HITEC City (iii) Hyderabad Financial District (iv) Hyderabad Golf
            Course – Boulder Hills (v) Hyderabad International Convention Centre
            (HICC) and HITEX (vi) Gangavaram Port (vii) Krishnapatnam Port and
            17 other mega Infrastructure Projects. Sri T. KRISHNA PRASAD, IPS is
            a highly qualified and accomplished Officer with exemplary qualities
            of leadership. He is highly innovative and reputed for taking his
            organization to greater heights. He specializes in Road Safety and
            the development of Infrastructure Projects under Public Private
            Partnership mode.
          </p>
        </Box>
      </Box>
    </>
  );
}
