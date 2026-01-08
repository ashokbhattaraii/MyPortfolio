import { createServerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) return NextResponse.redirect(`${origin}/login`);

  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ROLE_KEY!,
    { cookies: cookieStore }
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
  console.log("Existing user", existingUser);

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
  console.log("Existing user", existingUser);
  return NextResponse.redirect(`${origin}/admin`);
}
