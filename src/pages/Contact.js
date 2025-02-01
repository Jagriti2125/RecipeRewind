import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>RECIPEREWIND</h1>
      <h2>GET IN TOUCH</h2>
      <p>We’d love to hear from you!</p>
      <ContactForm />
      <div className="contact-info">
        <p>📌 22it3018@rgtpt.ac.in</p>
        <p>🖩 Delhi, DL IN</p>
        <p>Hours: Monday - Friday 9:00am – 10:00pm, Saturday 9:00am – 6:00pm, Sunday 9:00am – 12:00pm</p>
      </div>
    </div>
  );
}

export default Contact;