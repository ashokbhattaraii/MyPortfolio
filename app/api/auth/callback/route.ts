import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${origin}/login`);
  }

  const cookieStore = cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        },
      },
    }
  );

  const { data, error } = await supabase.auth.exchangeCodeForSession(code);

  if (error || !data?.user) {
    console.error("Supabase auth error:", error);
    return NextResponse.redirect(`${origin}/login`);
  }

  const user = data.user;

  const existingUser = await prisma.user.findUnique({
    where: { email: user.email! },
  });

  if (!existingUser) {
    const fullName = user.user_metadata?.full_name ?? "";
    await prisma.user.create({
      data: {
        email: user.email!,
        fname: fullName.split(" ")[0] || "Google",
        lname: fullName.split(" ").slice(1).join(" ") || "",
      },
    });
  }

  return NextResponse.redirect(`${origin}/admin`);
}
