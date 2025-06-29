// app/api/send-email/route.js

export async function POST(req) {
  const nodemailer = (await import('nodemailer')).default;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const { subject, text, html } = await req.json();

  const mailOptions = { 
    from: "iletisim@kadirlidilkursu.com",
    to: "csemih@gmail.com", // Sabit alıcı
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
      JSON.stringify({ message: "Error sending email", error: error.message }),
      { status: 500 }
    );
  }
}
