"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";
import {TableWrapper , CustomText, CustomBoxWrapper, CustomTypography } from "../facilities_style"
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import React, { useEffect, useState } from 'react';


export default function AboutNITJSR() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);

    const [dispensaryData, setDispensaryData] = useState([]);

	const getData = async () => {
		try {
			const a = await fetch(`https://nitjsr.ac.in/backend/api/central_facilities?facility=dispensary`);
            const b = await a.json();
			setDispensaryData(b);
		} catch (error) {
			console.log(error);
		}
	}
	useEffect(() => {
		getData();
	}, []);

	
    return (
        <>
        <HeroText>{t("Medical_facilities_head")}</HeroText>

    
        <CustomText>
        {t("central_facilities_hospital_body")}
        </CustomText>

        <CustomBoxWrapper>
            <CustomTypography>
            {t("central_facilities_hospital_dispensary_head")}
            </CustomTypography>
        </CustomBoxWrapper>

        <CustomText>
        {t("central_facilities_hospital_dispensary_body")}
        </CustomText>
               

       <CustomText>
       {t("central_facilities_hospital_dispensary_staff_body")}
       </CustomText>

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
								{dispensaryData.map((person) => (
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

         <CustomBoxWrapper>
            <CustomTypography>
            {t("central_facilities_hospital_city_hospital_head")}
            </CustomTypography>
        </CustomBoxWrapper>     

        <CustomText>
        {t("central_facilities_hospital_city_hospital_body")}
        </CustomText>

        <CustomText  sx={{ paddingLeft:'2rem',paddingBottom:'1rem' }}>
        1.   {t("central_facilities_hospital_city_hospital_list_1")}
        </CustomText>
        <CustomText  sx={{ paddingLeft:'2rem',paddingBottom:'1rem' }}>
        2.  {t("central_facilities_hospital_city_hospital_list_2")}
        </CustomText>
        <CustomText  sx={{ paddingLeft:'2rem',paddingBottom:'1rem' }}>
        3.  {t("central_facilities_hospital_city_hospital_list_3")}
        </CustomText>
        <CustomText  sx={{ paddingLeft:'2rem',paddingBottom:'1rem' }}>
        4.  {t("central_facilities_hospital_city_hospital_list_4")}
        </CustomText>
        <CustomText  sx={{ paddingLeft:'2rem',paddingBottom:'1rem' }}>
        5.  {t("central_facilities_hospital_city_hospital_list_5")}
        </CustomText>
                                
        <CustomText>
        {t('central_facilities_hospital_city_hospital_foot')}{' '}
        </CustomText>

        <CustomBoxWrapper>
            <CustomTypography>
            &nbsp;&nbsp; {t("central_facilities_hospital_pathological_head")}
            </CustomTypography>
        </CustomBoxWrapper>
                    
        <CustomText>
        {t("central_facilities_hospital_pathological_body")}
        </CustomText>

        <CustomBoxWrapper>
        <CustomTypography>
        &nbsp;&nbsp; {t("central_facilities_hospital_students_head")}
        </CustomTypography>
        </CustomBoxWrapper>      

        <CustomText>
        {t("central_facilities_hospital_students_body")}
        </CustomText>

        <CustomBoxWrapper>
        <CustomTypography>
                    &nbsp;&nbsp; {t("central_facilities_hospital_referral_head")}
                </CustomTypography>
        </CustomBoxWrapper>            

 
        <CustomText>
        {t("central_facilities_hospital_referral_body")}
        </CustomText>
                

        <CustomBoxWrapper>
        <CustomTypography>
                    &nbsp;&nbsp; {t("central_facilities_hospital_visitingdoctorrs_head")}
                </CustomTypography>
        </CustomBoxWrapper>            


        <CustomText>
                {t("central_facilities_hospital_visitingdoctorrs_body")}
        </CustomText>

        <CustomBoxWrapper>
        <CustomTypography>
                    &nbsp;&nbsp; {t("central_facilities_hospital_ambulance_head")}
                </CustomTypography>
        </CustomBoxWrapper>    

        <CustomText>
            {t("central_facilities_hospital_ambulance_body")}
        </CustomText>
        <CustomText color="#757575" align="justify" 
                sx={{ 
                    fontSize: '1.1rem', lineHeight: '2rem' 
                    }} 
            >
            Phone: +91-657-237-4226
        </CustomText>
        </>
    )
} 