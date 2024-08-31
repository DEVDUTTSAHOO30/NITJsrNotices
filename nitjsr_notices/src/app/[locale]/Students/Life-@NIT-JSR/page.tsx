"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";

import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import Image from "next/image";
import img1 from "../../../../assets/images/Life-@NIT_JSR/noragging.jpg";
import img2 from "../../../../assets/images/Life-@NIT_JSR/img1.jpg";
import img3 from "../../../../assets/images/Life-@NIT_JSR/img2.jpg";
import img4 from "../../../../assets/images/Life-@NIT_JSR/img3.jpg";
import img5 from "../../../../assets/images/Life-@NIT_JSR/nescafe.jpeg";

export default function AboutNITJSR() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);

    return (
        <>
            <HeroText>{t("Life_@NIT_JSR")}</HeroText>
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
                    {t("laN-1")}
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap"
            }}>
                <Image
                    src={img2}
                    alt="souvenir"
                    width="300"
                    height="200"
                    style={{
                        marginLeft: "3rem",
                        marginRight: "3rem",
                        marginBottom: "1rem",
                        marginTop: "1rem",
                        borderRadius:"5px"
                    }}
                /><Image
                    src={img3}
                    alt="souvenir"
                    width="300"
                    height="200"
                    style={{
                        marginLeft: "3rem",
                        marginRight: "3rem",
                        marginBottom: "1rem",
                        marginTop: "1rem",
                        borderRadius:"5px"
                    }}
                /><Image
                    src={img4}
                    alt="souvenir"
                    width="300"
                    height="200"
                    style={{
                        marginLeft: "3rem",
                        marginRight: "3rem",
                        marginBottom: "1rem",
                        // marginTop: "1rem",
                        borderRadius:"5px"
                    }}
                /><Image
                    src={img5}
                    alt="souvenir"
                    width="300"
                    height="200"
                    style={{
                        marginLeft: "3rem",
                        marginRight: "3rem",
                        marginBottom: "1rem",
                        // marginTop: "1rem"
                        borderRadius:"5px"
                    }}
                />
            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("laN-2")}
            </Typography>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("laN-3")}
            </Typography>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("laN-4")}
            </Typography>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("laN-5")}
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
                    {t("about_heading")}
                </Typography>
            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("laN-2")}
            </Typography>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("laN-3")}
            </Typography>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("laN-4")}
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
                    {t("sl-3")}
                </Typography>
            </Box>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: '2rem'
            }}>
                <Image
                    src={img1}
                    alt="souvenir"
                    width="500"
                    height="500"
                    style={{
                        objectFit: "cover",
                        maxWidth: "100%",
                        height: "auto",
                        verticalAlign: "middle",
                    }}
                />
            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("sl-4")}
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
                    {t("sl-5")}
                </Typography>
            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                <ul>
                    <li>
                        <b>Social / Entertainment :</b>Games & Sports:Gymkhana-Tennis
                        Courts-Basketball Court; Vishwakarma Sabha Griha-Clubs-Eateries
                    </li>
                    <li>
                        <b>Infrastructure :</b>24 hr Power-Water-Network-Well maintained
                        Roads
                    </li>
                    <li><b>
                        Amenities Available in the Campus</b>
                    </li>
                    <li>
                        Nescafe
                    </li>
                    <li>
                        Juice Corner
                    </li>
                    <li>
                        Desi food court
                    </li>
                    <li>
                        Continental stall
                    </li>
                    <li>
                        Night canteen for every hostel
                    </li>
                    <li>
                        Photocopy and Stationary stall
                    </li>
                    <li>
                        NIT Store
                    </li>
                    <li>
                        Sudha Milk parlour
                    </li>

                    <li>
                        Barber shop
                    </li>
                    <li>
                        SBI and ICICI Bank ATM
                    </li>
                </ul>
                Visit our wiki page for{" "}
                <a style={{ textDecoration: "none", color: "#38A1F3" }} href="https://en.wikipedia.org/wiki/National_Institute_of_Technology,_Jamshedpur">
                    more
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
                    {t("sl-7")}
                </Typography>
            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {t("sl-6")}
            </Typography>



        </>
    );
}
