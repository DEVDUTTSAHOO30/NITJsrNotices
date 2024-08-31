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
            <HeroText>{t("Placements")}</HeroText>
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
                    {t("Placements")}
                </Typography>
            </Box>
            <Typography color="#000000" variant="h2" align="justify"
                sx={{
                    marginTop: 0,
                    marginBottom: '1rem'
                }}
            >
                TAP @ NIT JSR
            </Typography>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    lineHeight: '2rem'
                }}
            >
                {t("placements_tap1")}
            </Typography>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    lineHeight: '2rem'
                }}
            >
                {t("placements_tap2")}
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
                    {"Statistics"}
                </Typography>
            </Box>

            <Image
                src="https://nitjsr.ac.in/backend/uploads/uploads_2023/Placement/Placement_Statistics_2022-23.jpg"
                alt="souvenir"
                width="1000"
                height="1000"
                style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                    verticalAlign: "middle",
                }}
            />
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
                    {"Placement Brochure"}
                </Typography>
            </Box>
            <Typography color="#757575" variant="h6" sx={{
                fontWeight: 700
            }}>PLACEMENT BROCHURE 2023-2024 :
                <a
                    href="https://nitjsr.ac.in/backend/uploads/uploads_2023/Placement/Placement%20Brochure-2023-24.pdf"
                    rel="noreferrer"
                    target={"_blank"}
                    style={{ "textDecoration": "none" }}
                >
                    {"Link"}
                </a></Typography>
            <Typography color="#757575" variant="h6" sx={{
                fontWeight: 700
            }}>JOB ANNOUNCEMENT FORM (Session 2023-24) :
                <a
                    href="https://nitjsr.ac.in/backend/uploads/uploads_2023/Placement/JAF_2023-24.pdf"
                    rel="noreferrer"
                    target={"_blank"}
                    style={{ "textDecoration": "none" }}
                >
                    {"Link"}
                </a>
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
                    {"Faculty Coordinators for the Session 2023-2024"}
                </Typography>

            </Box>
            <Image
                src="https://nitjsr.ac.in/backend/uploads/uploads_2023/Placement/nitjsr-PLACEMENT-BROCHURE.png"
                alt="souvenir"
                width="1000"
                height="1000"
                style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                    verticalAlign: "middle",
                }}
            />
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
                    {"Faculty Coordinators for the Session 2023-2024"}
                </Typography>

            </Box>
            <Image
                src="https://nitjsr.ac.in/backend/uploads/uploads_2023/Placement/ug.jpg"
                alt="souvenir"
                width="1000"
                height="1000"
                style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                    verticalAlign: "middle",
                }}
            />
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
                    {"Faculty Coordinators for the Session 2023-2024"}
                </Typography>

            </Box>
            <Image
                src="https://nitjsr.ac.in/backend/uploads/uploads_2023/Placement/pg.jpg"
                alt="souvenir"
                width="1000"
                height="1000"
                style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                    verticalAlign: "middle",
                }}
            />
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
                    {"Faculty Coordinators for the Session 2023-2024"}
                </Typography>

            </Box>
            <Image
                src="https://nitjsr.ac.in/backend/uploads/uploads_2023/Placement/phd.jpg"
                alt="souvenir"
                width="1000"
                height="1000"
                style={{
                    objectFit: "cover",
                    maxWidth: "100%",
                    height: "auto",
                    verticalAlign: "middle",
                }}
            />

        </>
    );
}
