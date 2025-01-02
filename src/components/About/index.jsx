import React, { useState } from 'react';
import './about.css';  // Make sure the path to the CSS file is correct

const Index = () => {
  const [profile, setProfile] = useState(''); // State to track the selected profile

  const handleProfileSelection = (profileName) => {
    setProfile(profileName); // Update state with the selected profile
  };

  return (
    <div className="profile-container">
      <h1>Select Your Profile</h1>

      <div className="button-container">
        <button className="profile-button" onClick={() => handleProfileSelection('John')}>
          John's Profile
        </button>
        <button className="profile-button" onClick={() => handleProfileSelection('Jane')}>
          Jane's Profile
        </button>
        <button className="profile-button" onClick={() => handleProfileSelection('Kids')}>
          Kids' Profile
        </button>
      </div>

      <div id="profileGreeting" style={{ marginTop: '20px' }}>
        {profile && <p>Welcome, {profile}!</p>} {/* Display the selected profile */}
      </div>

      <div id="factors" className="container factor">
        <h2 className="text-center">
          <i>Features</i>
        </h2>
        <ul>
          <li>Unlimited access to content</li>
          <li>High-quality streaming</li>
          <li>Available on multiple devices</li>
          <li>Watch anytime, anywhere</li>
        </ul>
      </div>

      {/* Embedding YouTube Video */}
      <div className="video-container" style={{ marginTop: '40px', textAlign: 'center' }}>
        <h2>Watch Our Introduction Video</h2>
        <iframe 
          width="1000" 
          height="500" 
          src="https://www.youtube.com/embed/GV3HUDMQ-F8?si=K85c4Ug9J67zPIRj" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" 
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Index;
