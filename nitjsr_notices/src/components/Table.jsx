import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import colors from "@/theme/colors";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

import { Box, Typography } from "@mui/material";
export default function BasicTable({ rows }) {
  const locale = getLocaleClient();
  const t = getTranslations(locale);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow style={{ backgroundColor: colors.secondary }}>
            <TableCell>
              {" "}
              <Typography variant="h6" color="common.white">
                {t("Name")}
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6" color="common.white">
                {t("people_title1_thead2")}
              </Typography>
            </TableCell>
            <TableCell align="left">
              <Typography variant="h6" color="common.white">
                {t("people_title1_thead3")}
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography variant="h6" color="common.black">
                  {row.name}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6" color="common.black">
                  {row.post}
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography variant="h6" color="common.black">
                  {row.email}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
