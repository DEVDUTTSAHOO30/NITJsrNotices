"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";

import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import Image from "next/image";

export default function AboutNITJSR() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);

    return (
        <>
            <HeroText>{t("HaW_0")}</HeroText>
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
                    {t("HaW_0")}
                </Typography>
            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    wordSpacing: '-2px'
                }}
            >
                {t("HaW_1")}
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
                    {t("HaW_2")}
                </Typography>
            </Box>

            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("HaW_3")}
            </Typography>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("HaW_4")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {t("HaW_5")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {t("HaW_5.1")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {t("HaW_6")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {t("HaW_7")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {t("HaW_8")}
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
                    {t("HaW_9")}
                </Typography>
            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("HaW_10")}
            </Typography>


            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {t("HaW_17")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {t("HaW_18")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {t("HaW_19")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {t("HaW_20")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {t("HaW_21")}
            </Typography>


            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginTop: '1rem'
                }}
            >
                {t("HaW_11")}
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
                    {t("central_facilities_hospital_pathological_head")}
                </Typography>
            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("central_facilities_hospital_pathological_body")}
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
                    {t("central_facilities_hospital_students_head")}
                </Typography>
            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("HaW_13")}
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
                    {t("central_facilities_hospital_referral_head")}
                </Typography>
            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("HaW_14")}
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
                    {t("central_facilities_hospital_visitingdoctorrs_head")}
                </Typography>
            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("HaW_15")}
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
                    {t("central_facilities_hospital_ambulance_head")}
                </Typography>
            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("HaW_16")}
            </Typography>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                }}
            >
                {t("Contact")}{" :"}
            </Typography>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("central_facilities_hospital_ambulance_phone")}
            </Typography>

        </>
    );
}
