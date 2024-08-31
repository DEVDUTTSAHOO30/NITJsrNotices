"use client";
import HeroText from "@/components/hero/hero-text";
import { Box } from "@mui/material";
import colors from "@/theme/colors";
import Registrar from "../../../../assets/images/Registrar.jpeg";
import Image from "next/image";
import Grid from "@mui/material/Grid";
import CardContainer from "@/components/Card";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

export default function AboutNITJSR() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  return (
    <>
      <HeroText>{t("regis-head")}</HeroText>
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          margin: "auto",
          width: "90%",
          padding: "1em",
          marginTop: "2em",
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              style={{
                height: "250px",
                width: "250px",
                position: "relative",
                borderRadius: "50%",
              }}
            >
              <Image
                src={Registrar}
                alt="Registrar"
                layout="fill"
                style={{ borderRadius: "100%" }}
              />
            </Box>
            <Box
              style={{
                color: colors.black,
                fontSize: "22px",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {" "}
              {t("Colonel (Dr.) Nisheeth Kumar Rai (Retd.)")}{" "}
            </Box>
            <Box style={{ fontSize: "18px" }}> {t("card_registrar")} </Box>
          </Grid>
          <Grid item xs={8}>
            <Box style={{ textAlign: "center" }}>
              <h1 style={{ color: colors.primary }}>Registrar's Office </h1>
              <hr />

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CardContainer
                    title={"Mr. Manoj Kumar Jha"}
                    content={"Office Attendant"}
                  />
                </Grid>

                <Grid item xs={6}>
                  <CardContainer
                    title={"Mr. Bablu Sardar"}
                    content={"Office Attendant"}
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardContainer
                    title={"Mr. Chandramohan Mukhi"}
                    content={"Office Attendant"}
                  />
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Box style={{ margin: "2em" }}>
                <h1>Contacts</h1>
              </Box>
              <hr />
              <Box
                style={{ color: colors.text, fontSize: "18px", margin: "2em" }}
              >
                <Box>
                  <span style={{ color: colors.black }}> {t("Email")}: </span>
                  registrar@nitjsr.ac.in
                </Box>
                <Box>
                  <span style={{ color: colors.black }}> {t("Phone")}: </span>{" "}
                  0657-2373629(O)
                </Box>
                <Box>
                  <span style={{ color: colors.black }}> {t("Fax")}:</span>{" "}
                  0657-2373246
                </Box>
                <Box>{t("inst_add")}</Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
