"use client";

import { socialLinks } from "./social-links";
// import styles from "./social-media.module.css";
import styles from "./social-media.module.css";
import useOffsetTop from "@/hooks/useOffsetTop";

export default function SocialMedia() {
  const offsetTop = useOffsetTop();
  return (
    // iterate over all socialmedia links
    offsetTop && (
      <div className={styles.socialMedia}>
        {socialLinks.map((link) => {
          return (
            <a
              key={link.id}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className={styles.socialItem}
            >
              {link.icon}
            </a>
          );
        })}
      </div>
    )
  );
}
