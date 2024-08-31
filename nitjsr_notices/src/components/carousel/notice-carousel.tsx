import React from "react";
import Slider from "react-slick";
import { IconButton, Typography, Box } from "@mui/material";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import colors from "@/theme/colors";
import LearnMoreButton from "../learn-more-button/learn-more-button";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";

interface Props {
  noticeData: Array<Notice>;
}

function Tag({ tag }: { tag: string }) {
  return (
    <span
      style={{
        backgroundColor: colors.primary,
        padding: "5px 1rem",
        borderRadius: "100px",
        color: "white",
        textTransform: "capitalize",
        fontSize: "0.8em",
        marginLeft: "1rem",
      }}
    >
      {tag}
    </span>
  );
}

export default function NoticeCarousel({ noticeData }: Props) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    verticalSwiping: true,
  }
  const locale = getLocaleClient();
  const t = getTranslations(locale);
;

  //console.log(noticeData);

  return (
    <div style={{ maxWidth: "520px", margin: "auto", width: "90%" }}>
      <div
        style={{
          backgroundColor: colors.primary,
          height: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "8%",
        }}
      >
        <Typography variant="h3">{t("Notices And Announcements")}</Typography>
      </div>
      <Box sx={{ marginBottom: "3rem", padding: "1rem 0" }}>
        <Slider {...settings}>
          {noticeData.map((item, index) => {
            return (
              <div key={index}>
                <a
                  href={item.path}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textDecoration: "none",
                    alignItems: "center",
                    marginTop: "1rem",
                  }}
                >
                  <IconButton disabled>
                    <PanToolAltIcon
                      sx={{
                        transform: "rotate(90deg)",
                      }}
                    />
                  </IconButton>

                  <Typography
                    variant="body1"
                    style={{
                      color: "#2990ff",
                    }}
                  >
                    {item.title}
                    {item.notification_for.map((tag, index) => {
                      return <Tag key={index} tag={tag} />;
                    })}
                  </Typography>
                </a>
              </div>
            );
          })}
        </Slider>
      </Box>
      <LearnMoreButton>{t("show_more_button")}</LearnMoreButton>
    </div>
  );
}