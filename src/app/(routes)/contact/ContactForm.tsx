"use client"
import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus('Gönderiliyor...');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'iletisim@kadirlidilkursu.com',
          subject: `İletişim Formu: ${form.name}`,
          text: `İsim: ${form.name}\nEposta: ${form.email}\nMesaj: ${form.message}`,
          html: `<b>İsim:</b> ${form.name}<br/><b>Eposta:</b> ${form.email}<br/><b>Mesaj:</b> ${form.message}`,
        }),
      });
      if (res.ok) {
        setStatus('Mesajınız başarıyla gönderildi!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('Gönderirken bir hata oluştu.');
      }
    } catch {
      setStatus('Gönderirken bir hata oluştu.');
    }
    setIsSending(false);
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