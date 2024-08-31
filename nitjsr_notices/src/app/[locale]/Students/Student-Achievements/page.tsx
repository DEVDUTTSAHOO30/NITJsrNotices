"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography, Grid } from "@mui/material";
import colors from "@/theme/colors";
import { data } from "../../../../components/Student-Achievements/data";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import Image from "next/image";
import { useEffect, useState } from "react";
import CurrentAchvCard from "@/components/Student-Achievements/card";

export default function AboutNITJSR() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);

    return (
        <>
            <HeroText>{t("Student_Achievements")}</HeroText>
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
                    {t("Student_Achievements")}
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                flexWrap: "wrap"
            }}>
                {data.map((item, key) => (

                    <CurrentAchvCard
                        key={`event_card_${key}`}
                        item={item}
                    />

                ))}
                {data.length === 0 && (
                    <div>
                        <div className="singleCard text-center">
                            <p style={{ fontSize: 12 }} className="desc">
                                No data found
                            </p>
                        </div>
                    </div>
                )}
            </Box>
        </>
    );
}
