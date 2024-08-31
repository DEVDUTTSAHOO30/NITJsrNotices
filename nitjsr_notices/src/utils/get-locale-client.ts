"use client";

import Cookie from "js-cookie";

// should be used in the client side only
export default function getLocaleClient(): string {
  return Cookie.get("LANG") ?? "en";
}
