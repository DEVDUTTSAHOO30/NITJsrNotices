"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Grid, Typography } from "@mui/material";
import colors from "@/theme/colors";
// import LearnMoreButton from "../../../../components/learn-more-button/learn-more-button.module.css";
import getLocaleClient from "@/utils/get-locale-client";
import LearnMoreButton from "../../../../components/learn-more-button/learn-more-button";
import getTranslations from "@/utils/translate";
import "../../../../components/member-container/members-container.css"
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function FinancialAssistance() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);
    return(
        <>
         <HeroText>{`Financial Assistance`}</HeroText>
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
                    {t("wca_0")}
                </Typography>

            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    wordSpacing: '-2px'
                }}
            >
                {t("wca_1")}
            </Typography>

            <p className="member_description">
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("wca_2")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("wca_3")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("wca_4")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("wca_5")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("wca_6")}
            </Typography>
            </p>
            
            <p>
							<b>Financial Support : </b>{t("fss")}{' '}
						</p>
                       
                 
                  
                        
                        <a
                      className="learn__more-btn"
                      href="http://ekalyan.jharkhand.gov.in/"
                      target="_blank"
                      
                    >
                      <LearnMoreButton> View</LearnMoreButton>
                    </a>  
                       
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
                    {t("fa_0")}
                </Typography>

            </Box>
                  
                  <Typography  color="#000000" align="justify"
               sx={{
                fontSize: '1.1rem',
            }}>{t("fa_1")}</Typography>
 <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    wordSpacing: '-2px'
                }}
            >
                {t("fa_2")}{50}
                </Typography>
                <p>
							<Typography
                            color="#757575" align="justify"
                            sx={{
                                fontSize: '1.1rem',
                                fontWeight: 700,
                                wordSpacing: '-2px'
                            }}>{t("fa_3")} </Typography>
						</p>
                        <p className="member_description"><p>{t("ntpc_1")}</p>
							
							<p>{t("ntpc_2")}</p></p>
                        <Typography color="#757575" align="justify">
        <strong>{'Financial Support :'}</strong> {t("fa_7")}
      </Typography>
      <Typography color="#757575" align="justify">
        <strong>{t("ongc_6")}</strong> 
      </Typography>
      <p className="member_description">{t("fa_8")}
{t("fa_9")}</p>
<a
                      className="learn__more-btn"
                      href="http://www.faeaindia.org/"
                      target="_blank"
                      
                    >
                      <LearnMoreButton> View</LearnMoreButton>
                    </a>
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
                    {t("sssfjk-1")}
                </Typography>

            </Box>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("sssfjk-2")}
            </Typography>

            <a
                      className="learn__more-btn"
                      href="http://www.aicte-jk-scholarship.in/"
                      target="_blank"
                      
                    >
                      <LearnMoreButton> View</LearnMoreButton>
                    </a>

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
                    {t("nhfd_0")}
                </Typography>

            </Box>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("nhfd_1")}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("nhfd_2")}
            </Typography>
            <a
                      className="learn__more-btn"
                      href="http://www.nhfdc.nic.in/"
                      target="_blank"
                      
                    >
                      <LearnMoreButton> View</LearnMoreButton>
                    </a>
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
                    {t("ntpc_0")}
                </Typography>

            </Box>
            <Typography color="#757575" align="justify">
        <strong>{t("ongc_2")}</strong> {'35(20 SC, 10 ST and 05 PC)'}
      </Typography>
      <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    wordSpacing: '-2px'
                }}
            >
                {t("ongc_3")}
            </Typography>
<p className="member_description">{t("ntpc_1")}
{t("ntpc_2")}</p>
<Typography color="#757575" align="justify">
        <strong>{'Financial Support :'}</strong> {'ntpc_3'}
      </Typography>
      <a
                      className="learn__more-btn"
                      href="http://www.ntpc.co.in/index.php?option=com_content&view=article&id=11&Itemid=91&lang=en/"
                      target="_blank"
                      
                    >
                      <LearnMoreButton> View</LearnMoreButton>
                    </a>

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
                    {t("ioes_0")}
                </Typography>
    
            </Box>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("ioes_1")}
            </Typography>
            <a
                      className="learn__more-btn"
                      href="http://ioclscholar.sifyitest.com/"
                      target="_blank"
                      
                    >
                      <LearnMoreButton> View</LearnMoreButton>
                    </a>

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
                    {t("cdif_0")}
                </Typography>
    
            </Box>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("cdif_1")}
            </Typography>
            <a
                      className="learn__more-btn"
                      href="http://cumminsindia.com/sustainability.html"
                      target="_blank"
                      
                    >
                      <LearnMoreButton> View</LearnMoreButton>
            </a>


            



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
                    {t("mcms_0")}
                </Typography>
    
            </Box>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("mcms_1")}
            </Typography>
            <a
                      className="learn__more-btn"
                      href="https://scholarships.gov.in/main.do"
                      target="_blank"
                      
                    >
                      <LearnMoreButton> View</LearnMoreButton>
                    </a>















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
                    {t("opje_0")}
                </Typography>
    
            </Box>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("opje_1")}
            </Typography>
            <p className="member_description"><p>{t("opje_2")}</p>
							
							<p>{t("opje_3")}</p>
                            <p>{t("opje_4")}</p>
                            <p>{t("opje_5")}</p>
                            
                            
                            </p>

            <a
                      className="learn__more-btn"
                      href="http://www.opjems.com/"
                      target="_blank"
                      
                    >
                      <LearnMoreButton> View</LearnMoreButton>
                    </a>





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
                    {t("pmss_0")}
                </Typography>
    
            </Box>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("pmss_1")}
            </Typography>
            <a
                      className="learn__more-btn"
                      href="https://scholarships.gov.in/main.do"
                      target="_blank"
                      
                    >
                      <LearnMoreButton> View</LearnMoreButton>
                    </a>





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
                    {t("ongc_0")}
                </Typography>
    
            </Box>




            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
               {t("ongc_1")}
            </Typography>
            <Typography color="#757575" align="justify">
        <strong>{t("fa_2")}</strong> {'40'}
      </Typography>
<p>
<Typography color="#757575" align="justify">
        <strong>{'Financial Support :'}</strong> {'Years:'}
      </Typography>
      <p>I - 12,000/-</p>
      <p>II - 12,000/-</p>
      <p>III - 18,000/-</p>
      <p>IV - 18,000/-</p>
</p>


<p>
<Typography color="#757575" align="justify">
        <strong>{t("fa_3")}</strong>
      </Typography>
</p>
<p className="member_description">
<p>{t("ongc_4")}</p>
<p>{t("ongc_5")}</p>
</p>


<p>
<Typography color="#757575" align="justify">
        <strong>{t("ongc_6")}</strong>{t("ongc_7")}
      </Typography>
</p>


<a
                      className="learn__more-btn"
                      href="https://scholarships.gov.in/main.do"
                      target="_blank"
                      
                    >
                      <LearnMoreButton> View</LearnMoreButton>
                    </a>


        </>
        
    )
}