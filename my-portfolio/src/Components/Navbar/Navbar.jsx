import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      setIsVisible(window.scrollY < lastScrollY || window.scrollY < 50);
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isVisible ? "visible" : "hidden"}`}>
      <div className="nav-left">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Experience</a></li>
          <li><a href="#playground">Playground</a></li>
        </ul>
      </div>
  
      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="https://github.com/marcelovsk1">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/marceloamaralalves/">LinkedIn</a></li>
          {/* <li><a href="#cv">CV</a></li> */}
        </ul>
      </div>
    </nav>
  );
};  

export default Navbar;
