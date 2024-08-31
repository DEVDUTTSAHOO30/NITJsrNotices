"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import { SectionWrapper,CustomStyledIcon } from "../Academic_style"
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

export default function AboutNITJSR() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);

    return (
        <>
            <HeroText>{t("ordinance_title")}</HeroText>

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
                    {t("ordinance_title")}
                </Typography>
            </Box>

            <SectionWrapper>
                <Typography variant="body1" className="smallparatext">
                    {/* <Icon icon={chevronCircleRight} fontSize="small" />{" "} */}
                    <a
                        href="https://nitjsr.ac.in/backend/uploads/recents/ordinance/UG%20REGULATION.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "16px", textDecoration: "none" }}
                        className="pdfLink"
                    >
                        <div style={{ display: "flex", alignItems: "start" }} >
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}><CustomStyledIcon />
                                <b className="course_type">&nbsp;&nbsp; {t("ordinance_title_link1")}</b></div>
                        </div></a>
                </Typography>
            </SectionWrapper>
            <SectionWrapper>
                <Typography variant="body1" className="smallparatext">
                    {/* <Icon icon={chevronCircleRight} fontSize="small" />{" "} */}
                    <a
                        href="https://nitjsr.ac.in/backend/uploads/recents/ordinance/M.TECH%20REGULATION.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "16px", textDecoration: "none" }}
                        className="pdfLink"
                    >
                        <div style={{ display: "flex", alignItems: "start" }} >
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}><CustomStyledIcon />
                                <b className="course_type">&nbsp;&nbsp; {t("ordinance_title_link2")}</b></div>
                        </div></a>
                </Typography>
            </SectionWrapper>
            <SectionWrapper>
                <Typography variant="body1" className="smallparatext">
                    {/* <Icon icon={chevronCircleRight} fontSize="small" />{" "} */}
                    <a
                        href="https://nitjsr.ac.in/backend/uploads/recents/ordinance/RESEARCH_PROGRAMME_ORDINANCE.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "16px", textDecoration: "none" }}
                        className="pdfLink"
                    >
                        <div style={{ display: "flex", alignItems: "start" }} >
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}><CustomStyledIcon />
                                <b className="course_type">&nbsp;&nbsp; {t("ordinance_title_link3")}</b></div>
                        </div></a>
                </Typography>
            </SectionWrapper>
        </>
    );
}
