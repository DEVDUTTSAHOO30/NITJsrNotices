import { cookies } from "next/headers";

export default function getLocaleServer(): string {
  const cookieStore = cookies();
  return cookieStore.get("LANG")?.value ?? "en";
}
