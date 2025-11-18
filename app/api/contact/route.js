import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, message } = await req.json();

  try {
    // Setup email sender
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    // Email isi
    await transporter.sendMail({
      from: email,
      to: process.env.NEXT_PUBLIC_EMAIL_USER,
      subject: `Pesan Baru dari ${name}`,
      text: message,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ success: false, error }, { status: 500 });
  }
}
