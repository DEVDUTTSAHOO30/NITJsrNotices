"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

// server action for switching locale
export default async function setLocale(pathname: string, locale: string) {
  "use server";
  if (locale !== "en" && locale !== "hi") {
    // unsupported locale;
    return;
  }

  const cookieStore = cookies();
  cookieStore.set("LANG", locale);

  revalidatePath(pathname);
}
