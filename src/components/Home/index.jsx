import React from 'react';
import './home.css';
import Footer from '../Footer';
const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-text">
        <h1>Welcome to Our Website!</h1>
        <p>NETFLIX WELCOMES YOU.</p>
      </div>
      <section id="features" class="py-5" style="background-color: black; overflow: hidden;">
        <div class="container text-center">
            <h1 class="mb-4" style="color: white;">NETFLIX</h1>
            <div class="image-scroll-container">
                <div class="image-scroll">
                    <img src="https://estaticos-cdn.prensaiberica.es/clip/a77fa3b2-c422-43ad-9fcb-b4c32f1ef20f_16-9-discover-aspect-ratio_default_0.jpg" class="d-block w-100 img-fluid" alt="Feature 1">
                    <img src="https://static.zoomnews.com/thumb/msid-94847568,width-1280,height-720,resizemode-75/94847568.jpg" class="d-block w-100 img-fluid" alt="Feature 2">
                    <img src="https://th.bing.com/th/id/OIP.jIACs80gesmpgnYyH4Na5wAAAA?rs=1&pid=ImgDetMain" class="d-block w-100 img-fluid" alt="Feature 3">
                    <img src="https://estaticos-cdn.prensaiberica.es/clip/a77fa3b2-c422-43ad-9fcb-b4c32f1ef20f_16-9-discover-aspect-ratio_default_0.jpg" class="d-block w-100 img-fluid" alt="Feature 1"> <!-- Duplicate for infinite effect -->
                    <img src="https://static.zoomnews.com/thumb/msid-94847568,width-1280,height-720,resizemode-75/94847568.jpg" class="d-block w-100 img-fluid" alt="Feature 2">
                    <img src="https://th.bing.com/th/id/OIP.jIACs80gesmpgnYyH4Na5wAAAA?rs=1&pid=ImgDetMain" class="d-block w-100 img-fluid" alt="Feature 3">
                </div>
            </div>
        </div>
    </section>
      <Footer />

    </div>
  );
};

export default Home;
