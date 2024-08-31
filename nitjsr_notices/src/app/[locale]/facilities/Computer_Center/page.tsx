"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import { TableWrapper , CustomText } from "../facilities_style";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import React, { useEffect, useState } from 'react';

export default function AboutNITJSR() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);
    const [ComputerCenterData, setComputerCenterData] = useState([]);

    let getData = async () => {
		try {
			const a = await fetch(`https://nitjsr.ac.in/backend/api/central_facilities?facility=cc`);
            const b = await a.json();
			setComputerCenterData(b);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getData();
	}, []);

    return (
        <>
        <HeroText>{t("Computer_Center_head")}</HeroText>

        <CustomText>
            {t("central_facilities_computer_center_body")}
        </CustomText>
                

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
                    &nbsp;&nbsp; {t("central_facilities_contacts_head")}
                </Typography>

                </Box>

                <TableWrapper>
					<table>
						<thead>
							<tr id="headRow">
								<th>{t("central_facilities_table_key_1")}</th>
								<th>{t("central_facilities_table_key_2")}</th>
								<th>{t("central_facilities_table_key_3")}</th>
								<th>{t("central_facilities_table_key_4")}</th>
							</tr>
						</thead>
						<tbody>
							{ComputerCenterData.map((person) => (
								<tr>
									<td>{person.designation}</td>
									<td>
										{person.preName} {person.fname} {person.lname}
									</td>
									<td>{person.phoneNumber}</td>
									<td>{person.email}</td>
								</tr>
							))}
						</tbody>
					</table>
				</TableWrapper>
                    

        
        </>
    )
}