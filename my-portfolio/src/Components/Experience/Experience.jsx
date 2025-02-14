import React, { useState } from "react";
import styles from "./Experience.module.css";
import skills from "../../Data/Skill.json";
import historyData from "../../Data/History.json";
import educationData from "../../Data/Education.json";
import swiftImage from "../../Assets/Skills/swift.png";
import JSImage from "../../Assets/Skills/js.png";
import reactImage from "../../Assets/Skills/react.png";
import pythonImage from "../../Assets/Skills/python_2.png";
import CImage from "../../Assets/Skills/csharp.png";
import railsImage from "../../Assets/Skills/rails.svg";
import ruby from "../../Assets/Skills/ruby.png";
import gitImage from "../../Assets/Skills/git_icon.png";
import unityImage from "../../Assets/Skills/unity_logo.png";
import trenditImage from "../../Assets/Skills/trendit_img.png";
import typescript from "../../Assets/Skills/typescript_logo.svg.png";
import openai from "../../Assets/Skills/openai.png";
import evryImage from "../../Assets/Skills/evryj.png";
import liquid from "../../Assets/Skills/liquid.png";
import pucpr from "../../Assets/Skills/Brasão_PUCPR.png";
import pucrs from "../../Assets/Skills/pucrs.png";
import lewagon from "../../Assets/Skills/le_wagon.png";


const getImage = (imageSrc) => {
  switch (imageSrc) {
    case "Skills/swift.png":
      return swiftImage;
    case "Skills/js.png":
      return JSImage;
    case "Skills/react.png":
      return reactImage;
    case "Skills/python.png":
      return pythonImage;
    case "Skills/csharp.png":
      return CImage;
    case "Skills/typescript_logo.svg.png":
      return typescript;
    case "Skills/rails.svg":
      return railsImage;
    case "Skills/ruby.png":
      return ruby;
    case "Skills/git_icon.png":
      return gitImage;
    case "Skills/unity.svg":
      return unityImage;
    case "Skills/trendit_img.png":
      return trenditImage;
    case "Skills/openai.png":
      return openai;
    case "Skills/evryj.png":
      return evryImage;
    case "Skills/liquid.png":
      return liquid;
    case "Skills/Brasão_PUCPR.png":
      return pucpr;
    case "Skills/pucrs.png":
     return pucrs;
     case "Skills/le_wagon.png":
        return lewagon;      
    default:
      return null;
  }
};

const Experience = () => {
  const [isWorkExperience, setIsWorkExperience] = useState(true);

  const handleWorkExperienceClick = () => setIsWorkExperience(true);
  const handleEducationClick = () => setIsWorkExperience(false);

  const dataToDisplay = isWorkExperience ? historyData : educationData;

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>My Experience</h2>

      <div className={styles.contentContainer}>
        {/* Skills Section (sempre visível) */}
        <div className={styles.skills}>
          {skills.map((skill, skillId) => (
            <div key={skillId} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={getImage(skill.imageSrc)} alt={skill.title} />
              </div>
              <p className={styles.cardTitle}>{skill.title}</p>
            </div>
          ))}
        </div>

        {/* History ou Education Section */}
        <div
        className={`${styles.history} ${
            isWorkExperience ? styles.workExperience : styles.education
        }`}
        >
        <div className={styles.buttonContainer}>
            <button
            className={`${styles.toggleButton} ${
                isWorkExperience ? styles.activeButton : ""
            }`}
            onClick={handleWorkExperienceClick}
            >
            Work Experience
            </button>
            <button
            className={`${styles.toggleButton} ${
                !isWorkExperience ? styles.activeButton : ""
            }`}
            onClick={handleEducationClick}
            >
            Education
            </button>
        </div>

        {dataToDisplay.map((item, id) => (
          <div
            key={id}
            className={`${styles.historyCard} ${
              isWorkExperience ? styles.workCard : styles.educationCard
            }`}
          >
            <div className={styles.historyCardHeader}>
              <img src={getImage(item.imageSrc)} alt={`${item.organisation} Logo`} />
              <div>
                <h3>{item.role}</h3>
                <p>{item.organisation}</p>
                {/* <p>{item.location}</p> */}
                <span>
                  {item.startDate} - {item.endDate}
                <p>{item.location}</p>
                </span>
              </div>
            </div>
            <ul>
              {item.experiences.map((experience, experienceId) => (
                <li key={experienceId}>{experience}</li>
              ))}
            </ul>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
