"use client";

import { createContext, useState } from "react";

type HeroContextType = {
  heroText: React.ReactNode | null;
  setHeroText: (newText: React.ReactNode | null) => void;
};

export const HeroContext = createContext<HeroContextType>({
  heroText: null,
  setHeroText: (x: string) => {},
});

export function HeroContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [heroText, setHeroText] = useState<React.ReactNode | null>(null);

  return (
    <HeroContext.Provider value={{ heroText, setHeroText }}>
      {children}
    </HeroContext.Provider>
  );
}
