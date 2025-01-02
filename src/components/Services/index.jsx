import React from 'react';
import './service.css';  // Import the CSS file for styling

const Index = () => {
  return (
    <div>
      {/* Contact Form Section */}
      <section 
        id="contact-form" 
        className="py-5" 
        style={{
          backgroundColor: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >
        <div className="container">
          <h2 className="text-center text-white mb-4">We'd Love to Hear From You!</h2>
          <div className="d-flex justify-content-center">
            <div 
              className="contact-form-box p-4" 
              style={{
                backgroundColor: '#333', 
                borderRadius: '10px', 
                width: '80%', 
                maxWidth: '600px'
              }}
            >
              <form>
                <div className="row">
                  {/* Name Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="name" className="text-white">Your Name</label>
                      <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Enter your name" 
                        required 
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label htmlFor="email" className="text-white">Your Email</label>
                      <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter your email" 
                        required 
                      />
                    </div>
                  </div>
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <label htmlFor="message" className="text-white">Your Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    rows="4" 
                    placeholder="Enter your message" 
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-danger">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <h2 className="testimonial-title text-white">What Our Users Say</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="testimonial-card">
                <img 
                  src="https://tse3.mm.bing.net/th?id=OIP.kuex0sfHPXQKO9gxMfhWMQHaEK&pid=Api&P=0&h=180" 
                  alt="Sarah W." 
                  className="testimonial-photo" 
                />
                <p>"Netflix has completely changed the way I watch movies. The variety of content is unbeatable!"</p>
                <h4 className="testimonial-author">Sarah W.</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <img 
                  src="https://tse1.mm.bing.net/th?id=OIP.hIuJO0PIE2kRkLgyTLis5AHaFj&pid=Api&P=0&h=180" 
                  alt="Michael T." 
                  className="testimonial-photo" 
                />
                <p>"I love the convenience of being able to watch on any device, anytime I want!"</p>
                <h4 className="testimonial-author">Michael T.</h4>
              </div>
            </div>
            <div className="col-md-4">
              <div className="testimonial-card">
                <img 
                  src="https://tse4.mm.bing.net/th?id=OIP.Xg9CJuBMwWrIESq4aG2BoQHaLI&pid=Api&P=0&h=180" 
                  alt="Jessica R." 
                  className="testimonial-photo" 
                />
                <p>"The quality is exceptional! It's like having a cinema in my living room!"</p>
                <h4 className="testimonial-author">Jessica R.</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
