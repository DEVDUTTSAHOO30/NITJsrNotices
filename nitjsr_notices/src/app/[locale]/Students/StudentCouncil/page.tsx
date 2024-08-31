"use client";
import HeroText from "@/components/hero/hero-text";
import { Box, Typography } from "@mui/material";
import colors from "@/theme/colors";

import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const columns = [
    { id: "post_name", label: "Position", minWidth: 170 },
    { id: "name", label: "Student Name", minWidth: 170 },
    { id: "phone", label: "Mobile", minWidth: 170 },
    { id: "email", label: "E-mail", minWidth: 170 },
];
const rows = [
    createData("President", "Jay Singh", "6204469926", "president.sc@nitjsr.ac.in"),
    createData("Vice President", "Aditya Kumar", "9142135351", "vp.sc@nitjsr.ac.in"),
    createData("General Secretary", "Unnati Jaiswal", "9334213358", "gensec.sc@nitjsr.ac.in"),
    createData("Club Secratery", "Akanksha Priya", "7488371454", "clubsec.sc@nitjsr.ac.in"),
    // createData("Technical Secretary", "Rishav Raj","9525018921", "techsec.sc@nitjsr.ac.in"),
    createData("Joint Technical Secretary", "Vishal Raj", "8863832703", "jtechsec.sc@nitjsr.ac.in"),
    createData("Cultural Seceretary", "Ritik Kumar", "8434311949", "culsec.sc@nitjsr.ac.in"),
    createData("Joint Cultural Secretary", "Samar Raghuvanshi", "9305738151", "jculsec.sc@nitjsr.ac.in"),
    createData("Alumni Secretary", "Rishav Rai", "7979049359", "alumsec.sc@nitjsr.ac.in"),
    createData("Joint Alumni Secretary", "Swarnim Kumari", "9775120355", "jas.sc@nitjsr.ac.in"),
    createData("Sports Secretary", "Ravindra Raj", " 8434794879", "sportssec.sc@nitjsr.ac.in"),
    createData("Joint Sports Secretary", "Anubhav", "9034193237", "jsportssec.sc@nitjsr.ac.in"),
    createData("PG Representative", "Prakhar Verma", "9369672976", "pgrep.sc@nitjsr.ac.in"),
    createData("Joint Secretary", "Sumit Kumar Baranwal", "7979775180", "js.sc@nitjsr.ac.in"),
    createData("Joint Secretary", "Haritima Sinha", "7903975778", "js.sc@nitjsr.ac.in"),
];

function createData(post_name, name, phone, email) {
    return { post_name, name, phone, email };
}

export default function StudentCouncil() {
    const locale = getLocaleClient();
    const t = getTranslations(locale);
    return (
        <>

            <HeroText>{t("Haw12")}</HeroText>
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
                    {"1. STUDENTS’ COUNCIL"}
                </Typography>
            </Box>
            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    wordSpacing: '-2px'
                }}
            >
                {"Students’ Council will be the highest governing body of Students Activities Centre and will be responsible for all the Students Activities taking place in the Institute."}
            </Typography>
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
                    {"1.1 Objective"}
                </Typography>
            </Box>

            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {`  A good administration and efficient students’ council is a part of an
        able institution. Students’ Council represents the opinions, ideas and
        proposals of the students.`}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {`1.To provide a link and improve communication between administration,
          students and parents.`}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {`2.To provide a forum for students to voice their opinions on relevant
          issues.`}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {`3.To encourage students to become self-confident, responsible and create
          a more caring atmosphere.`}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {`4.The Council functions to bridge the gap between students and
          administration, paving way to the healthy relationship between the
          two, thereby creating a conducive environment for their Academic and
          extracurricular excellence .`}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {`5.The administration is more approachable through the council, and also
          the demands and problems faced by the students are given a patient
          ear.`}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {`6.To maintain transparency in all types of students activities in the
          institute.`}
            </Typography>
            <Typography color="#000000" align="justify"
                sx={{
                    fontSize: '1.1rem',
                }}
            >
                {`7.This document provides the Students’ Council with an explanation of
          its purpose, administration and responsibilities. Students’ Council
          should be notified before any decision is made.`}
            </Typography>
            




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
                    {"1.2  Structure of Students’ Council"}
                </Typography>
            </Box>

            <Typography color="#757575" align="justify"
                sx={{
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                }}
            >
                {`  The students’ council of National Institute of Technology, Jamshedpur comprises of the following posts whose eligibility criteria are mentioned in the selection procedure as notified by the institute.`}
            </Typography>
             
            <div>
  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    1. President (4th year B.Tech.)
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    2. Vice-President (3rd year B.Tech.)
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    3. General Secretary (3rd year B.Tech.)
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    4. Joint Secretary (2nd year B.Tech.)
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    5. Alumni Secretary (4th /3rd year B.Tech.)
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    6. Joint Alumni Secretary (3rd /2nd year B.Tech.)
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    7. Technical Secretary (4th /3rd year B.Tech.)
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    8. Joint Technical Secretary (3rd /2nd year B.Tech.)
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    9. Cultural Secretary (4th /3rd year B.Tech.)
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    10. Joint Cultural Secretary (3rd /2nd year B.Tech.)
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    11. Sports Secretary (4th /3rd year B.Tech.)
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    12. Joint Sports Secretary (3rd /2nd year B.Tech.)
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    13. Club Secretary (4th year B.Tech.)
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    14. PG representative (PG )
  </Typography>

  <Typography color="#000000" align="justify" sx={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
    15. 1st year Representative (1st year B.Tech.)
  </Typography>
  <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    
                    style={{
                      minWidth: column.minWidth,
                      color: "#001",
                      fontWeight: "bold",
                      fontSize: "17px",
                      backgroundColor: "#fff",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} >
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
</div>



              
       
        </>
    )
}





