import React from 'react';

function ContactForm() {
  return (
    <form>
      <label>
        Name *
        <input type="text" name="name" required />
      </label>
      <label>
        Email address *
        <input type="email" name="email" required />
      </label>
      <label>
        Phone number
        <input type="tel" name="phone" />
      </label>
      <label>
        Message *
        <textarea name="message" required />
      </label>
      <label>
        <input type="checkbox" name="consent" required /> I allow this website to store my submission so they can respond to my inquiry.
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;