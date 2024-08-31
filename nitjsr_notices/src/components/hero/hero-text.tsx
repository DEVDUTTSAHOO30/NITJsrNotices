"use client";

import { HeroContext } from "@/context/hero-context";
import { useContext, useEffect } from "react";

// A simple component to change the hero text;
export default function HeroText({ children }: { children: React.ReactNode }) {
  const hero = useContext(HeroContext);

  useEffect(() => {
    hero.setHeroText(children);
  }, [children, hero]);

  return null;
}
