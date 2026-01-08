import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  const cookieStore = await cookies();

  // Create Supabase server client
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY!,
    { cookies: cookieStore }
  );

  // Get user session
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // If user is not logged in, redirect to login
  if (!session) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  // User is logged in, allow the request
  return NextResponse.next();
}

// Apply middleware only to /admin routes
export const config = {
  matcher: ["/admin/:path*"], // protect all /admin pages
};
