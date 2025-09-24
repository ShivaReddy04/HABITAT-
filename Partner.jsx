import React, { useState } from 'react';

const Partner = () => {
  const [form, setForm] = useState({
    orgName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: 'NGO',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Demo: persist in localStorage to keep page functional without backend
    const entries = JSON.parse(localStorage.getItem('partnerSubmissions') || '[]');
    entries.push({ ...form, submittedAt: new Date().toISOString() });
    localStorage.setItem('partnerSubmissions', JSON.stringify(entries));

    // Try to send a confirmation email to the requester using EmailJS (CDN)
    try {
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      if (PUBLIC_KEY && SERVICE_ID && TEMPLATE_ID) {
        // Load EmailJS script once
        await new Promise((resolve, reject) => {
          if (window.emailjs) return resolve();
          const s = document.createElement('script');
          s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
          s.onload = resolve;
          s.onerror = reject;
          document.body.appendChild(s);
        });

        if (window.emailjs && !window._emailjs_init) {
          window.emailjs.init(PUBLIC_KEY);
          window._emailjs_init = true;
        }

        await window.emailjs.send(SERVICE_ID, TEMPLATE_ID, {
          to_email: form.email,
          to_name: form.contactName || form.orgName,
          org_name: form.orgName,
          message: form.message,
        });
      }
    } catch (err) {
      // Silently ignore email errors so UX still proceeds
      console.error('Email send failed:', err);
    } finally {
      setSubmitted(true);
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h2>Partner With Us</h2>
        <p>
          We collaborate with NGOs, public agencies, and mission‑aligned investors. Fill in the form and we’ll get back to you.
        </p>
        {!submitted ? (
          <form className="partner-form" onSubmit={onSubmit}>
            <div className="grid-2">
              <div>
                <label>Organization</label>
                <input name="orgName" value={form.orgName} onChange={onChange} required />
              </div>
              <div>
                <label>Contact person</label>
                <input name="contactName" value={form.contactName} onChange={onChange} required />
              </div>
            </div>
            <div className="grid-2">
              <div>
                <label>Email</label>
                <input type="email" name="email" value={form.email} onChange={onChange} required />
              </div>
              <div>
                <label>Phone</label>
                <input name="phone" value={form.phone} onChange={onChange} />
              </div>
            </div>
            <div className="grid-2">
              <div>
                <label>Partnership type</label>
                <select name="partnershipType" value={form.partnershipType} onChange={onChange}>
                  <option>NGO</option>
                  <option>Government</option>
                  <option>Investor</option>
                  <option>Community</option>
                </select>
              </div>
              <div>
                <label>Website (optional)</label>
                <input name="website" onChange={onChange} />
              </div>
            </div>
            <div>
              <label>Message</label>
              <textarea name="message" rows={5} value={form.message} onChange={onChange} required />
            </div>
            <button className="btn" type="submit">Submit</button>
          </form>
        ) : (
          <div className="success-box">
            <h3>Thank you!</h3>
            <p>Your partnership request has been received. We’ll contact you shortly.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Partner;
