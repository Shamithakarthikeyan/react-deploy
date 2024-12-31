import React from 'react';
import './about.css';
import Footer from '../Footer';

const About = () => {
  return (
    <div className="home-container">
      <div className="welcome-text">
        <h1>About edited</h1>
        <p>Your one-stop solution for everything you need.</p>
        <iframe width="1000" height="500" src="https://www.youtube.com/embed/GV3HUDMQ-F8?si=K85c4Ug9J67zPIRj" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <Footer />

    </div>
  );
};

export default About;
