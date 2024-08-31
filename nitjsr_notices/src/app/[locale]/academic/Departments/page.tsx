"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import Link from '@mui/material/Link';
import { SectionWrapper, StyledSquareIcon } from "../Academic_style"
import { branches } from "../data_academic";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
export default function AboutNITJSR() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);

    return (
        <>
            <HeroText>{t("departments_title")}</HeroText>

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
                    {t("departments_title")}
                </Typography>
            </Box>

            <SectionWrapper className="pl-3">
                {branches.map((branch, index) => {
                    return (
                        <div key={index} className="single_branch_div" style={{ marginBottom: "10px" }}>
                            <Link href={branch.link} style={{ textDecoration: "none", color: "#496bb4", fontWeight: "700", fontSize: "18px" }}>
                                <span className="branch_name" style={{display : "flex" , alignItems : "center" , gap : "4px"  }}><StyledSquareIcon style={{ color: "transparent", height: "10px", width: "10px" }} />{" " + t(branch.text)}</span>
                            </Link>
                        </div>
                    );
                })}
            </SectionWrapper>
        </>
    );
}
