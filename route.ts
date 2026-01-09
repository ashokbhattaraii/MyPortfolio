import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  console.log("Callback received, code:", code ? "present" : "missing");

  if (!code) {
    return NextResponse.redirect(`${origin}/login`);
  }

  let response = NextResponse.redirect(`${origin}/admin`);

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error || !data.user) {
    console.error("Session exchange failed:", error?.message);
    return NextResponse.redirect(`${origin}/login`);
  }

  console.log("Session established for:", data.user.email);

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email: data.user.email! },
    });

    if (!existingUser) {
      const fullName = data.user.user_metadata?.full_name ?? "";
      await prisma.user.create({
        data: {
          email: data.user.email!,
          fname: fullName.split(" ")[0] || "Google",
          lname: fullName.split(" ").slice(1).join(" ") || "",
        },
      });
    }
  } catch (dbError) {
    console.error("Database error:", dbError);
  }

  return response;
}
