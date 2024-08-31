"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Grid, Hidden, Typography } from "@mui/material";
import colors from "@/theme/colors";
import { useState } from "react";
import Image from "next/image";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import Link from "next/link";
import director from "../../../../assets/images/director.jpg";
import { Breadcrumb } from "antd";
// import { Tabs } from "antd";
import { Radio, Tabs, Menu } from "antd";

import LearnMoreButton from "../../../../components/learn-more-button/learn-more-button";
import MessageFromDirector from "../../../../sections/DirectorProfileSections/MessageFromDirector/page";
import PublicationSection from "../../../../sections/DirectorProfileSections/PublicationSection/page";
import ResearchAreaSection from "../../../../sections/DirectorProfileSections/ResearchAreaSection/page";
import DelegationVisits from "../../../../sections/DirectorProfileSections/DelegationVisits/page";
import OtherInfoSection from "../../../../sections/DirectorProfileSections/OtherInfoSection/page";
import InterviewsArticles from "../../../../sections/DirectorProfileSections/InterviewsArticles/page";
import PhotoGallery from "../../../../sections/DirectorProfileSections/PhotoGallery/page";
import AreaOfInterest from "../../../../sections/DirectorProfileSections/AreaOfInterest/page";

type TabPosition = "left" | "right" | "top" | "bottom";
export default function Director() {
  // const [mode, setMode] = useState<"top" | "right" | "bottom" | "left">("top");
  const [mode, setMode] = useState<TabPosition>("top");
  const locale = getLocaleClient();
  const t = getTranslations(locale);
  const tabsData: { label: string; key: string; component: JSX.Element }[] = [
    {
      label: "Message from the Director",
      key: "main_1",
      component: <MessageFromDirector />,
    },
    {
      label: "Delegation Visits",
      key: "main_2",
      component: <DelegationVisits />,
    },
    {
      label: "Research Area",
      key: "main_3",
      component: <ResearchAreaSection />,
    },
    { label: "Publications", key: "main_4", component: <PublicationSection /> },
    {
      label: "Interviews/Articles",
      key: "main_5",
      component: <InterviewsArticles />,
    },
    { label: "Area of Interest", key: "main_6", component: <AreaOfInterest /> },
    { label: "Photo Gallery", key: "main_7", component: <PhotoGallery /> },
    { label: "Contact", key: "main_8", component: <OtherInfoSection /> },
  ];
  return (
    <>
      <HeroText>
        <p>{t("card_director")}</p>
      </HeroText>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4em",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            bottom: 0,
            width: "100%",
            maxWidth: "1250px",
            backgroundColor: colors.secondary,
            py: 1,
            px: 2,
            my: 2,
          }}
        >
          <Typography
            variant="h2"
            style={{
              fontSize: "2.0em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            color="common.white"
          >
            Prof. Goutam Sutradhar
          </Typography>
          <Typography
            variant="h2"
            style={{
              fontSize: "2em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* <Link href="#" style={{ color: "#677079", textDecoration: "none" }}>
              Home
            </Link> */}
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link
                  href="#"
                  style={{
                    color: "#677079",
                    textDecoration: "none",
                    fontSize: "1.2em",
                  }}
                >
                  Home
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link
                  href="/people/People_Home"
                  style={{
                    color: "#677079",
                    textDecoration: "none",
                    fontSize: "1.2em",
                  }}
                >
                  People
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link
                  href="/people/Faculty"
                  style={{
                    color: "#677079",
                    textDecoration: "none",
                    fontSize: "1.2em",
                  }}
                >
                  Faculty
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item className="text-light">
                <Link
                  href="/Administration/Director"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "1.2em",
                  }}
                >
                  Prof. Goutam Sutradhar
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
          </Typography>
        </Box>
        <Box
          gap={10}
          maxWidth={1250}
          sx={{
            display: "flex",
            flexDirection: "row",
            paddingTop: 8,
            paddingLeft: 8,
            paddingRight: 8,
            paddingBottom: 0,
            textAlign: "center",
            "@media (max-width: 1024px)": {
              flexDirection: "column",
            },
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 8,
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Image
              style={{
                borderRadius: 128,
                overflow: "Hidden",
                position: "relative",
              }}
              src={director}
              width={200}
              height={200}
              alt="Director"
            />
            <Typography variant="body1" sx={{ alignSelf: "center" }}>
              <b>Prof. Goutam Sutradhar</b>
              <p>Director</p>
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              style={{
                maxWidth: "100%",
                textAlign: "justify",
                color: "#677079",
              }}
            >
              {t("director_about")}
              <br />
              <Link
                target="__blank"
                href="https://nitjsr.ac.in/backend/uploads/uploads_2023/about_director/Profile%20of%20Professor%20%28Dr.%29%20Goutam%20Sutradhar%2C%20Director%20NIT%20Jamshedpur.pdf"
              >
                <LearnMoreButton>{t("show_more_button")}</LearnMoreButton>
              </Link>
            </Typography>
          </div>
        </Box>
        <Box
          gap={10}
          maxWidth={1250}
          sx={{
            margin: 8,
            textAlign: "center",
          }}
        ></Box>
      </Box>

      <Box
        gap={10}
        sx={{
          margin: "0 auto",
          maxWidth: 1250,
          textAlign: "center",

          "@media (max-width: 1250px)": {
            margin: "0 6em",
          },
        }}
      >
        <div
          style={{
            justifyContent: "center",
            maxWidth: 1250,
            margin: "0 auto",
            textAlign: "center",
            paddingBottom: "8em",
            // padding: "0 8em",
          }}
        >
          <Tabs
            defaultActiveKey="main_1"
            tabPosition={mode}
            items={tabsData.map((tab) => ({
              label: tab.label,
              key: tab.key,
              children: tab.component,
            }))}
          />
        </div>
      </Box>
    </>
  );
}
