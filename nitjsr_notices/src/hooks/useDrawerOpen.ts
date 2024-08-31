import { DrawerContext } from "@/context/drawer-context";
import { useContext } from "react";

export default function useDrawerOpen(): boolean {
  const drawerData = useContext(DrawerContext);
  return drawerData.open;
}