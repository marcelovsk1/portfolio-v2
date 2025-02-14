import React, { useState } from "react";
import "./Projects.css";

// Importe as imagens
import drakenike from "../../img/shoesapp.png";
import netflixapp from "../../img/netflixapp.png";
import weatherApp from "../../img/weatherapp.png";
import newsapp from "../../img/newsapp.png";
import guessgame from "../../img/guessgame.png";
import mensagerapp from "../../img/mensagerapp.png";
import socialmedia from "../../img/socialmedia.png";
import interfaceImg from "../../img/ios3d.png";
import gameofcodesImg from "../../img/game_of_codes.png";
import adidasoriginals from "../../img/adidas.png";
import scraper from "../../img/scraper.png";
import portfolio from "../../img/myportfolio.png";
import game_portfolio from "../../img/game_dev.png";
import boxrumble from "../../img/box.png";
import world from "../../img/BEAUTIFUL_3D_WORLD1.png";

const Projects = () => {
  // Todos os projetos
  const allProjects = [
    {
      title: "Shoes App",
      description: "3D CGI applied to Swift iOS",
      imgUrl: drakenike,
      link: "https://github.com/marcelovsk1/Shoes-App",
      liveDemo:
        "https://www.linkedin.com/feed/update/urn:li:activity:7191889677941948416/",
      language: "Swift",
      year: "2024",
    },
    {
      title: "3D Content in iOS",
      description: "Integrate stunning 3D content into iOS effortlessly with Spline.",
      imgUrl: interfaceImg,
      link: "https://github.com/marcelovsk1/3d_graphics/blob/master/3d_content/ContentView.swift",
      liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7188979149032570880/",
      language: "Swift",
      year: "2024",
    },
    {
      title: "Cube Rumble",
      description: "My first game project in Unity, just for fun",
      imgUrl: boxrumble,
      link: "https://github.com/marcelovsk1/BoxRumble",
      liveDemo: null,
      language: "Unity/C#",
      year: "2024",
    },
    {
      title: "3D Open World",
      description: "A beautiful 3D open world, made using Unity Engine",
      imgUrl: world,
      link: "https://github.com/marcelovsk1/BoxRumble",
      liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7183925251368468481/",
      language: "Unity/C#",
      year: "2024",
    },
    {
      title: "News App",
      description: "Firebase + an API for a news application in Swift.",
      imgUrl: newsapp,
      link: "https://github.com/marcelovsk1/NewsApp",
      liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7188638289367621632/",
      language: "Swift",
      year: "2023",
    },
    {
      title: "Netflix Clone",
      description: "A clone of Netflix in Objective-C with movie and TV shows",
      imgUrl: netflixapp,
      link: "https://github.com/marcelovsk1/netflix-app-clone",
      liveDemo: null,
      language: "Objective-C",
      year: "2024",
    },
    {
      title: "Mensager App",
      description: "A messaging platform in Swift (send/receive messages instantly)",
      imgUrl: mensagerapp,
      link: "https://github.com/marcelovsk1/message-app1/tree/master",
      liveDemo: null,
      language: "Swift",
      year: "2023",
    },
    {
      title: "Social Media App",
      description: "Swift app replicating core features of a photo-sharing platform",
      imgUrl: socialmedia,
      link: "https://github.com/marcelovsk1/SocialMediaClone",
      liveDemo: null,
      language: "Swift",
      year: "2023",
    },
    {
      title: "Weather App",
      description: "Displays weather data from an API in a simple Swift app",
      imgUrl: weatherApp,
      link: "https://github.com/marcelovsk1/SwiftWeatherApp",
      liveDemo: "https://www.linkedin.com/feed/update/urn:li:activity:7120763456319799296/",
      language: "Swift",
      year: "2023",
    },
    {
      title: "Guess PvP Game",
      description: "A multiplayer guessing game (identify doodles)",
      imgUrl: guessgame,
      link: "https://github.com/marcelovsk1/guess-multiplayer-game",
      liveDemo: null,
      language: "Swift",
      year: "2023",
    },
    {
      title: "Scraper Bot",
      description: "Automates web data collection through scraping techniques",
      imgUrl: scraper,
      link: "https://github.com/marcelovsk1/scraper-demo",
      liveDemo: null,
      language: "Python/JS",
      year: "2024",
    },
    {
      title: "Game of Codes",
      description: "A PvP game in Rails + JS, introducing coding to beginners",
      imgUrl: gameofcodesImg,
      link: "https://github.com/KittySou/game-of-codes",
      liveDemo: "https://www.game-of-codes.pro/",
      language: "Rails + JS",
      year: "2023",
    },
    {
      title: "Landing Page",
      description: "A concept landing page for Adidas Originals",
      imgUrl: adidasoriginals,
      link: "https://github.com/marcelovsk1/rct-4",
      liveDemo: null,
      language: "React.Js",
      year: "2024",
    },
    {
      title: "My Portfolio",
      description: "My personal portfolio, built with React.js",
      imgUrl: portfolio,
      link: "https://github.com/marcelovsk1/my-new-portfolio",
      liveDemo: null,
      language: "React.Js",
      year: "2024",
    }
    // {
    //   title: "Game Dev Portfolio",
    //   description: "My Game portfolio, built in React.js",
    //   imgUrl: game_portfolio,
    //   link: "https://github.com/marcelovsk1/portfolio-games",
    //   liveDemo: null,
    //   language: "React.Js",
    //   year: "2024",
    // },
  ];

  // Estado p/ guardar o projeto selecionado
  const [selectedProject, setSelectedProject] = useState(allProjects[0]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section className="projects-section">
      <div className="projects-container">
        
        {/* Coluna Esquerda: Detalhes do projeto selecionado */}
        <div className="project-detail">
          {selectedProject ? (
            <>
              <h2 className="project-title">{selectedProject.title}</h2>
              <div className="image-wrapper">
                <img
                  src={selectedProject.imgUrl}
                  alt={selectedProject.title}
                  className="project-image-large"
                />
              </div>
              <p className="project-description">
                {selectedProject.description}
              </p>
              <p className="project-language">
                Language: <span>{selectedProject.language}</span>
              </p>
              <p className="project-language">
                <span>{selectedProject.year}</span>
              </p>

              <div className="button-group">
                {/* Link GitHub */}
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>
                {/* Live Demo se existir */}
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="demo-button"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </>
          ) : (
            <p>Select a project on the right list.</p>
          )}
        </div>

        {/* Coluna Direita: Lista de projetos */}
        <div className="project-list">
          <h3>Projects</h3>
          <ul>
            {allProjects.map((proj, idx) => (
              <li
                key={idx}
                onClick={() => handleProjectClick(proj)}
                className={
                  proj.title === selectedProject?.title
                    ? "active-project"
                    : ""
                }
              >
                {proj.title}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Projects;