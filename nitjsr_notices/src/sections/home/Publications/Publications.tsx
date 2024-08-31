import React, { useState, useEffect, useCallback } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Box } from "@mui/material";
import Link from "next/link";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import { Height } from "@mui/icons-material";
const WorkSection = () => {
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
          "Sugar-based carboxamidoquinoline conjugate for sensing Cu2+ and Au3+ ions in water through different binding modes and real application",
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
          "A review on dual detection of Cu2+ and Ni2+ ions biometric and colorimetric organic molecular probes",
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
    <section id="publication" >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          marginBottom: "2rem",
          paddingTop: "1rem",
          paddingBottom: "2rem",
          background: "#fff",
          //   rgb(245,248,253)
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "3rem",
            color: "rgba(39,65,135)",
          }}
        >
          Research and Publications
        </h1>

        <Slider {...settings}>
          {researchData.result ? (
            researchData.result.map((item, index) => (
              <div
                key={index}
                style={{
                  borderRadius: "1em",
                  margin: "1em 0.1em",
                  padding: "1em",
                  fontSize: "2em",
                //   height: "100%",
                }}
              >
                <div
                  className="researchCard"
                  style={{
                    backgroundColor: index % 2 === 0 ? "#f5f8fd" : "#fff",
                    textAlign: "justify",
                    borderRadius: "1em",
                    padding: "1em",
                    border: "1px solid transparent",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    margin: "1em 0em",
                    height: "100%",
                    fontSize: "1.2em",
                  }}
                >
                  <h3
                    className="title"
                    style={{ display: "inline", color: "rgb(39, 65, 135)" }}
                  >
                    {item.authors} ({item.pub_date})
                  </h3>
                  <p style={{ display: "inline", color: "rgb(97, 105, 112)" }}>
                    {item.title}
                  </p>

                  <p
                    style={{ display: "inline", color: "rgb(97, 105, 112)" }}
                    className="desc"
                  >
                    <i>{item.journal}</i>
                  </p>
                  <br />
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      textDecoration: "none",
                      fontSize: "1em",
                      color: "#007bff",
                    }}
                  >
                    Link
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>No Researches to show</p>
          )}
        </Slider>
      </Box>
    </section>
  );
};

export default WorkSection;
