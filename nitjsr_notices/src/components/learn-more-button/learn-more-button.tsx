import { ButtonHTMLAttributes } from "react";

// can't use emotion, because it's not supported by nextjs server components;
import styles from "./learn-more-button.module.css";

/**
 * Custom button component which looks like previous button
 */
export default function LearnMoreButton({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={styles.button} {...rest}>
      <span className={styles.hyphen} />
      {children}
    </button>
  );
}
