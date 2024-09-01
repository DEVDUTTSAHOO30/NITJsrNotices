"use client";

import NoticeCarousel from "@/components/carousel/notice-carousel";
import NoticeImageCarousel from "@/components/carousel/notice-image-carousel";
import { Box, Grid } from "@mui/material";

interface Props {
  noticeData: Array<Notice>;
}

export default function NoticeSection({ noticeData }: Props) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "3rem",
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6} padding={1.5}>
          <NoticeImageCarousel />
        </Grid>

        <Grid item xs={12} md={6} padding={1.5}>
          <NoticeCarousel noticeData={noticeData} />
        </Grid>
      </Grid>
    </Box>
  );
}