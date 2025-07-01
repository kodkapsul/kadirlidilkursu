// app/api/send-email/route.js

export async function POST(req) {
  const nodemailer = (await import('nodemailer')).default;
  const { subject, text, html, recaptchaToken } = await req.json();

  // 1. reCAPTCHA doğrulama
  const secret = process.env.RECAPTCHA_SECRET_KEY; // Google reCAPTCHA v3 secret key'iniz
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptchaToken}`;
  const recaptchaRes = await fetch(verifyUrl, { method: "POST" });
  const recaptchaData = await recaptchaRes.json();

  if (!recaptchaData.success || recaptchaData.score < 0.5) {
    return new Response(
      JSON.stringify({ message: "Spam doğrulaması başarısız.", error: "Low score or invalid token" }),
      { status: 400 }
    );
  }

  // 2. Mail gönderme işlemi (senin mevcut kodun)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = { 
    from: "iletisim@kadirlidilkursu.com",
    to: "csemih@gmail.com",
    subject,
    text,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Mesajınız iletildi" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Bir hata oluştu!", error: error.message }),
      { status: 500 }
    );
  }
}
