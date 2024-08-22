// export { auth as middleware } from "./auth"

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "../auth";
import { ROOT, ADMIN_ROUTE, PROTECTED_ROUTES } from "./constants/roles"; 

export default async function middleware(request: NextRequest) {
  const session = await auth();
  const isAuthenticated = !!session;
  const isAdmin = session?.user?.role === 'admin';
  const { pathname } = request.nextUrl;

  if (pathname.startsWith(ADMIN_ROUTE) && !isAdmin) {
    return NextResponse.redirect(new URL(ROOT, request.url));
  }

  const isProtected = PROTECTED_ROUTES.some((route: string) =>
    pathname.startsWith(route)
  );

  if (isProtected && !isAuthenticated) {
    return NextResponse.redirect(new URL(ROOT, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
