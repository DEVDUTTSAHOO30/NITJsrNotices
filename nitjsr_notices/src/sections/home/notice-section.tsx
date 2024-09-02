// components/home/notice-section.tsx
"use client";

import { useRouter } from 'next/navigation';
import NoticeCarousel from "@/components/carousel/notice-carousel";
import NoticeImageCarousel from "@/components/carousel/notice-image-carousel";
import { Box, Grid, Typography } from "@mui/material";

interface Notice {
  id: number;
  title: string;
  path: string;
  notification_for: string[];
  idate: string;
  highlight: number;
  count: number;
  status: number;
  category: string;
}

interface Category {
  id: number;
  name: string;
}

interface NoticeSectionProps {
  categories: Category[];
  noticesByCategory: Record<string, Notice[]>;
}

export default function NoticeSection({ categories, noticesByCategory }: NoticeSectionProps) {
  const router = useRouter();
  const handleCategoryClick = (category: string) => {
    router.push(`/notices/${category}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "3rem",
      }}
    >
      {/* <Typography variant="h4" sx={{ marginBottom: "1rem" }}>Notices</Typography> */}

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <NoticeImageCarousel />
        </Grid>

        <Grid item xs={12} md={6}>
          <NoticeCarousel categories={categories} />
        </Grid>
      </Grid>
    </Box>
  );
}


// export default function NoticeSection({ noticeData }: Props) {
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         flexWrap: "wrap",
//         marginTop: "3rem",
//       }}
//     >
//       <Grid container>
//         <Grid item xs={12} md={6} padding={1.5}>
//           <NoticeImageCarousel />
//         </Grid>

//         <Grid item xs={12} md={6} padding={1.5}>
//           <NoticeCarousel noticeData={noticeData} />
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }