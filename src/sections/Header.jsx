
import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import './Header.css';

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Active link state
  const [activeLink, setActiveLink] = useState('home');
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current = Array.from(document.querySelectorAll('section[id]'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -70% 0px',
      }
    );

    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
            observer.unobserve(section);
        }
      });
    };
  }, []);


  const navLinks = [
    { id: 'about-section', title: 'About' },
    { id: 'skills-tech-section', title: 'Skills' },
    { id: 'projects-section', title: 'Projects' },
    { id: 'freelancing-section', title: 'Services' },
    { id: 'contact-section', title: 'Contact' },
  ];

  return (
    <div className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <a href="/" className="logo-anchor">
            <span className="logo-gradient-text">Yash </span>
            <span className="logo-white-text">Desai</span>
        </a>
        <span className="logo-subtitle">Generative AI & Cloud Engineer</span>
      </div>

      {/* menu */}
      <ul className="nav-menu">
        {navLinks.map(link => (
          <li key={link.id}>
            <a href={`#${link.id}`} className={activeLink === link.id ? 'active' : ''}>{link.title}</a>
          </li>
        ))}
      </ul>
      
      <a href="#contact-section" className="cta-button">Hire Me</a>

      {/* Hamburger */}
      <div onClick={handleClick} className="hamburger">
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile menu */}
      <ul className={nav ? 'nav-mobile active' : 'nav-mobile'}>
        {navLinks.map(link => (
            <li key={link.id} className='py-6 text-4xl'>
                <a onClick={handleClick} href={`#${link.id}`}>{link.title}</a>
            </li>
        ))}
        <li>
            <a href="#contact-section" className="cta-button-mobile">Hire Me</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
