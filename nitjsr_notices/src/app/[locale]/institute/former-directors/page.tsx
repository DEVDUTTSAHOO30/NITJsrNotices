"use client";
import HeroText from "@/components/hero/hero-text";
import colors from "@/theme/colors";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import { Box, Typography } from "@mui/material";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: colors.secondary,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

function page() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  const directors = [
    {
      slNo: "1.",
      name: t("Prof. A. Mishra"),
      from: "27/12/2002",
      to: "27/12/2002",
    },
    {
      slNo: "2.",
      name: t("Prof. D. Bhattacharya"),
      from: "01/07/2003",
      to: "27/03/2005",
    },
    {
      slNo: "3.",
      name: t("Prof. S.K. Mukherjee (I/C)"),
      from: "28/03/2005",
      to: "09/11/2005",
    },
    {
      slNo: "4.",
      name: t("Prof. G. Panda"),
      from: "10/11/2005",
      to: "14/08/2006",
    },
    {
      slNo: "5.",
      name: t("Prof. A. Mishra (I/C)"),
      from: "15/08/2006",
      to: "07/06/2008",
    },
    {
      slNo: "6.",
      name: t("Prof. S.K. Sarangi (I/C)"),
      from: "08/06/2008",
      to: "04/08/2008",
    },
    {
      slNo: "7.",
      name: t("Prof. Rajnish Shrivastava"),
      from: "05/08/2008",
      to: "02/08/2012",
    },
    {
      slNo: "8.",
      name: t("Prof. Rambabu Kodali"),
      from: "03/08/2012",
      to: "02/08/2017",
    },
    {
      slNo: "9.",
      name: t("Prof. Yamuna Prasad Yadav"),
      from: "03/08/2017",
      to: "15/11/2017",
    },
    {
      slNo: "10.",
      name: t("Prof. Karunesh Kumar Shukla"),
      from: "16/11/2017",
      to: "11/05/2023",
    },
  ];

  return (
    <>
      <HeroText>{t("Former_Directors")}</HeroText>
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
          {t("Former_Directors")}
        </Typography>
      </Box>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>{t("Sl.No.")}</StyledTableCell>
              <StyledTableCell align="left">{t("Name")}</StyledTableCell>
              <StyledTableCell align="left">{t("From")}</StyledTableCell>
              <StyledTableCell align="left">{t("To")}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {directors.map((director, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {director.slNo}
                </TableCell>
                <TableCell align="left">{director.name}</TableCell>
                <TableCell align="left">{director.from}</TableCell>
                <TableCell align="left">{director.to}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default page;
