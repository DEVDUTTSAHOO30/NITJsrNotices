import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { youtubePlay } from "react-icons-kit/fa/youtubePlay";
import { facebook } from "react-icons-kit/fa/facebook";
import { twitter } from "react-icons-kit/fa/twitter";
import { instagram } from "react-icons-kit/fa/instagram";

export const socialLinks = [
  {
    id: 1,
    icon: (
      <Icon
        style={{
          color: "white",
          backgroundColor: "#FF0000",
          padding: "20px 15px",
        }}
        size={18}
        icon={youtubePlay}
      />
    ),
    name: "youtube",
    link: "https://www.youtube.com/channel/UCSKf3jRXKuA9QkPsu69tzkQ",
  },
  {
    id: 2,
    icon: (
      <Icon
        style={{
          color: "white",
          backgroundColor: "#0077B5",
          padding: "20px 15px",
        }}
        size={18}
        icon={linkedin}
      />
    ),
    name: "linkedin",
    link: "https://www.linkedin.com/school/national-institute-of-technology-jamshedpur/mycompany/",
  },
  {
    id: 3,
    icon: (
      <Icon
        style={{
          color: "white",
          backgroundColor: "#3b5998",
          padding: "20px 15px",
        }}
        size={18}
        icon={facebook}
      />
    ),
    name: "facebook",
    link: "https://www.facebook.com/NITJamshedpurOfficial/",
  },
  {
    id: 4,
    icon: (
      <Icon
        style={{
          color: "white",
          backgroundColor: "#38A1F3",
          padding: "20px 15px",
        }}
        size={18}
        icon={twitter}
      />
    ),
    name: "twitter",
    link: "https://twitter.com/jamshedpur_nit?s=08",
  },
  {
    id: 5,
    icon: (
      <Icon
        style={{
          color: "white",
          backgroundColor: "#C42859",
          padding: "20px 15px",
        }}
        size={18}
        icon={instagram}
      />
    ),
    name: "instagram",
    link: "https://www.instagram.com/nitjamshedpur_official/",
  },
];
