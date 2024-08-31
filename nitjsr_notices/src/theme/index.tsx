"use client";

import { createTheme, ThemeProvider } from "@mui/material";
import colors from "./colors";

const theme = createTheme({
  typography: {
    fontFamily: "Source Sans, sans-serif",

    //used in the main NIT Jamshedpur heading
    h2: {
      fontWeight: "bold",
      color: colors.secondary,
      fontSize: "2.1rem",
    },

    //used in notices & announcements heading and for similar others
    h3: {
      color: "white",
      fontSize: "1.7rem",
      "@media (max-width:500px)": {
        fontSize: "1.3rem",
      },
    },

    //used for notices links and similar others
    body1: {
      color: colors.secondary,
      fontSize: "1rem",
    },
  },
});

export default function MyThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
