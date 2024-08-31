import React from "react";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Link from "next/link";
import LearnMoreButton from "@/components/learn-more-button/learn-more-button";
import { data } from "./data";

import CurrentAchvCard from "../../../components/currAchievCard/currAcheiveCard";

import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

const WorkSection = ({ fontsize }) => {
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
    <Box id="work">
      <Box
        sx={{
          width: "100%",
          height: "100%",
          marginBottom: "2rem",
          paddingTop: "1rem",
          paddingBottom: "2rem",
          background: "#fff",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            color: "rgba(39,65,135)",
          }}
        >
          Our Acheivers
        </h1>

        <Slider {...settings}>
          {data.map((item, key) => (
            <CurrentAchvCard
              key={`event_card_${key}`}
              item={item}
              fontsize={fontsize}
            />
          ))}
        </Slider>

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
            marginTop: "3rem",
          }}
        >
          <Link href="/Achievers" className="learn__more-btn">
            {" "}
            <LearnMoreButton>Show More</LearnMoreButton>
          </Link>
        </div>
      </Box>
    </Box>
  );
};

export default WorkSection;
