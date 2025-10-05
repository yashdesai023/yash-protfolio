import React from 'react';
import './ContactSection.css';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id='contact-section' className="contact-section">
      <div className="section-header">
        <h2>Let’s Build Something Amazing Together</h2>
        <p className="tagline">Interested in working together or just want to say hi? I’d love to hear from you.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <ul>
            <li><FaEnvelope /> desaisyash1000@gmail.com</li>
            <li><FaLinkedin /> <a href="https://linkedin.com/in/yash-s-desai-" target="_blank" rel="noopener noreferrer">linkedin.com/in/yash-s-desai-</a></li>
            <li><FaGithub /> <a href="https://github.com/yashdesai023" target="_blank" rel="noopener noreferrer">github.com/yashdesai023</a></li>
            <li><FaMapMarkerAlt /> Maharashtra, India (Remote)</li>
          </ul>
          <div className="social-icons">
             <a href="https://linkedin.com/in/yash-s-desai-" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
             <a href="https://github.com/yashdesai023" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
             <a href="mailto:desaisyash1000@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        <div className="contact-form-wrapper">
            <form action="https://formspree.io/f/xrbylbkd" method="POST">
                <div className="form-group">
                    <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
        </div>
      </div>
      
      <footer className="contact-footer">
        <p>© 2025 Yash Desai. All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default ContactSection;
