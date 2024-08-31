"use client";
import { useEffect, useState } from "react";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import Members from "@/components/member-container/members-container";
import "../../../../components/member-container/members-container.css";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import Minutes from "@/components/minutes/minutes";
export default function BoardOfGoverners() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  let minutes = [
    {
      name: "50th Meeting",
      link: "#",
    },
    {
      name: "49th Meeting",
      link: "#",
    },
    {
      name: "48th Meeting",
      link: "#",
    },
    {
      name: "47th Meeting",
      link: "#",
    },
    {
      name: "46th Meeting",
      link: "#",
    },
    {
      name: "45th Meeting",
      link: "#",
    },
    {
      name: "44th Meeting",
      link: "#",
    },
    {
      name: "43th Meeting",
      link: "#",
    },
    {
      name: "42th Meeting",
      link: "#",
    },
    {
      name: "41th Meeting",
      link: "#",
    },
    {
      name: "40th Meeting",
      link: "#",
    },
  ];

  return (
    <>
      <HeroText> {t("Board_of_Governers")} </HeroText>
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
          {t("heading_board_of_members")}
        </Typography>
      </Box>
      <div>
        <Members
          designation={"Chairman"}
          data={[
            {
              id: 1,
              name: "Prof. Goutam Sutradhar",
              other_info: "",
            },
          ]}
        />
        <Members
          designation={"Director (Ex-Officio) Member"}
          data={[
            {
              id: 1,
              name: "Prof. Goutam Sutradhar",
              other_info:
                "Director, National Institute of Technology Jamshedpur",
            },
          ]}
        />
        <Members
          designation={"Member (Ex-Officio), MoE, GoI"}
          data={[
            {
              id: 1,
              name: "Sh. Sanjog Kapoor",
              other_info: "JS & FA, MoE, GoI",
            },
            {
              id: 2,
              name: "Ms. Saumya Gupta",
              other_info: "J.S. (NIT), MoE, GoI",
            },
          ]}
        />
        <Members
          designation={"Nominee of the Council of NIT"}
          data={[
            {
              id: 1,
              name: "",
              other_info: "",
            },
          ]}
        />
        <Members
          designation={"Nominee of the State Government"}
          data={[
            {
              id: 1,
              name: "",
              other_info: "Director, DHTE & SD \n Govt. of Jharkhand",
            },
            {
              id: 2,
              name: "Prof. D.K. Singh",
              other_info: "Director, BIT Sindri\nDhanbad Rd, Sindri, Jharkhand",
            },
          ]}
        />
        <Members
          designation={"Member"}
          data={[
            {
              id: 1,
              name: "Prof. T.N. Singh",
              other_info: "Director, Indian Institute of Technology Patna",
            },
          ]}
        />
        <Members
          designation={"Senate Nominee"}
          data={[
            {
              id: 1,
              name: "Prof. R.V. Sharma",
              other_info:
                "Professor\nDepartment of Mech. Engg.\nNIT Jamshedpur",
            },
            {
              id: 2,
              name: "Dr. Rajiv Bhushan",
              other_info:
                "Associate Professor\nDepartment of HSSM\nNIT Jamshedpur",
            },
          ]}
        />
        <Members
          designation={"Secretary"}
          data={[
            {
              id: 1,
              name: "Col. (Dr.) Nisheeth Kumar Rai (Retd.)",
              other_info: "Registrar\nNIT Jamshedpur",
            },
          ]}
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
            {t("heading-min_of_meet")}
          </Typography>
        </Box>

        <Minutes minutes={minutes} />
      </div>
    </>
  );
}
