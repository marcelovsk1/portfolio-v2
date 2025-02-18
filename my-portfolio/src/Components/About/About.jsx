import React from 'react';
import './About.css';
import About_Pic from '../../../src/img/newAbout.jpg';

const About = () => {
  return (
    <section className='aboutSection' id="about">
      <div className="about-container">
        <div className="about-left">
          <h2 className="about-title">About Me</h2>
          <p className="about-text">
            As a <span>Software Developer</span> graduated from <span>Le Wagon Montreal,</span> I bring a strong foundation in frontend technologies combined with diverse academic qualifications. <br /><br />
            My academic journey includes a Bachelor's degree in <span>Business Administration</span> from <span>PUCPR</span> and a Master's in <span>Growth and Digital Strategy</span> from <span>PUCRS.</span> <br /><br />
            <span id='span-mobile'>This unique blend of technical expertise and strategic thinking empowers me to create innovative designs that balance creativity with efficiency and precision.</span> 
          </p>

        </div>
        <div className="about-right">
          <img src={About_Pic} alt="About Me" className="about-photo" />
        </div>
      </div>
    </section>
  );
};

export default About;
