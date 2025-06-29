// app/api/send-email/route.js
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(req) {
  const { subject, text, to, html } = await req.json();

  const mailOptions = { 
    from: "iletisim@kadirlidilkursu.com",
    to,
    subject,
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error sending email", error }),
      { status: 500 }
    );
  }
}

/*
SMTP_HOST=mail.isimtescil.net
SMTP_PORT=587
SMTP_USER=iletisim@tatlisusigorta.com
SMTP_PASS=2ZDJADAD
*/