import React, { useEffect, useState } from 'react';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const navbar = document.querySelector("header");

    // Efek navbar muncul setelah halaman dimuat
    setTimeout(() => {
      navbar.classList.add("show");
    }, 300);

    // Efek perubahan warna navbar saat scroll
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Smooth scrolling saat klik navbar
    const anchors = document.querySelectorAll("nav ul li a");

    anchors.forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        if (targetId === "login") return; // Skip for login link
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth"
          });
          // Close mobile menu after clicking a link
          setMobileMenuOpen(false);
        }
      });
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header>
      <div className="logo">
        <img src="/assets/rog-republic-of-gamers-seeklogo 2.png" alt="ROG Logo" />
      </div>
      
      <div className="mobile-menu-button" onClick={toggleMobileMenu}>
        <div className={`menu-icon ${mobileMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <nav className={mobileMenuOpen ? 'mobile-menu-open' : ''}>
        <ul>
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>PRODUCTS</a></li>
          <li><a href="#build" onClick={() => setMobileMenuOpen(false)}>BUILD</a></li>
          <li><a href="#performance" onClick={() => setMobileMenuOpen(false)}>PERFORMANCE</a></li>
          <li><a href="#support" onClick={() => setMobileMenuOpen(false)}>SUPPORT</a></li>
          <li className="mobile-only"><a href="/login.html" onClick={() => setMobileMenuOpen(false)}>LOGIN</a></li>
        </ul>
      </nav>
      
      {/* Desktop login button remains outside navbar */}
      <a href="login.html" className="login desktop-only">LOGIN</a>
    </header>
  );
};

export default Header;