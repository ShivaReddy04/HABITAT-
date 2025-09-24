import React from 'react';

const Contact = () => {
  return (
    <section className="section bg-light">
      <div className="container">
        <img src="https://images.unsplash.com/photo-1470114755716-3e1124c6c46a" alt="Community and environment" style={{width:'100%', borderRadius:'12px', marginBottom:'1.5rem'}} />
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};
export default Contact;