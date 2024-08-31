import { NextRequest, NextResponse } from "next/server";

export let defaultLocale = "en";

function getLocale(request: NextRequest): string {
  if (request.cookies.has("LANG")) {
    return request.cookies.get("LANG").value;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const matcherRegex = new RegExp(
    "^(?!/(?:_next/static|favicon\\.ico|swc\\.js|api)(?:/|$))"
  );

  const locale = getLocale(request) ?? defaultLocale;
  const pathName = request.nextUrl.pathname;
  if (pathName === "/") {
    const newUrl = new URL(`/${locale}`, request.nextUrl);
    return NextResponse.rewrite(`${newUrl}`);
  }
  const newUrl = new URL(`/${locale}${pathName}`, request.nextUrl);
  console.log("Updated path is", `/${locale}${pathName}`);
  console.log("The url is", newUrl);

  return NextResponse.rewrite(newUrl);
}

export const config = {
  // do not localize next.js paths
  matcher: [
    "/((?!api|_next/static|_next/image|_next/*|assets|favicon.ico|sw.js).*)",
  ],
};
