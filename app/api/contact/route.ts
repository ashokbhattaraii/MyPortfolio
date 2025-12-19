import { NextResponse } from "next/server";

import nodemailer from "nodemailer";
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;
    console.log("email", email);
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
      from: body.email,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Message",
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Message from Portfolio</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <hr />
          <p>${message}</p>
        </div>
      `,
    });
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}
