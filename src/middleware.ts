import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {

}

export const config = {
  matcher: ['/user/:path*', '/user/dashboard/:path*'],
};
