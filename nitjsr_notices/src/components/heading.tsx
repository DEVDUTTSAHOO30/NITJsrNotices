import { HtmlHTMLAttributes } from "react";
import colors from "@/theme/colors";

export default function Heading(props: HtmlHTMLAttributes<HTMLHeadingElement>) {
  const { style, children, ...rest } = props;
  return (
    <h3
      style={{
        ...style,
        color: "white",
        backgroundColor: colors.primary,
        fontSize: "2rem",
        textTransform: "capitalize",
        margin: 0,
        padding: "0.6rem",
        fontWeight: 500,
      }}
      {...rest}
    >
      {children}
    </h3>
  );
}
