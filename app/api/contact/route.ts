import { NextResponse } from "next/server";

import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      replyTo: email,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    await transporter.verify();
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Message",
      text: message,
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
