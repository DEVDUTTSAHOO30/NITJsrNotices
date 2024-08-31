import { useEffect, useState } from "react";

/**
 * Usage: const offsetTop = useOffsetTop(100);
 * @returns whether the page is scrolled down
 */
export default function useOffsetTop(top?: number) {
  const [offsetTop, setOffsetTop] = useState(false);
  const isTop = top || 100;

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > isTop) {
        setOffsetTop(true);
      } else {
        setOffsetTop(false);
      }
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTop]);

  return offsetTop;
}
