
export const mockCategories = [
  { id: 1, name: "Events" },
  { id: 2, name: "Announcements" },
  { id: 3, name: "Exams" },
];

import { mockNotices } from "./data";
import SocialMedia from "@/components/social-media/social-media";
import HomePageLinks from "@/sections/home/home-page-links";
import NoticeSection from "@/sections/home/notice-section";
import AchievementandPublicationSection from "@/sections/home/AchievementPublications";
import { BottomCarousel } from "@/sections/home/recent-researches-upcoming-event";
import { MiddleCarousel } from "@/sections/home/research-acheiver-testimonial";

import SectionLinks from "@/sections/home/section-links";
import fetchData from "@/utils/fetch-data";

export default async function Home() {

  const categories = mockCategories;
  const notices = mockNotices;

  const noticesByCategory = notices.reduce((acc, notice) => {
    const category = notice.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(notice);
    return acc;
  }, {} as Record<string, typeof notices>);

  const noticeData = await fetchData<{ data: Array<Notice> }>(
    "/api/notices/landing?limit=10"
  );
  // const researchData = await fetchData<{ result: Array<Object> }>(                                                                                                               
  //   "/api/research/recent"
  // );
  // //console.log(researchData.result)
  // const upcomingEvents = await fetchData<{ data: Array<Object> }>(
  //   "/api/events/upcoming"
  // );
  // //console.log(upcomingEvents.data)

  return (
    <>
      <SocialMedia />
       <NoticeSection
          categories={categories}
          noticesByCategory={noticesByCategory}
        />
      {/* <HomePageLinks /> */}
      {/* <SectionLinks /> */}
      {/* <MiddleCarousel
        research={noticeData.data}
        acheiver={upcomingEvents.data}
        testimonial={upcomingEvents.data}
      /> */}
      {/* <BottomCarousel
        researchData={researchData.result}
        upcomingEvents={upcomingEvents.data}
      /> */}

    </>
  );
}