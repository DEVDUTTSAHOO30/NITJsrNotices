"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import Link from '@mui/material/Link';
import {CustomStyledIcon , CustomParagraphWrapper} from '../Academic_style';
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
export default function AboutNITJSR() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);

    return (
        <>
            <HeroText>{t("heading_admissions")}</HeroText>
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
                    {t("heading_gen_info")}
                </Typography>
            </Box>
            <img src="https://imgtr.ee/images/2023/06/07/pe14Y.png" className="img-fluid" alt="souvenir"></img>
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
                    {t("admissions_subtitle")}
                </Typography>
            </Box>
            <Typography color="#757575" align="justify">
                {t("subtitle_para")} 
            </Typography>
            <CustomParagraphWrapper>
                <Typography variant="body1" className="smallparatext">
                    {""}
                </Typography>
                <Typography variant="body1" className="smallparatext">
                    {/* <Icon icon={chevronCircleRight} fontSize="small" />{" "} */}
                    <div style={{ display: "flex", alignItems: "start" }} >
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}><CustomStyledIcon />
                            <b className="course_type">{t("course1")}</b></div>
                    </div>
                    <Typography color="#757575" variant="body1" className="pl-3">
                        {t("course1_para")}&nbsp;
                        <span className="linktext">
                            <Link href="/Academic/B.Tech_Admission" className="linktext">
                                {t("admission_link1")}
                            </Link>
                        </span>
                    </Typography>
                </Typography>

                <Typography variant="body1" className="smallparatext">
                    {""}
                </Typography>
                <Typography variant="body1" className="smallparatext">
                    {/* <Icon icon={chevronCircleRight} fontSize="small" />{" "} */}
                    <div style={{ display: "flex", alignItems: "start" }} >
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}><CustomStyledIcon />
                            <b className="course_type">{t("course2")}</b></div>
                    </div>
                    <Typography color="#757575" variant="body1" className="pl-3">
                        {t("course2_para")}&nbsp;
                        <span className="linktext">
                            <Link href="/Academic/B.Tech_Admission" className="linktext">
                                {t("admission_link1")}
                            </Link>
                        </span>
                    </Typography>
                </Typography>
                <Typography variant="body1" className="smallparatext">
                    {""}
                </Typography>
                <Typography variant="body1" className="smallparatext">
                    {/* <Icon icon={chevronCircleRight} fontSize="small" />{" "} */}
                    <div style={{ display: "flex", alignItems: "start" }} >
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}><CustomStyledIcon />
                            <b className="course_type">{t("course3")}</b></div>
                    </div>
                    <Typography color="#757575" variant="body1" className="pl-3">
                        {t("course3_para")}&nbsp;
                        <span className="linktext">
                            <Link href="/Academic/B.Tech_Admission" className="linktext">
                                {t("admission_link1")}
                            </Link>
                        </span>
                    </Typography>
                </Typography>

                <Typography variant="body1" className="smallparatext">
                    {""}
                </Typography>
                <Typography variant="body1" className="smallparatext">
                    {/* <Icon icon={chevronCircleRight} fontSize="small" />{" "} */}
                    <div style={{ display: "flex", alignItems: "start" }} >
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}><CustomStyledIcon />
                            <b className="course_type">{t("course4")}</b></div>
                    </div>
                    <Typography color="#757575" variant="body1" className="pl-3">
                        {t("course4_para")}&nbsp;
                        <span className="linktext">
                            <Link href="/Academic/B.Tech_Admission" className="linktext">
                                {t("admission_link1")}
                            </Link>
                        </span>
                    </Typography>
                </Typography>

                <Typography variant="body1" className="smallparatext">
                    {""}
                </Typography>
                <Typography variant="body1" className="smallparatext">
                    {/* <Icon icon={chevronCircleRight} fontSize="small" />{" "} */}
                    <div style={{ display: "flex", alignItems: "start" }} >
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}><CustomStyledIcon />
                            <b className="course_type">{t("course5")}</b></div>
                    </div>
                    <Typography color="#757575" variant="body1" className="pl-3">
                        {t("course5_para")}&nbsp;
                        <span className="linktext">
                            <Link href="/Academic/B.Tech_Admission" className="linktext">
                                {t("admission_link1")}
                            </Link>
                        </span>
                    </Typography>
                </Typography>

            </CustomParagraphWrapper>
        </>
    );
}
