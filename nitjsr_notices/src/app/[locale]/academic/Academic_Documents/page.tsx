"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import { SectionWrapper, CustomStyledIcon } from "../Academic_style"
import {object} from "../data_academic"
import { GetApp } from '@mui/icons-material';
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

export default function AboutNITJSR() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);
    
    return (
        <>
            <HeroText>{t("head_acad_documents")}</HeroText>

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
                    &nbsp;&nbsp; {t("academic_documents_title1")}
                </Typography>
            </Box>

            <SectionWrapper>
                <Typography variant="body1" className="smallparatext">
                    {/* <Icon icon={chevronCircleRight} fontSize="small" />{" "} */}
                    <a
                        href="https://nitjsr.ac.in/backend/uploads/uploads_2023/Academic Calendar 2023-24/Academic Calendar 2023-2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "16px", textDecoration: "none" }}
                        className="pdfLink"
                    >
                        <div style={{ display: "flex", alignItems: "start" }} >
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}><CustomStyledIcon />
                                <b className="course_type"> &nbsp;&nbsp; {"Academic Calender 2023-2024"}</b></div>
                        </div></a>
                </Typography>
            </SectionWrapper>
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
                    &nbsp;&nbsp; {t("academic_documents_title2")}
                </Typography>
            </Box>
            <SectionWrapper>
                <Typography variant="body1" className="smallparatext">
                    {/* <Icon icon={chevronCircleRight} fontSize="small" />{" "} */}
                    <a
                        href="https://nitjsr.ac.in/backend/uploads/notices/7ad093d7-dc7b-4986-9cb1-58947d61d93e-Holiday%20List%202023.PDF"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: "16px", textDecoration: "none" }}
                        className="pdfLink"
                    >
                        <div style={{ display: "flex", alignItems: "start" }} >
                            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "15px" }}><CustomStyledIcon />
                                <b className="course_type"> &nbsp;&nbsp; {"Holiday list 2023"}</b></div>
                        </div></a>
                </Typography>
            </SectionWrapper>
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
                    &nbsp;&nbsp; {t("head_other_imp_documents")}
                </Typography>
            </Box>
            <SectionWrapper>
                {object.map((item, id) => (
                    <div
                        key={`list_key${id}`}
                        className="row border-bottom pb-2 mb-2" style={{ marginBottom: "10px" }}
                    >
                        {/* <div>{item.id}</div> */}
                        <div className="col" style={{ borderBottom: "1px solid #dee2e6" }}>
                            <a href={item.link} style={{ color: "#6c757d ", fontWeight: "bolder", fontSize: "19px", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                                <b className="text-secondary">{item.text}</b>
                            </a>
                            <div className="row" style={{display : "flex" }}>
                                <div style={{ fontSize: "19px" , width : "50%" }} className="col-md-6">
                                    {/* <span
                          className="badge badge-pill "
                          style={{ background: "#274086", color: "white" }}
                        > */}
                                    {item.date}
                                    {/* </span> */}

                                </div>
                                <div className="col-md-6 text-right" style={{ textAlign: "right", width : "50%"  }} >
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {/* <FiDownload size="25px" /> */}

                                        <GetApp />
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </SectionWrapper >
        </>
    );
}
