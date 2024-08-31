"use client";

import { DrawerContext } from "@/context/drawer-context";
import { Box, MenuItem, Select } from "@mui/material";
import { useContext, experimental_useOptimistic as useOptimistic } from "react";

import SideAccordion from "./accordian/accordian";
import setLocale from "@/utils/set-locale";

export default function Sidenav({
  children,
  currentLocale,
}: {
  children?: React.ReactNode;
  currentLocale: string;
}) {
  const { open, setOpen } = useContext(DrawerContext);

  // optimisitic locale is the locale that we are trying to set
  const [optimisiticLocale, setOptimisiticLocale] = useOptimistic(
    currentLocale,
    (state, newLocale) => newLocale
  );

  return (
    <>
      <Box
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          overflowY: "auto",
          width: "410px",
          zIndex: 300,
          transition: "transform 0.3s ease-in-out",
          transform: open ? "translateX(0)" : "translateX(100%)",
          backgroundColor: "white",
        }}
      >
        {/* Select menu for locale */}

        <Select
          value={optimisiticLocale}
          sx={{
            marginTop: "1rem",
            marginLeft: "1rem",
          }}
          onChange={async (e) => {
            setOptimisiticLocale(e.target.value as string);
            await setLocale(window.location.pathname, e.target.value as string);
          }}
        >
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"hi"}>हिंदी</MenuItem>
        </Select>

        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box
            display={"flex"}
            width={"80%"}
            justifyContent={"center"}
            alignItems={"center"}
            marginTop={"5rem"}
          >
            <SideAccordion />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          display: open ? "block" : "none",
          zIndex: 250,
        }}
        onClick={() => setOpen(!open)}
      />
    </>
  );
}
