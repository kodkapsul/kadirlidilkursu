"use client"
import React, { useState, useEffect } from 'react';

const SITE_KEY = "6LdDUXQrAAAAAAdn181hvL5lNHvu0BeVDs8jwEnS";

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');

  // reCAPTCHA v3 scriptini yükle
  useEffect(() => {
    if (!document.getElementById('recaptcha-v3-script')) {
      const script = document.createElement('script');
      script.id = 'recaptcha-v3-script';
      script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('Gönderiliyor...');

    // reCAPTCHA v3 token al
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute(SITE_KEY, { action: 'submit' }).then(async (token: string) => {
          setRecaptchaToken(token);

          try {
            const res = await fetch('/api/send-email', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                to: 'iletisim@kadirlidilkursu.com',
                subject: `İletişim Formu: ${form.name}`,
                text: `İsim: ${form.name}\nEposta: ${form.email}\nMesaj: ${form.message}`,
                html: `<b>İsim:</b> ${form.name}<br/><b>Eposta:</b> ${form.email}<br/><b>Mesaj:</b> ${form.message}`,
                recaptchaToken: token,
              }),
            });
            const data = await res.json();
            setStatus(data.message + (data.error ? `: ${data.error}` : ''));
            if (res.ok) {
              setForm({ name: '', email: '', message: '' });
            }
          } catch {
            setStatus('Gönderirken bir hata oluştu.');
          }
          setIsSending(false);
        });
      });
    } else {
      setStatus('reCAPTCHA yüklenemedi. Lütfen sayfayı yenileyin.');
      setIsSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="box p-5">
      <label className="is-block mb-4">
        <span className="is-block mb-2">İsim Soyisim</span>
        <input
          name="name"
          type="text"
          className="input"
          placeholder="İsminizi giriniz"
          value={form.name}
          onChange={handleChange}
          required
          disabled={isSending}
        />
      </label>
      <label className="is-block mb-4">
        <span className="is-block mb-2">Eposta adresi</span>
        <input
          required
          name="email"
          type="email"
          className="input"
          placeholder="örn: xxxx@example.com"
          value={form.email}
          onChange={handleChange}
          disabled={isSending}
        />
      </label>
      <label className="is-block mb-4">
        <span className="is-block mb-2">Açıklama</span>
        <textarea
          name="message"
          className="textarea"
          rows={4}
          placeholder="Mesaj içeriği..."
          value={form.message}
          onChange={handleChange}
          required
          disabled={isSending}
        ></textarea>
      </label>
      <div className="mb-4">
        <button type="submit" className="button is-link px-4" disabled={isSending}>
          {isSending ? 'Gönderiliyor...' : 'Gönder'}
        </button>
      </div>
      {status && <div className="notification is-info">{status}</div>}
    </form>
  );
};

export default ContactForm;