import React, { useState } from "react";
//import Resume from "../assets/JANANI.pdf";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000); // Simulating network delay
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <p>Feel free to send me a message or download my resume to know more about my work.</p>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          View My Resume
        </a>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          aria-label="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          aria-label="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          aria-label="Your Message"
          required
        />
        <button type="submit" disabled={!isFormValid || isSubmitting}>
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
};

export default Contact;
