import React, { Component } from "react";
import Slider from "react-slick";
// import NoImg from "@assets/images/img_missing.png";
import img from "../../assets/images/img_missing.png";
import "slick-carousel/slick/slick.css"; // Import the slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import the slick carousel theme CSS
import { Box } from "@mui/material";
import Image from "next/image";
interface AutoPlayProps {}

export default class AutoPlay extends Component<AutoPlayProps> {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 10000,
      cssEase: "linear",
    };
    return (
      <div style={{ maxWidth: "520px", margin: "auto", width: "90%" }}>
        <Slider {...settings}>
          <Box sx={{ maxWidth: "520px", margin: "auto" }}>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              src={img}
              alt="Image.png"
            />
          </Box>
          {/* <Box sx={{ maxWidth: "520px", margin: "auto" }}>
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              src={img}
              alt="Image.png"
            />
          </Box> */}
          {/* <Box height={{ xs: 240, sm: 280, md: 300, lg: 350, xl: 370 }}>
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "100%" }}
            src={img}
            alt="Image.png"
          />
        </Box> */}
        </Slider>
      </div>
    );
  }
}
