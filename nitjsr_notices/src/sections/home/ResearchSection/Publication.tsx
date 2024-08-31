import React, { useState, useEffect, useCallback } from "react";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../../components/Heading/heading";
import Container from "../../../components/UI/Container/Container";
import { SectionHeader, SliderWrapper } from "./ResearchSection.style";
// import { getShortString } from "../../../functions/utils";
// import { getRequest } from "../../../functions/request";

const WorkSection = () => {
  //const [researchData, setResearchData] = useState([]);

  const getResearchData = useCallback(async () => {
    //let res = await getRequest("/publications/recent");
    //let data = res.data;
    //setResearchData(data);
    setTimeout(() => {
      console.log(researchData);
    }, 2000);
  }, []);

  //useEffect(getResearchData, [getResearchData]);
  const researchData = {
    result: [
      {
        authors: "B. Dey, D. Boje, S. Giri, A.K. Atta*",
        id: "bde13d9e-321a-4b4b-8c99-3fbb2ba99976",
        image: null,
        image_caption: "",
        info: "",
        journal: "Journal of Photochemistry Photobiology A Chemistry ",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S101060302300758X",
        page_no: "115293",
        pub_date: "2023",
        timestmap: "2024-02-13T00:04:19.000Z",
        title:
          "Bis-pyrene-containing fluorescent receptor for explosive picric acid and Au(III) via dynamic excimer quenching process in aqueous medium: Practical application",
        type: "International Journal Paper",
        uploaded_by: "CH110",
        volume: 448,
      },
      {
        authors: "D. Boje, B. Dey, S.K. Sahoo, A.K. Atta*",
        id: "5c7bc586-db64-4497-ac4e-0ecb82aea692",
        image: null,
        image_caption: "",
        info: "",
        journal: "Methods",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S104620232300169X",
        page_no: "119-126 ",
        pub_date: "2023",
        timestmap: "2024-02-13T00:02:35.000Z",
        title:
          "Triazole-linked amidopyrene-tagged fluorometric probe for Au3+ ions and pH control aggregation-induced emission",
        type: "International Journal Paper",
        uploaded_by: "CH110",
        volume: 219,
      },
      {
        authors: "D. Boje, S.K. Sahoo, A.K. Atta*",
        id: "06cd0170-2b8c-4871-bc8c-2090cd90d101",
        image: null,
        image_caption: "",
        info: "",
        journal: "Analytica Chimica Acta ",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S0003267023007602",
        page_no: " 341539",
        pub_date: "2023",
        timestmap: "2024-02-13T00:00:37.000Z",
        title:
          "Sugar -based carboxamidoquinoline conjugate for sensing Cu2+ and Au3+ ions in water through different binding modes and real application",
        type: "International Journal Paper",
        uploaded_by: "CH110",
      },
      {
        authors: "B. Dey, P. Pahari, S. K. Sahoo, A.K. Atta*",
        id: "e62f8576-5eb3-4c6a-8eaf-7f08b571118c",
        image: null,
        image_caption: "",
        info: "",
        journal: "Journal of Photochemistry Photobiology A Chemistry  ",
        link: "https://www.sciencedirect.com/science/article/abs/pii/S1010603023001120#:~:text=In%20conclusion%2C%20we%20have%20designed,aqueous%20solution%20and%20solid%20states.",
        page_no: "114647",
        pub_date: "2023",
        timestmap: "2024-02-12T23:58:29.000Z",
        title:
          "Triazole-based pyrene-sugar analogues for selective detection of picric acid in water medium and paper strips",
        type: "International Journal Paper",
        uploaded_by: "CH110",
        volume: 440,
      },
      {
        id: "f2b5d099-2f98-4b01-9001-03986d7ed1d6",
        type: "International Journal Paper",
        title:
          "A review on dual detection of Cu2+ and Ni2+ ions b…ometric and colorimetric organic molecular probes",
        info: "",
        pub_date: "2023",
        authors: "Somesh Dwivedi",
        journal: "",
        link: "#",
      },
    ],
  };
  const locale = getLocaleClient();
  const t = getTranslations(locale);
  var settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section id="publication">
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          color: "rgba(39,65,135)",
        }}
      >
        {t("home_research_and_publications")}
      </h1>
      <Container
        width="90%"
        className={undefined}
        fullWidth={undefined}
        noGutter={undefined}
        mobileGutter={undefined}
      >
        <SectionHeader>
          <Heading content={t("publication")} />
        </SectionHeader>
        <SliderWrapper>
          <Slider {...settings}>
            {researchData.result ? (
              researchData.result.map((item, index) => (
                <div key={index}>
                  <div
                    className="researchCard"
                    style={
                      index % 2 === 0
                        ? { backgroundColor: "#f5f8fd", textAlign: "justify" }
                        : { backgroundColor: "#fff", textAlign: "justify" }
                    }
                  >
                    <h3 className="title" style={{ display: "inline" }}>
                      {item?.authors && `${item.authors} (${item.pub_date})`}
                    </h3>
                    <p style={{ display: "inline" }}>{item?.title}</p>

                    <p style={{ display: "inline" }} className="desc">
                      <i>{item?.journal}</i>
                    </p>
                    <br />
                    <a href={item?.link} target="_blank" rel="noreferrer">
                      Link
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No Researches to show</p>
            )}
          </Slider>
        </SliderWrapper>
      </Container>
    </section>
  );
};

export default WorkSection;
