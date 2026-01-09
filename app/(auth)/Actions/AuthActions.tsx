"use server";
import { prisma } from "@/lib/db";
import { NextRequest } from "next/server";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { createClient } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { CloudCog } from "lucide-react";
interface registerType {
  fname: string;
  lname: string;
  phone: string;
  email: string;
  password: string;
}
export async function registerUser(formData: registerType) {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  });
  if (error) {
    return { success: false, error: error.message };
  }
  console.log("data", data);
  if (data.user) {
    try {
      await prisma.user.create({
        data: {
          email: formData.email,
          fname: formData.fname,
          lname: formData.lname,
          phone: formData.phone,
          password: formData.password,
        },
      });
      return { success: true };
    } catch (dbError) {
      console.error("Prisma Error:", dbError);
      return {
        success: false,
        error: "Account created, but profile could not be saved.",
      };
    }
  }
}

export async function loginWithGoogle() {
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
