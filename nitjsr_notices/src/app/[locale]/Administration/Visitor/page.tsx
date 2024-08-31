"use client";
import HeroText from "@/components/hero/hero-text";
import { Box } from "@mui/material";
import colors from "@/theme/colors";
import President from "../../../../assets/images/PRESIDENT.jpg";
import Image from "next/image";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import Button from "@mui/material/Button";
export default function AboutNITJSR() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  return (
    <>
      <HeroText>{t("Visitor")}</HeroText>

      <Box
        style={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2em",
          flexDirection: "column",
          border: "1px solid black",
          margin: "2em",
        }}
      >
        <Box
          style={{
            height: "400px",
            width: "300px",
            position: "relative",
          }}
        >
          <Image src={President} alt="President of INDIA" layout="fill" />
        </Box>
        <Box
          style={{
            color: colors.black,
            padding: "1em",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <Box> {t("Smt. Droupadi Murmu")}</Box>
          <Box> {t("The President of India")}</Box>
        </Box>
        <Box>
          <Button variant="contained">
            {t("Official Website of the Visitor")}
          </Button>
        </Box>
      </Box>
    </>
  );
}
