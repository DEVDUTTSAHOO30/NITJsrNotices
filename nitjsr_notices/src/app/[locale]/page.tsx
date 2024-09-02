
export const mockCategories = [
  { id: 1, name: "Events" },
  { id: 2, name: "Announcements" },
  { id: 3, name: "Exams" },
  { id: 4, name: "Career" },
  { id: 5, name: "Workshops" }
];

import { mockNotices } from "./data";
import SocialMedia from "@/components/social-media/social-media";
import NoticeSection from "@/sections/home/notice-section";
import fetchData from "@/utils/fetch-data";

export default async function Home() {
  const categories = mockCategories;
  const notices = mockNotices;

  // Group notices by category
  const noticesByCategory = notices.reduce((acc, notice) => {
    const category = notice.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(notice);
    return acc;
  }, {} as Record<string, typeof notices>);

  // Fetch additional data if necessary
  const noticeData = await fetchData<{ data: Array<Notice> }>(
    "/api/notices/landing?limit=10"
  );

  return (
    <>
      <SocialMedia />
      <NoticeSection
        categories={categories}
        noticesByCategory={noticesByCategory}
      />
      {/* Additional components can be uncommented as needed */}
      {/* <HomePageLinks /> */}
      {/* <SectionLinks /> */}
      {/* <MiddleCarousel research={noticeData.data} /> */}
      {/* <BottomCarousel /> */}
    </>
  );
}
