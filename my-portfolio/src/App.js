import React, { useEffect, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import About from "./Components/About/About";
import Experience from "./Components/Experience/Experience";
import Projects from "./Components/Projects/Projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./App.css";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 1, y: 100 },
        {
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 30%",
            scrub: 1, 
          },
        }
      );
    });

    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        { y: 0 },
        {
          y: -50, 
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 1, 
          },
        }
      );
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div ref={(el) => (sectionsRef.current[0] = el)}>
          <Intro />
        </div>
        <div ref={(el) => (sectionsRef.current[1] = el)}>
          <About />
        </div>
        <div ref={(el) => (sectionsRef.current[2] = el)}>
          <Experience />
        </div>
        <div ref={(el) => (sectionsRef.current[3] = el)}>
          <Projects />
        </div>
      </header>
    </div>
  );
}

export default App;
