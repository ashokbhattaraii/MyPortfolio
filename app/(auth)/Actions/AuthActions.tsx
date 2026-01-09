"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server"; // ✅ Use server client
import { supabase } from "@/lib/supabase";

interface registerType {
  fname: string;
  lname: string;
  phone: string;
  email: string;
  password: string;
}

export async function registerUser(formData: registerType) {
  const supabase = await createClient(); // ✅ Call it fresh

  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
    options: {
      data: {
        fname: formData.fname,
        lname: formData.lname,
        phone: formData.phone,
      },
    },
  });

  if (error) {
    return { success: false, error: error.message };
  }

  redirect("/login");
}

export async function handleLogin(formData: registerType) {
  const supabase = await createClient(); // ✅ Call it fresh

  const { data, error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  });

  console.log("Login response:", { data, error });

  if (error) {
    console.log("Login error:", error);
    return { error: error.message };
  }

  if (data.session) {
    console.log("Session created successfully");
    revalidatePath("/", "layout");
    redirect("/admin");
  }

  return { success: true };
}

export async function loginWithGoogle() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${
        process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"
      }/api/auth/callback`,
    },
  });

  if (error) {
    console.log("Google Auth Error", error);
  }

  if (data?.url) {
    redirect(data.url);
  }
}

export async function logOut() {
  const supabase = await createClient();
  const logOutUser = await supabase.auth.signOut();
  if (logOutUser) {
    redirect("/login");
  }
}
