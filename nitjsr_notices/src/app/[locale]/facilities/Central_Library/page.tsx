"use client";
import HeroText from "@/components/hero/hero-text";
import { Box } from "@mui/material";
import colors from "@/theme/colors";
import { CustomBoxWrapper, TableWrapper ,CustomTypography,CustomText,CustomListItem } from "../facilities_style"
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'; 
import img from "./img2.jpg";

export default function AboutNITJSR() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);
    const [libraryCommitteeData, setLibraryCommitteeData] = useState([]);
    const [libraryStaffData, setLibraryStaffData] = useState([]);

  let committeeHandler = async () => {
    try {
      const a = await fetch(`https://nitjsr.ac.in/backend/api/central_facilities?facility=library_committee`);
      const b= await a.json();
      setLibraryCommitteeData(b);
    } catch (error) {
      console.log(error);
    }
  };

  let staffHandler = async () => {
    try {
      const a = await fetch(`https://nitjsr.ac.in/backend/api/central_facilities?facility=library_staff`);
      const b = await a.json();
      setLibraryStaffData(b);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    committeeHandler();
    staffHandler();
    return () => {
      setLibraryCommitteeData([]);
      setLibraryStaffData([]);
    };
  }, []);

    return (
        <>
        <HeroText>{t("Central_Library")}</HeroText>

        <CustomText sx={{paddingBottom:'1rem' }}>
        {t("central_facilities_body")}
        </CustomText>
        
         <CustomText sx={{
                    paddingLeft:'3rem',paddingBottom:'2rem'
                }}>&bull;&nbsp;{t("central_facilities_point_1")}
         </CustomText> 
         <CustomText sx={{
                    paddingLeft:'3rem',paddingBottom:'2rem'
                }}>&bull;&nbsp;{t("central_facilities_point_2")}
         </CustomText> 
         <CustomText sx={{
                    paddingLeft:'3rem',paddingBottom:'2rem'
                }}>&bull;&nbsp;{t("central_facilities_point_3")}
         </CustomText>
         <CustomText sx={{
                    paddingLeft:'3rem',paddingBottom:'2rem'
                }}>&bull;&nbsp;{t("central_facilities_point_4")}
         </CustomText>

        <Box textAlign="center" style={{  maxHeight: '341px',marginTop:'2rem'}}>
        <Image src={img} 
        alt="thumbnail" 
        className="rounded" 
        style={{
          borderRadius: '.25rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: 'auto',
          maxWidth: '100%',
          verticalAlign: 'middle',
          borderStyle: 'none',
          // paddingRight:'3rem'
        }}  
        />
        </Box>
{/* 
        <Box textAlign="center">
        <Image src={img} 
        alt="thumbnail" 
        className="rounded" 
        style={{
          borderRadius: '.25rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          WebkitFontSmoothing: 'antialiased',
          color: '#212529',
          fontSize: '1em',
          fontFamily: 'Poppins, sans-serif',
          textShadow: 'rgba(0, 0, 0, 0.004) 1px 1px 1px',
          height: 'auto',
          maxWidth: '100%',
          verticalAlign: 'middle',
          borderStyle: 'none',
          fontVariant: 'tabular-nums',
          fontFeatureSettings: '"tnum","tnum"',
          fontWeight: 400,
          lineHeight: 1.5,
          WebkitTapHighlightColor: 'transparent',
          paddingRight:'3rem'

        }}  
        />
        </Box> */}

        <CustomBoxWrapper>
            <CustomTypography>
               {t("central_facilities_space_heading")}
            </CustomTypography>
        </CustomBoxWrapper>

        <CustomText>
        {t("central_facilities_space_para")}
        </CustomText>

        <CustomText sx={{
                    paddingLeft:'3rem',paddingTop:'2rem'
                }}>
        &bull;&nbsp;<b>{t("central_facilities_space_reading_head")}</b>
        <br/>
        {t("central_facilities_space_reading_body")}
        </CustomText>

        <CustomText sx={{
                    paddingLeft:'3rem',paddingTop:'2rem',paddingBottom:'2rem'
                }}>
        &bull;&nbsp;<b>{t("central_facilities_collection_point_key_1")}</b>
        <br/>
        {t("central_facilities_space_reading_body")}
        </CustomText>

        <CustomBoxWrapper>
            <CustomTypography>
            {t("central_facilities_book_bank_heading")}
            </CustomTypography>
        </CustomBoxWrapper>

        <CustomText>
        {t("central_facilities_book_bank_head")}
        </CustomText>

        <CustomText sx={{
                    paddingLeft:'3rem',paddingTop:'0.5rem',paddingBottom:'2rem'
                }}>
        1.{t("central_facilities_book_bank_para_1")}
        </CustomText>
        
        <CustomText sx={{
                    paddingLeft:'3rem',paddingTop:'2rem',paddingBottom:'2rem'
                }}>
        2.{t("central_facilities_book_bank_para_2")}
        </CustomText>

        <CustomBoxWrapper>
            <CustomTypography>
            {t("central_facilities_acquistion_head")}
            </CustomTypography>
        </CustomBoxWrapper> 

        <CustomText>
        {t("central_facilities_acquistion_body")}
        </CustomText>

        <CustomText sx={{
                    paddingLeft:'3rem',paddingBottom:'2rem'
                }}>
        &bull;&nbsp;{t("central_facilities_acquistion_body_point_1")}
        </CustomText>

        <CustomText sx={{
                    paddingLeft:'3rem',paddingBottom:'2rem'
                }}>
        &bull;&nbsp;{t("central_facilities_acquistion_body_point_2")}
        </CustomText>


        {/* <CustomText>
        {t("central_facilities_acquistion_body")}<br/>
        <CustomListItem>
        &bull;
        </CustomListItem>{t("central_facilities_acquistion_body_point_1")}
        <br/><br/>
        <CustomListItem>
        &bull;
        </CustomListItem>{t("central_facilities_acquistion_body_point_2")}
        <br/><br/>
        </CustomText> */}
        
        <CustomBoxWrapper>
            <CustomTypography>
            {t("central_facilities_collection_head")}
            </CustomTypography>
        </CustomBoxWrapper>
        
        <CustomText>
        {t("central_facilities_collection_body")}
        </CustomText>
        <TableWrapper>
            <table >
              <tbody>
                <tr >
                  <td style={{ color: '#616970',fontWeight:500 }}>{t("central_facilities_collection_point_key_1")}</td>
                  <td style={{ color: '#616970',fontWeight:500  }}>{t("central_facilities_collection_point_value_1")}</td>
                </tr>
                <tr>
                  <td style={{ color: '#616970',fontWeight:500  }}>{t("central_facilities_collection_point_key_2")}</td>
                  <td style={{ color: '#616970',fontWeight:500  }}>{t("central_facilities_collection_point_value_2")}</td>
                </tr>
                <tr>
                  <td style={{ color: '#616970',fontWeight:500  }}>{t("central_facilities_collection_point_key_3")}</td>
                  <td style={{ color: '#616970',fontWeight:500  }}>{t("central_facilities_collection_point_value_3")}</td>
                </tr>
              </tbody>
            </table>
          </TableWrapper>
          
          
          <CustomBoxWrapper>
            <CustomTypography>
            {t("central_facilities_working_hours")}
            </CustomTypography>
          </CustomBoxWrapper>

          <CustomText>
          {t("central_facilities_working_hours_head")}
          </CustomText>
          <TableWrapper>
            <table>
              <thead>
                <tr>
                  <th>{t("central_facilities_working_hours_table_head_1")}</th>
                  <th colSpan={2}>
                    {t("central_facilities_working_hours_table_head_2")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ color: '#616970',fontWeight:500 }}>{t("central_facilities_working_hours_table_value_1")}</td>
                  <td style={{ color: '#616970',fontWeight:500  }}>
                    {t("central_facilities_working_hours_table_value_1_1")}
                  </td>
                  <td style={{ color: '#616970',fontWeight:500 }}>
                    {t("central_facilities_working_hours_table_value_1_2")}
                  </td>
                </tr>
                <tr></tr>
                <tr>
                  <td style={{ color: '#616970',fontWeight:500 }}>{t("central_facilities_working_hours_table_value_2")}</td>
                  <td style={{ color: '#616970',fontWeight:500 }}>{t("central_facilities_working_hours_table_value_2_1")}</td>
                  <td style={{ color: '#616970',fontWeight:500 }}>-</td>
                </tr>
              </tbody>
            </table>
          </TableWrapper>
         

          <CustomBoxWrapper>
            <CustomTypography>
            {t("central_facilities_other_facilites_head")}
            </CustomTypography>
          </CustomBoxWrapper>

          <CustomText>
          {t("central_facilities_other_facilites_para_1")}
          <br/><br/>
          {t("central_facilities_other_facilites_para_2")}
          </CustomText>

          <CustomText sx={{
                    paddingLeft:'3rem',paddingBottom:'2rem'
                }}>
          &bull;&nbsp;{t("central_facilities_other_facilites_points_1")}<br/><br/>
          &bull;&nbsp;{t("central_facilities_other_facilites_points_2")}<br/><br/>
          &bull;&nbsp;{t("central_facilities_other_facilites_points_3")}<br/><br/>
          &bull;&nbsp;{t("central_facilities_other_facilites_points_4")}<br/><br/>
          &bull;&nbsp;{t("central_facilities_other_facilites_points_5")}<br/>
          </CustomText>

          <CustomText>
          {t("central_facilities_other_facilites_para_3")}<br/><br/>
          </CustomText>

          <CustomBoxWrapper>
            <CustomTypography>
            {t("central_facilities_library_commitee")}
            </CustomTypography>
          </CustomBoxWrapper>

          <CustomText>
          </CustomText>
          <TableWrapper>
          <table>
            <thead>
              <tr>
                <th>{t("central_facilities_table_key_1")}</th>
                <th>{t("central_facilities_table_key_2")}</th>
                <th>{t("central_facilities_table_key_3")}</th>
                <th>{t("central_facilities_table_key_4")}</th>
              </tr>
            </thead>
            <tbody>
              {libraryCommitteeData.map((person) => (
                <tr key={person.email}>
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
                {t("central_facilities_library_staff")}
            </CustomTypography>
          </CustomBoxWrapper>

          <CustomText>
          </CustomText>
          <TableWrapper>
					<table>
						<thead >
							<tr>
								<th>{t("central_facilities_table_key_1")}</th>
								<th>{t("central_facilities_table_key_2")}</th>
								<th>{t("central_facilities_table_key_3")}</th>
								<th>{t("central_facilities_table_key_4")}</th>
							</tr>
						</thead>
						<tbody>
							{libraryStaffData.map((person) => (
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