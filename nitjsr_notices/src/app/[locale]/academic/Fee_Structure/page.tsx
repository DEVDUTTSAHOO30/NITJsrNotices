"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import { SectionWrapper,CustomStyledIcon } from "../Academic_style"
import { useState, useEffect } from "react";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

export default function AboutNITJSR() {

    const [feeStructureData, setFeeStructureData] = useState([]);
    const getFeeStructureData = async () => {
        await fetch("https://nitjsr.ac.in/backend/files/feeStructure.json")
            .then((response) => {
                if (!response.ok) {
                    console.log("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setFeeStructureData([...Object.values(data)]);
                console.log(feeStructureData)
            })
            .catch((err) => {});

    };


    const locale = getLocaleClient();
    const t = getTranslations(locale);
    useEffect(() => {
        getFeeStructureData();

    }, []);
    return (
        <>
            <HeroText>{t("head_fee_str")}</HeroText>

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
                    {"Fee Structure"}
                </Typography>
            </Box>

            <SectionWrapper>
                {feeStructureData.length < 1 ? (
                    <p style={{ fontSize: "19px" }}>&nbsp; &nbsp; No Data</p>
                ) : (
                    feeStructureData.map((data) => {
                        return (
                            <a href={data?.link} style={{textDecoration : "none"}}>
                                <p style={{ fontSize: "19px" }} className="pdfLink mb-6">
                                    <div style={{ display : "flex" ,alignItems: "center" }}>
                                    <CustomStyledIcon />
                                    &nbsp;&nbsp; {data?.title}
                                    </div>
                                </p>
                            </a>
                        );
                    })
                )}
            </SectionWrapper>

        </>
    );
}
