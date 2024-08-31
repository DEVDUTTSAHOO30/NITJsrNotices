"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import { CustomBoxWrapper, TableWrapper ,CustomTypography,CustomText } from "../facilities_style"
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

export default function AboutNITJSR() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);

    return (
        <>
        <HeroText>{t("transport_head")}</HeroText>

        <CustomBoxWrapper>
            <CustomTypography variant="h5">
                {t("central_facilities_transport_bus_service_head")}
            </CustomTypography>
        </CustomBoxWrapper>

        <CustomText>
            {t("central_facilities_transport_body")}
        </CustomText>

        <TableWrapper>
          <table>
            <thead>
              <tr id="headRow">
                <th>{t("central_facilities_transport_table_key_1")}</th>
                <th>{t("central_facilities_transport_table_key_2")}</th>
                <th>{t("central_facilities_transport_table_key_3")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{t("central_facilities_transport_table_value_1_1")}</td>
                <td>{t("central_facilities_transport_table_value_1_2")}</td>
                <td> {t("central_facilities_transport_table_value_3_1")}</td>
              </tr>
              <tr>
                <td>{t("central_facilities_transport_table_value_1_2")}</td>
                <td> {t("central_facilities_transport_table_value_1_1")}</td>
                <td> {t("central_facilities_transport_table_value_3_2")}</td>
              </tr>
            </tbody>
          </table>
        </TableWrapper>
        </>
    )
}