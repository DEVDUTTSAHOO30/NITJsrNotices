"use client";

import { createContext, useEffect, useState } from "react";

type DrawerContextType = { open: boolean; setOpen: (x: boolean) => void };

export const DrawerContext = createContext<DrawerContextType>({
  open: false,
  setOpen: (x: boolean) => {},
});

export function DrawerContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // hide the main scrollbar to avoid getting two scroll bars!
    document.body.style.overflowY = open ? "hidden" : "auto";
  }, [open]);

  return (
    <DrawerContext.Provider value={{ open, setOpen }}>
      {children}
    </DrawerContext.Provider>
  );
}
