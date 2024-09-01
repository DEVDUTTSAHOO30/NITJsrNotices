// components/notice-card.tsx
import { Box, Typography, Card, CardContent } from '@mui/material';

interface Notice {
  title: string;
  content: string;
}

interface Props {
  notice: Notice;
}

export default function NoticeCard({ notice }: Props) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{notice.title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {notice.content}
        </Typography>
      </CardContent>
    </Card>
  );
}
