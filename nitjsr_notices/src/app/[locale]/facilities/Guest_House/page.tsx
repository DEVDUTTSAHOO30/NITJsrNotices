"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

export default function AboutNITJSR() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);

    return (
        <>
        <HeroText>{t("Guest_House_Head")}</HeroText>

        <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    lineHeight: '2rem'
                }}
            >
                {t("central_facilities_guesthouse_body")}
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
                    &nbsp;&nbsp; {t("central_facilities_contacts_head")}
                </Typography>
        </Box>

        <Typography variant="body1" color="#757575" sx={{
            fontSize: '1.1rem',lineHeight: '2.5rem' }} className="paragraph">
                <b>Dr. Vineet Sahoo</b>
                <br />
                <b>Faculty In-Charge(Guest House)</b>
                <br />
                Email-ID : fic.guesthouse@nitjsr.ac.in
                <br />
                Mobile No.: +91-657-237-4156
        </Typography>

        </>
    )
}