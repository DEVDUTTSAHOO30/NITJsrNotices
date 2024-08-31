"use client";

import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";
import logo from "@/assets/images/logo_new.png";

import colors from "@/theme/colors";
import useOffsetTop from "@/hooks/useOffsetTop";
import { DrawerContext } from "@/context/drawer-context";

export default function Nav() {
  const offsetTop = useOffsetTop();
  const isHome = usePathname() === "/";
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: {
            xs: "space-between",
            lg: isHome ? "space-around" : "space-between",
          },
          py: isHome ? 2 : "5px",
          px: 5,
          boxShadow: offsetTop || !isHome ? "0 0 10px rgba(0,0,0,0.3)" : "",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "white",
        }}
      >
        <Link href="/">
          <Image
            src={logo}
            width={200}
            height={isHome ? 100 : 80}
            alt="logo"
            style={{
              objectFit: "contain",
            }}
          />
        </Link>
        <Box
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            display: {
              xs: "none",
              lg: isHome ? "block" : "none",
            },
          }}
        >
          <Typography variant="h2" sx={{ mb: 2 }}>
            National Institute of Technology Jamshedpur
          </Typography>
          <Typography variant="h2">
            राष्ट्रीय प्रौद्योगिकी संस्थान जमशेदपुर
          </Typography>
        </Box>
        <Box sx={{ width: "75px" }} />
      </Box>

      <SidenavToggle />
    </>
  );
}

function SidenavToggle() {
  const { open, setOpen } = useContext(DrawerContext);

  return (
    <Box
      sx={{
        color: "white",
        backgroundColor: colors.primary,
        alignSelf: "stretch",
        position: "fixed",
        top: "0",
        right: "40px",
        height: "100px",
        width: "75px",
        zIndex: "400",
        cursor: "pointer",
        userSelect: "none",
      }}
      onClick={() => setOpen(!open)}
    >
      {/* {open ? ( */}
      <AddIcon
        style={{
          fontSize: "32",
          fontWeight: 900,
          color: "white",
          transformOrigin: "0 0",
          transform: open
            ? "rotate(45deg) scale(1.1) translateX(-50%) translateY(-50%)"
            : "rotate(0deg) scale(1) translateX(-50%) translateY(-50%)",
          visibility: open ? "visible" : "hidden",
          opacity: open ? 1 : 0,
          transition: "all 350ms ease 0ms",

          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      />
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "5px",
          height: "22px",
          width: "26px",
          position: "absolute",
          transformOrigin: "0 0",
          transform: open
            ? "scale(0.1) translateX(-50%) translateY(-50%)"
            : "scale(1.1) translateX(-50%) translateY(-50%)",
          opacity: open ? 0 : 1,
          left: "50%",
          top: "50%",
          transition: "all 350ms ease 0ms",
          listStyleType: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li
          style={{
            width: "5px",
            height: "4px",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        ></li>
        <li
          style={{
            width: "5px",
            height: "4px",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        ></li>
        <li
          style={{
            width: "5px",
            height: "4px",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        ></li>
        <li
          style={{
            width: "5px",
            height: "4px",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        ></li>
        <li
          style={{
            width: "5px",
            height: "4px",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        ></li>
        <li
          style={{
            width: "5px",
            height: "4px",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        ></li>
        <li
          style={{
            width: "5px",
            height: "4px",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        ></li>
        <li
          style={{
            width: "5px",
            height: "4px",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        ></li>
        <li
          style={{
            width: "5px",
            height: "4px",
            backgroundColor: "rgb(255, 255, 255)",
          }}
        ></li>
      </ul>
    </Box>
  );
}
