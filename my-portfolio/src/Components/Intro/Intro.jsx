import React, { useState, useEffect } from "react";
import "./Intro.css";

const textArray = ["Hello World!", "console.log('Hi')", "print('Hey!')", "<h1>Welcome</h1>"];

const Intro = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; 
  const deletingSpeed = 50; 
  const delayBetweenWords = 1000;

  useEffect(() => {
    const currentText = textArray[index];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex((prev) => prev - 1), deletingSpeed);
      } else {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textArray.length); // Vai para o próximo texto
      }
    } else {
      if (charIndex < currentText.length) {
        setTimeout(() => setCharIndex((prev) => prev + 1), typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
    }

    setText(currentText.substring(0, charIndex));
  }, [charIndex, index, isDeleting]);

  return (
    <section className="intro-section">
      <h1 className="intro-title">{text}<span className="cursor">|</span></h1>

      <div className="intro-image-container">
        <img
          src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3BkbWlzYzctd2syMjYzMjMxMC1pbWFnZV8xLmpwZw.jpg"
          alt="Blurry Portrait"
          className="intro-image"
        />
      </div>
    </section>
  );
};

export default Intro;
