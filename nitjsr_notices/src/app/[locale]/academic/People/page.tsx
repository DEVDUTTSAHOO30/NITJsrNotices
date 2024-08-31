"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import { CustomHeading, TableWrapper ,CustomTable } from "../Academic_style"
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";


export default function AboutNITJSR() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);

    return (
        <>
            <HeroText>{t("head_people")}</HeroText>

            <CustomHeading content={t("people_title2")} />
            <TableWrapper>
                <table className="table">
                    <thead>
                        <tr>
                            <th>{t("people_title2_thead1")}</th>
                            <th>{t("people_title2_thead2")}</th>
                            <th>{t("people_title2_thead3")}</th>
                        </tr>
                    </thead>
                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_title2_tbody1_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_title2_tbody1_tr2")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Contact">
                            0657 237 4131
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_title2_tbody2_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_title2_tbody2_tr2.1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Contact">
                        {t("Not Available")}
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_title2_tbody4_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_title2_tbody4_tr2")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Contact">
                            9417 923 801
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_title2_tbody5_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_title2_tbody5_tr2")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Contact">
                            7091 133 048
                        </td>
                    </tr>

                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_title2_tbody6_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_title1_tbody3_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Email">
                            8917590346
                        </td>
                    </tr>

                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_title2_tbody6_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_title2_tbody6_tr2")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Email">
                            9990742787
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_title2_tbody6_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_title2_tbody6_tr2.1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Email">
                            8436240573
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_title2_tbody6_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_title2_tbody6_tr2.2")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Email">
                            {t("Not Available")}
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_title2_tbody6_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_title2_tbody6_tr2.3")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Email">
                            {t("Not Available")}
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_coordinator_examinations")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_coordinator_exam_person1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Contact">
                            {t("Not Available")}
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_coordinator_examinations")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_coordinator_exam_person2")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Contact">
                            9853463966
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_coordinator_time_table")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_coordinator_time_table_person1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Contact">
                            {t("Not Available")}
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_coordinator_time_table")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_coordinator_time_table_person2")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Contact">
                            {t("Not Available")}
                        </td>
                    </tr>
                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_coordinator_Samarth")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_coordinator_Samarth_person")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Contact">
                            9589633179
                        </td>
                    </tr>

                    <tr>
                        <td style={{ fontSize: "16px" }} data-column="Post">
                            {t("people_title2_tbody11_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_title2_tbody11_tr2")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Contact">
                            {t("Not Available")}
                        </td>
                    </tr>
                    {/* <tr>
            <td style={{ fontSize: "16px" }} data-column="Post">
              Assistant Dean (Academic) : Accreditation
            </td>
            <td style={{ fontSize: "16px" }} data-column="Name">
              Dr. Ch. M. S. Rao
            </td>
            <td style={{ fontSize: "16px" }} data-column="Contact">
              7870 344 602
            </td>
          </tr> */}
                    {/* <tr>
              <td style={{ fontSize: "16px" }} data-column="Post">
                {t("people_title2_tbody8_tr1")}
              </td>
              <td style={{ fontSize: "16px" }} data-column="Name">
                {t("people_title2_tbody8_tr2")}
              </td>
              <td style={{ fontSize: "16px" }} data-column="Contact">
                9279 011 076
              </td>
            </tr>
            <tr>
              <td style={{ fontSize: "16px" }} colSpan="3"></td>
            </tr> */}
                    {/* <tr>
              <td style={{ fontSize: "16px" }} rowSpan="3" data-column="Post">
                {t("people_title2_tbody9_tr1")}
              </td>
              <td style={{ fontSize: "16px" }} data-column="Name">
                {t("people_title2_tbody9_tr2_1")}
              </td>
              <td style={{ fontSize: "16px" }} data-column="Contact">
                9204 873 604
              </td>
            </tr>
            <tr>
              <td
                style={{ fontSize: "16px" }}
                data-column="Post"
                className="trshmob"
              >
                {t("people_title2_tbody9_tr1")}
              </td>
              <td style={{ fontSize: "16px" }} data-column="Name">
                {t("people_title2_tbody9_tr2_2")}
              </td>
              <td style={{ fontSize: "16px" }} data-column="Contact">
                9431 752 990
              </td>
            </tr>
            <tr>
              <td
                style={{ fontSize: "16px" }}
                data-column="Post"
                className="trshmob"
              >
                {t("people_title2_tbody9_tr1")}
              </td>
              <td style={{ fontSize: "16px" }} data-column="Name">
                {t("people_title2_tbody9_tr2_3")}
              </td>
              <td style={{ fontSize: "16px" }} data-column="Contact">
                7779 884 549
              </td>
            </tr> */}
                    {/* <tr>
              <td style={{ fontSize: "16px" }} colSpan="3"></td>
            </tr> */}
                    <tr>
                        <td style={{ fontSize: "16px" }} rowSpan={4} data-column="Post">
                            {t("people_title2_tbody10_tr1")}
                        </td>
                        {/* <td style={{ fontSize: "16px" }} data-column="Name">
                {t("people_title2_tbody10_tr2_1")}
              </td> */}
                        {/* <td style={{ fontSize: "16px" }} data-column="Contact">
                9470 126 910
              </td> */}
                    </tr>
                    <tr>
                        <td
                            style={{ fontSize: "16px" }}
                            data-column="Post"
                            className="trshmob"
                        >
                            {t("people_title2_tbody10_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_title2_tbody10_tr2_2")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Contact">
                            {t("Not Available")}
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{ fontSize: "16px" }}
                            data-column="Post"
                            className="trshmob"
                        >
                            {t("people_title2_tbody10_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_title2_tbody10_tr2_3")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Contact">
                            9162 029 698
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{ fontSize: "16px" }}
                            data-column="Post"
                            className="trshmob"
                        >
                            {t("people_title2_tbody10_tr1")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Name">
                            {t("people_title2_tbody10_tr2_4")}
                        </td>
                        <td style={{ fontSize: "16px" }} data-column="Contact">
                            7781 025 637
                        </td>
                    </tr>
                </table>
            </TableWrapper>
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
                    {t("Academics_subtitle6")}
                </Typography>
            </Box>
            <div>
          <CustomTable
            striped
            bordered
            hover
            responsive="md"
            style={{ margin: "50px auto" }}
          >
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Person concerned</th>
                <th>E-mail </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Superintendent (Academic)</td>
                <td>sup.ac@nitjsr.ac.in</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>Dealing Assistant (fee remission & fee demand)</td>
                <td>ministerial1.ac@nitjsr.ac.in</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>
                  Dealing Assistant (examination, result, issuance /
                  verification of certificates & transcript)
                </td>
                <td>ministerial2.ac@nitjsr.ac.in</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>
                  Dealing Assistant (withdrawal, PhD cases, duplicate degree)
                </td>
                <td>ministerial3.ac@nitjsr.ac.in</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Dealing Assistant (caution money, stipend)</td>
                <td>ministerial4.ac@nitjsr.ac.in</td>
              </tr>
            </tbody>
          </CustomTable>
        </div>
        </>
    );
}
