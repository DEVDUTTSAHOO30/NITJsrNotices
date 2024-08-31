import { Typography } from "@mui/material";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
export default function MessageFromDirector() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  return (
    <>
      <Typography variant="h6">Message From the Director</Typography>
      <Typography>
        Greetings from the Director! <br />
      </Typography>
      <Typography style={{ textAlign: "justify" }}>
        It is a privilege and honour for me to have led the NIT Jamshedpur as a
        Director of the Institution. NIT Jamshedpur has a rich legacy of more
        than sixty dedicated years of service to the nation and its pride of
        Jharkhand. NIT Jamshedpur takes extreme pride in the fact that it has
        been occupying a unique position in imparting technological education to
        Indian youth. Since its inception, the institute has had a vision to
        provide quality technical education and to facilitate scientific and
        technological research, coupled with a mission to develop human
        potential to its zenith with excellence in teaching and high quality
        research. In consonance with its vision, the institute has been
        contributing substantially to our country's technological power. NIT
        Jamshedpur emphasizes the need to promote entrepreneurship by
        introducing entrepreneurial spirit and start up as a part of the
        curriculum. It is fast emerging as a global knowledge centre for quality
        research and teaching through cross disciplinary, innovative and dynamic
        approaches. It is indeed a pleasure in mentioning that institute is
        leading active research collaborations and have established vital links
        with many repreted institution industry, business and government
        agencies. The Institute is aiming to develop 21th century skills and
        competencies supported by different learning frameworks and Industry
        supported by a one semester internship program for undergraduate and
        postgraduate students. As a result year after year, with its exemplary
        placement record, NIT Jamshedpur has reinforced its brand image as a
        leading technical institution. I on the behalf of all stakeholders,
        would like to call everyone to work on converged ideas to achieve the
        most deserved position at national and international levels. Institutes
        will have significant contributions in different flagship programs of
        our country like make in India, Start up India, Standup India.
      </Typography>
    </>
  );
}
