import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Note: Middleware runs on the server and cannot access localStorage
// For client-side route protection, we use the useRequireAuth hook in components
export function middleware(request: NextRequest) {
  // For now, allow all requests through
  // Client-side protection is handled by useRequireAuth hook
  return NextResponse.next();
}

export const config = {
  matcher: ['/app/dashboard/:path*', '/auth/:path*'],
};
