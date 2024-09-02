"use client";

import React from "react";
import { notFound } from "next/navigation";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  TableContainer,
  Pagination,
} from "@mui/material";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import formatDateString from "@/utils/format-date-string";
import { mockNotices } from "../../data";
import Link from "next/link";

interface Notice {
  id: number;
  title: string;
  content: string;
  category: string;
  path: string;
  date: string;
}

interface PageProps {
  params: {
    category: string;
    locale: string;
  };
}

export default function CategoryPage({ params }: PageProps) {
  const { category } = params;

  // Filter the mock data to get notices of the specific category
  const notices = mockNotices.filter((notice) => notice.category === category);
  if (!notices || notices.length === 0) {
    return notFound();
  }

  const totalPerPage = 15;
  const [currentPage, setCurrentPage] = React.useState<number>(1);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <Box
        sx={{
          padding: { xs: "1rem", md: "2rem" }, // Responsive padding
          margin: "auto",
          maxWidth: "1250px", // Adjust width as needed
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: "1.5rem",
            fontSize: { xs: "1.5rem", md: "2rem" }, // Responsive font size
            textAlign: "center",
          }}
        >
          Notices in {category}
        </Typography>
        {notices.length > 0 ? (
          <>
            <Paper elevation={3} sx={{ overflow: "hidden" }}>
              <TableContainer sx={{ maxHeight: "60vh" }}>
                <Table stickyHeader aria-label="notices table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Sl. No.</TableCell>
                      <TableCell>Issue Date</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {notices
                      .slice(
                        (currentPage - 1) * totalPerPage,
                        currentPage * totalPerPage
                      )
                      .map((notice, index) => (
                        <TableRow key={notice.id}>
                          <TableCell align="center">
                            {(currentPage - 1) * totalPerPage + index + 1}
                          </TableCell>
                          <TableCell>{formatDateString(notice.date)}</TableCell>
                          <TableCell>{notice.title}</TableCell>
                          <TableCell align="center">
                            {notice.path ? (
                              <IconButton href={notice.path} target="_blank">
                                <FiDownload size="20px" />
                              </IconButton>
                            ) : (
                              <Link
                                href={`/notices/${category}/details/${notice.id}`}
                                passHref
                              >
                                <IconButton>
                                  <FiExternalLink size="20px" />
                                </IconButton>
                              </Link>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
            <Pagination
              count={Math.ceil(notices.length / totalPerPage)}
              page={currentPage}
              onChange={handleChangePage}
            />
          </Box>

          </>
        ) : (
          <Typography
            variant="h6"
            sx={{ textAlign: "center", marginTop: "2rem" }}
          >
            No notices found for this category.
          </Typography>
        )}
      </Box>
    </div>
  );
}
//   <><Box
//   sx={{
//     padding: { xs: '1rem', md: '2rem' }, // Responsive padding
//     margin: 'auto',
//     maxWidth: '1250px', // Adjust width as needed
//   }}
// >
//   <Typography
//     variant="h4"
//     sx={{
//       marginBottom: '1.5rem',
//       fontSize: { xs: '1.5rem', md: '2rem' }, // Responsive font size
//       textAlign: 'center',
//     }}
//   >
//     Notices in {category}
//   </Typography>

//   {notices.length > 0 ? (
//     <>
//       <Paper elevation={3} sx={{ overflow: 'hidden' }}>
//         <TableContainer sx={{ maxHeight: '60vh' }}> {/* Make table scrollable */}
//           <Table stickyHeader aria-label="notices table"> {/* Sticky header for better UX */}
//             <TableHead>
//               <TableRow>
//                 <TableCell align="center">Sl. No.</TableCell>
//                 <TableCell>Issue Date</TableCell>
//                 <TableCell>Title</TableCell>
//                 <TableCell align="center">Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {notices
//                 .slice((currentPage - 1) * totalPerPage, currentPage * totalPerPage)
//                 .map((notice, index) => (
//                   <TableRow key={notice.id}>
//                     <TableCell align="center">{(currentPage - 1) * totalPerPage + index + 1}</TableCell>
//                     <TableCell>{formatDateString(notice.date)}</TableCell>
//                     <TableCell>{notice.title}</TableCell>
//                     <TableCell align="center">
//                       {notice.path ? (
//                         <IconButton href={notice.path} target="_blank">
//                           <FiDownload size="20px" />
//                         </IconButton>
//                       ) : (
//                         <Link href={`/notices/${category}/details/${notice.id}`} passHref>
//                           <IconButton>
//                             <FiExternalLink size="20px" />
//                           </IconButton>
//                         </Link>
//                       )}
//                     </TableCell>
//                   </TableRow>
//                 )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Paper>

//       <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
//         <Pagination
//           count={Math.ceil(notices.length / totalPerPage)}
//           page={currentPage}
//           onChange={handleChangePage}
//         />
//       </Box>
//     </>
//   ) : (
//     <Typography variant="h6" sx={{ textAlign: 'center', marginTop: '2rem' }}>
//       No notices found for this category.
//     </Typography>
//   )}
// </Box></>
