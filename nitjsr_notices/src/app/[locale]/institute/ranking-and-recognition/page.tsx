"use client";

import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";

import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

import Link from "next/link";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";

export default function rankingandrecognition() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  return (
    <>
      <HeroText>{t("head_ranking_and_recognition")}</HeroText>
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
          {t("subhead_ins_rank_title")}
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" paddingTop={2} paddingBottom={1}>
          <u>NIRF 2024</u>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://drive.google.com/file/d/17a-MccsQ9fQ41jv_poy8nGJAIpOqi9tz/view?usp=sharing"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("nirf2024_submitted")}
            </Link>
          </p>
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" paddingTop={2} paddingBottom={1}>
          <u>NIRF 2023</u>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://www.nitjsr.ac.in/backend/uploads/old_rankings/NIRF/2023/NIRF%20INDIA%20RANKINGS%202023%20(ENGINEERING).pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("nirf2023_engineering")}
            </Link>
          </p>
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://www.nitjsr.ac.in/backend/uploads/old_rankings/NIRF/2023/NIRF%20INDIA%20RANKINGS%202023%20(INNOVATION).pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("nirf2023_innovation")}
            </Link>
          </p>
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://www.nitjsr.ac.in/backend/uploads/old_rankings/NIRF/2023/NIRF2023%20Submitted%20data.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("nirf2023_submitted")}
            </Link>
          </p>
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" paddingTop={2} paddingBottom={1}>
          <u>NIRF 2022</u>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://www.nitjsr.ac.in/backend/uploads/old_rankings/NIRF/2022/NIRF-2022%20INDIA%20RANK%20(ENGINEERING).pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("nirf2022_engineering")}
            </Link>
          </p>
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NIRF/2022/NIRF 2022 Committee.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("nirf2022_committee")}
            </Link>
          </p>
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NIRF/2022/NIRF-2022 Submitted Data.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("nirf2022_submitted")}
            </Link>
          </p>
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" paddingTop={2} paddingBottom={1}>
          <u>NIRF 2021</u>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NIRF/2021/NIRF-2021%20INDIA%20RANK(ENGG.).pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("nirf2021_engineering")}
            </Link>
          </p>
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NIRF/2021/NIRF-2021%20Submitted%20Data.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("nirf2021_submitted")}
            </Link>
          </p>
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" paddingTop={2} paddingBottom={1}>
          <u>NIRF 2020</u>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NIRF/2020/NIRF-2020%20INDIA%20RANK%20(ENGINEERING).pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("nirf2020_engineering")}
            </Link>
          </p>
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NIRF/2020/Submitted%20Institute%20Data%20for%20NIRF'2020'_NIT%20Jamshedpur.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("nirf2020_submitted")}
            </Link>
          </p>
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" paddingTop={2} paddingBottom={1}>
          <u>NIRF 2019</u>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NIRF/2019/(1)%20NIRF_2019_All%20Report-MHRD,%20National%20Institutional%20Ranking%20Framework%20(NIRF).pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("nirf2019_submitted")}
            </Link>
          </p>
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" paddingTop={2} paddingBottom={1}>
          <u>NIRF 2018</u>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NIRF/2018/All%20Report-MHRD,%20National%20Institutional%20Ranking%20Framework%20(NIRF).pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("nirf2019_submitted")}
            </Link>
          </p>
        </Typography>
      </Box>

      {/* nba  */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          bottom: 0,
          backgroundColor: colors.secondary,
          py: 1,
          px: 2,
          mb: 2,
          mt: 6,
        }}
      >
        <Typography variant="h5" color="common.white">
          {t("nba")}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" paddingTop={2} paddingBottom={1}>
          <u>{t("Program Accrediated")}</u>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/recents/National%20Institute%20of%20Technology,%20Jharkhand27_10_2022_11_27_32%20(2).pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("Accreditation Status")} 2022
            </Link>
          </p>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NBA/Accreditation%20status_NITJSR_NBA%20VISIT_09%20TO%2011%20AUGUST%202019-new.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("Accreditation Status")} 2019
            </Link>
          </p>
        </Typography>
      </Box>

      <Box>
        <Typography variant="h5" paddingTop={2} paddingBottom={1}>
          <u>{t("Notice")}</u>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NBA/NOTICE/NBA%2019%20team%20Visit%20Schedule.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("notice_1")}
            </Link>
          </p>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NBA/NOTICE/course%20prep-converted.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("notice_2")}
            </Link>
          </p>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NBA/NOTICE/directors%20meeting%20with%20faculty%20students%20and%20satff%20for%20accdn.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("notice_3")}
            </Link>
          </p>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NBA/NOTICE/New%20Microsoft%20Office%20Word%20Document%20(2)-converted.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("notice_4")}
            </Link>
          </p>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NBA/NOTICE/Points%20to%20be%20observed%20during%20NBA%20visit%202019-converted.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("notice_5")}
            </Link>
          </p>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NBA/NOTICE/NBA%20visit_Director's%20Presentation%20on%2009-08-2019%20at%209_20%20am%20in%20Senate%20room%20(%201st%20floor%20of%20old%20library).pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("notice_6")}
            </Link>
          </p>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NBA/NOTICE/First%20year%20faculty%20meeting%20with%20the%20Chairman,%20NBA%20_%20venue%20change%20notice.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("notice_7")}
            </Link>
          </p>
        </Typography>
        <Typography color="#757575" align="justify">
          <p>
            <CloudDownloadIcon sx={{ fontSize: 18 }} />
            <Link
              href="https://nitjsr.ac.in/backend/uploads/old_rankings/NBA/NOTICE/Day%201%20NBA%20VISIT%20Schedule.pdf"
              target="_blank"
              style={{ textDecoration: "none", color: "#003A6E" }}
            >
              &nbsp;&nbsp; {t("notice_8")}
            </Link>
          </p>
        </Typography>
      </Box>
    </>
  );
}
