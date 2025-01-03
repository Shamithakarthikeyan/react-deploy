import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <>
            <div className="category-section">
                <h2 className="category-title">Trending Now</h2>
                <div className="category-container">
                    <img src="https://newsroompost.com/wp-content/uploads/2023/11/kanguva-1.jpg" alt="Trending 1" />
                    <img src="https://th.bing.com/th/id/OIP.OG-PMTYRh40z2-zm_Y3_xgHaEc?w=270&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Trending 2" />
                    <img src="https://th.bing.com/th/id/OIP.h44QgXKLoR38OFvmmJcoFAHaJ4?w=148&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Trending 3" />
                    <img src="https://www.filmibeat.com/img/2018/09/geetha2-1537437052.jpg" alt="Trending 4" />
                    <img src="https://th.bing.com/th/id/OIP.XRMg6F0uvJLiZYQ12Pea5QHaEK?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Trending 5" />
                </div>
            </div>

            {/* Contact Us Section */}
            <section id="contact-us" className="py-5 my-5">
                <div className="container text-center">
                    <h2 className="text-white mb-4">Contact Us</h2>
                    <p className="text-white mb-4">Have any questions or feedback? Get in touch with us!</p>

                    {/* Contact Info */}
                    <div className="row mt-4">
                        <div className="col-md-4 mb-4">
                            <h4 className="text-white">Email</h4>
                            <p className="text-white">support@netflix.com</p>
                        </div>

                        <div className="col-md-4 mb-4">
                            <h4 className="text-white">Phone</h4>
                            <p className="text-white">+1 (800) 123-4567</p>
                        </div>

                        <div className="col-md-4 mb-4">
                            <h4 className="text-white">Follow Us</h4>
                            <p className="text-white">Stay connected through our social media channels.</p>
                            <a href="#" className="text-white mr-3">Facebook</a>
                            <a href="#" className="text-white mr-3">Twitter</a>
                            <a href="#" className="text-white">Instagram</a>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <p>2024 Netflix Clone. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default Contact;
