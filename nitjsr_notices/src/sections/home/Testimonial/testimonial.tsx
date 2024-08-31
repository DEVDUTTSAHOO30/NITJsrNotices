import rk from "../../../assets/images/rk.jpg";
import ck from "../../../assets/images/ck.jpg";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "./alumni.css";
import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/material";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import classes from "./alumni.module.css";
import LearnMoreButton from "@/components/learn-more-button/learn-more-button";
var settings = {
  dots: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  vertical: true,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
};

const object = [
  {
    content:
      "Started his entrepreneurial journey in Jamshedpur in 1975 along with his brother SK Behera. Together, they established International Auto Products, which eventually merged with RSB Transmissions (I) Ltd in 2009.",
    img: rk,
    title: "R.K. Behera (1967-72)",
    post: "Founder and Chairman of the RSB Group",
  },
  {
    content:
      "The Institute of National Repute is now all set and ready to be the innovative learning Centre of World Repute. NIT Jamshedpur is surrounded by World Class industries and World Class Professionals, Faculties and above all - World class students.",

    img: ck,
    title: "Prof. Chandreshwar Khan(1969)",
    post: "Management Consultant, Tata Motors",
  },
];

function Alumni() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        marginBottom: "2rem",
        paddingTop: "1rem",
        paddingBottom: "2rem",
        background: "#fff",
        // rgb(245,248,253)
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          color: "rgba(39,65,135)",
        }}
      >
        Testimonials
      </h1>

      <Slider {...settings}>
        {object.map((item) => (
          <Card className={classes["card"]}>
            <Grid
              container
              sx={{
                paddingTop: "20px",
              }}
            >
              <Grid item>
                <img
                  src={item.img.src}
                  className={`${classes["image-toggle"]} ${classes["testimonial-image"]}`}
                />
              </Grid>
              <Grid item xs={12} sm={8} gap={1}>
                <Typography
                  variant="body1"
                  className={classes["testimonial-content-wrapper"]}
                >
                  {item.content}
                </Typography>
                <Grid container>
                  <Grid
                    item
                    xs={12}
                    md={8}
                    sx={{
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: "rgb(39, 65, 135)",
                        fontSize: "1.1rem",
                        fontWeight: "700",
                      }}
                    >
                      {item.title}
                    </Typography>
                    <div>
                      <Typography
                        variant="h6"
                        sx={{
                          color: "rgb(39, 65, 135)",
                          fontSize: "0.8rem",
                          fontWeight: "600",
                        }}
                      >
                        {item.post}
                      </Typography>
                    </div>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <a
                      className="learn__more-btn"
                      href="https://www.nitjaa.org/"
                      target="_blank"
                    >
                      <LearnMoreButton>Alumni Site </LearnMoreButton>
                    </a>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}

export default Alumni;
