import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">Let’s connect! I'm open to opportunities and collaborations.</p>

        <div className="contact-details">
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <p>Vadodara, Gujarat, India</p>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <p>+91 63046 47328</p>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <p>sprapul12@gmail.com</p>
          </div>
          <div className="contact-item">
            <FaGithub className="icon" />
            <a href="https://github.com/Prapul-66" target="_blank" rel="noreferrer">github.com/Prapul-66</a>
          </div>
          <div className="contact-item">
            <FaLinkedin className="icon" />
            <a href="https://www.linkedin.com/in/sai-prapul-131997285" target="_blank" rel="noreferrer">linkedin.com/in/sai-prapul-131997285</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
