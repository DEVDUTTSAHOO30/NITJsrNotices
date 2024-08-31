import React, { Component } from "react";
import Slider from "react-slick";
// import NoImg from "@assets/images/img_missing.png";
import img from "../../assets/images/img_missing.png";
import "slick-carousel/slick/slick.css"; // Import the slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import the slick carousel theme CSS
import { Box } from "@mui/material";
import Image from "next/image";

import LearnMoreButton from "../learn-more-button/learn-more-button";
interface AutoPlayProps {}



const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const UpcomingEventCarousel = ({ upcomingEvents }) => {
  return (
    <>
      <div style={{ margin: "auto", width: "85%" }}>
        <Slider {...settings}>
          {upcomingEvents.map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  distplay: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "0.8rem",
                  key: index,
                }}
              >
                <Box
                  sx={{
                    height: "480px",
                    width: "100%",
                    boxShadow: "1px 1px 8px lightgrey",
                    borderRadius: "1rem",
                    padding: "1rem",
                  }}
                >
                  <Image
                    src={img}
                    alt="thumbnail"
                    style={{
                      height: "250px",
                      width: "100%",
                    }}
                  />
                  <h3 className="title">
                    <strong>{item.title}</strong>
                  </h3>
                  <LearnMoreButton>Read More</LearnMoreButton>
                </Box>
              </Box>
            );
          })}
        </Slider>
        <Box style={{ margin: "2em 0em" }}>
          <LearnMoreButton>Archive Events</LearnMoreButton>
        </Box>
      </div>
    </>
  );
};

export default UpcomingEventCarousel;


// export default class UpcomingEventCarousel extends Component<AutoPlayProps> {
//   data = [
//     {
//       title:
//         "Performance evaluation of developed empirical models for predicting global solar radiation in western region of India",
//       img: img,
//     },
//     {
//       title:
//         "Performance evaluation of developed empirical models for predicting global solar radiation in western region of India",
//       img: img,
//     },
//     {
//       title:
//         "Performance evaluation of developed empirical models for predicting global solar radiation in western region of India",
//       img: img,
//     },
//     {
//       title:
//         "Performance evaluation of developed empirical models for predicting global solar radiation in western region of India",
//       img: img,
//     },
//     {
//       title:
//         "Performance evaluation of developed empirical models for predicting global solar radiation in western region of India",
//       img: img,
//     },
//     {
//       title:
//         "Performance evaluation of developed empirical models for predicting global solar radiation in western region of India",
//       img: img,
//     },
//   ];

//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       responsive: [
//         {
//           breakpoint: 1000,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true,
//           },
//         },
//         {
//           breakpoint: 950,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 1,
//             initialSlide: 2,
//           },
//         },
//         {
//           breakpoint: 650,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: false,
//           },
//         },
//       ],
//     };
//     return (
//       <div style={{ margin: "auto", width: "85%" }}>
//         <Slider {...settings}>
//           {this.data.map((item, index) => {
//             return (
//               <Box
//                 key={index}
//                 sx={{
//                   distplay: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   padding: "0.8rem",
//                   key: index,
//                 }}
//               >
//                 <Box
//                   sx={{
//                     height: "480px",
//                     width: "100%",
//                     boxShadow: "1px 1px 8px lightgrey",
//                     borderRadius: "1rem",
//                     padding: "1rem",
//                   }}
//                 >
//                   <Image
//                     src={item.img}
//                     alt="thumbnail"
//                     style={{
//                       height: "250px",
//                       width: "100%",
//                     }}
//                   />
//                   <h3 className="title">
//                     <strong>{item.title}</strong>
//                   </h3>
//                   <LearnMoreButton>Read More</LearnMoreButton>
//                 </Box>
//               </Box>
//             );
//           })}
//         </Slider>
//       </div>
//     );
//   }
// }