import React from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">
          Let’s connect! I'm open to opportunities and collaborations.
        </p>

        <div className="contact-details">
          {/* Location */}
          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <a
              href="https://www.google.com/maps?q=Vadodara,+Gujarat,+India"
              target="_blank"
              rel="noreferrer"
            >
              Vadodara, Gujarat, India
            </a>
          </div>

          {/* Phone */}
          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <a href="tel:+916304647328">+91 63046 47328</a>
          </div>

          {/* Email */}
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <a href="mailto:sprapul12@gmail.com">sprapul12@gmail.com</a>
          </div>

          {/* GitHub */}
          <div className="contact-item">
            <FaGithub className="icon" />
            <a
              href="https://github.com/Prapul-66"
              target="_blank"
              rel="noreferrer"
            >
              Prapul-66
            </a>
          </div>

          {/* LinkedIn */}
          <div className="contact-item">
            <FaLinkedin className="icon" />
            <a
              href="https://linkedin.com/in/sai-prapul"
              target="_blank"
              rel="noreferrer"
            >
              Sai Prapul
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
