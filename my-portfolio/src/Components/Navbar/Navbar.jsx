import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null); // Referência para capturar cliques fora do menu

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Função para fechar o menu ao clicar em um item
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"} ${isMenuOpen ? "menu-open" : ""}`} ref={menuRef}>
      <div className="nav-container">
        {/* Botão Mobile para abrir/fechar */}
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
        <li><a href="#intro" className="intro-mobile" style={{ color: "#5500ff" }}>{"</>"}</a></li>

        {/* Links */}
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <li><a href="#intro" className="intro-desk" style={{ color: "#5500ff" }} onClick={handleMenuItemClick}>{"</>"}</a></li>
          <li><a href="#about" onClick={handleMenuItemClick}>About</a></li>
          <li><a href="#experience" onClick={handleMenuItemClick}>Knowledge</a></li>
          <li><a href="#playground" onClick={handleMenuItemClick}>Playground</a></li>
          <li><a href="https://github.com/marcelovsk1" onClick={handleMenuItemClick}>GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/marceloamaralalves/" onClick={handleMenuItemClick}>LinkedIn</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
