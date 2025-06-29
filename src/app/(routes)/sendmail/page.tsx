"use client";

export default function EmailForm() {
  const sendEmail = async () => {
    const mailOptions = {
      subject: "Test email from Next.js kadirlidilkursu konu buraya",
      to: "csemih@gmail.com",
      text: "This is a test email sent from a Next.js app deployed on Vercel using nodemailer. Deneme 1"
    };

    const res = await fetch("../api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(mailOptions),
    });

    if (res.ok) {
      alert("Email sent successfully");
    } else {
      alert("Error sending email");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={sendEmail}
        style={{
          padding: "10px 20px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Send Example Email
      </button>
    </div>
  );
}