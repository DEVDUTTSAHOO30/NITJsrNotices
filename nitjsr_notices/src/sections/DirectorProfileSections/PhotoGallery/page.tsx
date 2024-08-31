import { Box } from "@mui/material";
import getLocaleClient from "@/utils/get-locale-client";
import getTranslations from "@/utils/translate";
import Image from "next/image";
import direcImg1 from "../../../assets/images/director-Gallary1.jpg";
import direcImg2 from "../../../assets/images/director-Gallary2.jpg";

export default function PhotoGallery() {
  const locale = getLocaleClient();
  const t = getTranslations(locale);

  const images = [
    {
      src: direcImg1,
      alt: "directorGallery1",
    },
    {
      src: direcImg2,
      alt: "directorGallery2",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "@media (max-width: 1024px)": {
          flexDirection: "column",
        },
      }}
    >
      {images.map((image, index) => (
        <Box key={index} sx={{ mr: 2 }}>
          {" "}
          <Image src={image.src} alt={image.alt} width={400} height={500} />
        </Box>
      ))}
    </Box>
  );
}
