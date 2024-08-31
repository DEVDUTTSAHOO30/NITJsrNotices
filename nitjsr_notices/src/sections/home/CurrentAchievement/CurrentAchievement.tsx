import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../../../components/Heading/heading";

import LearnMoreButton from "../../../components/learn-more-button/learn-more-button";
import Container from "../../../components/UI/Container/Container";
import {
  SectionHeader,
  SliderWrapper,
} from "../EventSection/EventSection.style";
import Link from "next/link";
import { data } from "./data";

import CurrentAchvCard from "../CurrentAchieveCard/CurrentAchieveCard";

interface WorkSectionProps {
  fontsize?: string; // Assuming fontsize is a string, you can adjust the type accordingly
}

const WorkSection: React.FC<WorkSectionProps> = ({ fontsize = "1em" }) => {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    // <section id="work" style={{ marginBottom: "1rem" }}>
    <section id="work">
      {/* <Container width={data.length >= 3 ? "90%" : "60%"}> */}
      <SectionHeader>
        <Heading content={t("Current_Achievements")} />
      </SectionHeader>
      <Container
        width="100%"
        className={undefined}
        fullWidth={undefined}
        noGutter={undefined}
        mobileGutter={undefined}
      >
        <SliderWrapper>
          <Slider {...settings}>
            {data.map((item, key) => (
              <CurrentAchvCard
                key={`event_card_${key}`}
                item={item}
                fontsize={fontsize}
              />
            ))}
          </Slider>
        </SliderWrapper>
        {data.length === 0 && (
          <div>
            <div className="singleCard text-center">
              <p style={{ fontSize: fontsize }} className="desc">
                Hello
              </p>
            </div>
          </div>
        )}
        <div
          className="mt-4"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/Achievers" className="learn__more-btn">
            {" "}
            {/* <span className="hyphen" />
            <span className="btn_text">{t("show_more_button")}</span> */}
            <LearnMoreButton>Show More</LearnMoreButton>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default WorkSection;
