import React from 'react'
import {Image} from '../rnd/Styled'
import { Typography } from "@mui/material"

export const Rnc = () => {
  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <Image src='http://archive.nitjsr.ac.in/img/rnc.jpg'></Image>
        
        <div style={{width:'90%'}}>
        <Typography variant='h4'>Overview</Typography>

        <Typography variant='h6'>
        National Institute of Technology, Jamshedpur continues to be rated as one of the leading technical universities in the India. The academic and research programmes in Humanities and Social Sciences, in Design are also highly regarded. NIT Jamshedpur attracts the best students from the country for its bachelor's, master's and doctoral programmes. The institute is known for its strong research groups in varied areas of science and technology that are making substantial contributions to national projects. The research and academic programmes are driven by an outstanding faculty, with many faculty members internationally reputed for their research contributions. The institute also continues to build links with peer universities and institutes, both at national and international levels, to enhance research and educational programmes. NIT Jamshedpur alumni have distinguished themselves through their achievements and contributions in industry, academics, research, business, government and in social domains. The institute continues to work closely with the alumni for enhancing its activities through interactions in academic and research programmes as well as mobilising financial support. The highest priority of the institute is to intensify its research efforts. The aim is to focus on "Research that Makes a Difference" to society, to industry and to the field itself. We are in the midst of a significant expansion in infrastructure to meet the ever increasing academic and research needs.

        </Typography>

        <br></br>
        <br></br>

        <Typography variant='h4'>R & C Vision</Typography>
        <Typography variant='h6'>
        To provide support to advance research, scholarships and creative expression at NIT Jamshedpur and to take initiatives in collaborative projects with public and private sectors that offer world class research potential.
        </Typography>

        <br></br>
        <br></br>


        <Typography variant='h4'>R & C Mission</Typography>
        <Typography variant='h6'>
        To contribute towards the progress of the nation by providing continuous guidance to research staff in order to raise the standard in academic and research activities across India and the world.
        </Typography>
        <br></br>

</div>
        </div>
        
  )
}
