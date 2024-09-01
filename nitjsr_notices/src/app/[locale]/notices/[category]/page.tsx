// src/app/[locale]/notices/[category]/page.tsx
import { notFound } from 'next/navigation';
import { Box, Typography, Grid } from '@mui/material';
import NoticeCard from '@/components/notice-card'; // Ensure this path is correct
import fetchData from '@/utils/fetch-data'; // Ensure this path is correct
import { mockNotices } from '../../data';

interface Notice {
  id: number;
  title: string;
  content: string;
  category: string;
}

interface PageProps {
  params: {
    category: string;
    locale: string;
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = params;

  // Fetch notices for the specific category
  // const notices = await fetchData<Notice[]>(`/api/notices?category=${category}`);


  // If no notices are found, you might want to handle this case
  const notices = mockNotices.filter((notice) => notice.category === category);
  if (!notices || notices.length === 0) {
    return notFound();
  }

  return (
    <Box sx={{ padding: '2rem' }}>
      <Typography variant="h4" sx={{ marginBottom: '1rem' }}>
        Notices in {category}
      </Typography>
      <Grid container spacing={2}>
        {notices.map((notice) => (
          <Grid item xs={12} md={6} lg={4} key={notice.id}>
            <NoticeCard notice={notice} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
