import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/about.css';

const About = () => {
    return (
        <div className="container mt-5">
            <div className="jumbotron bg-dark text-center">
                <h1 className="display-4">Welcome to SavorSphere</h1>
                <p className="lead text-light">We provide the most delicious pizzas with the best ingredients.</p>
            </div>

            <br></br>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <section className="mb-4">
                        <h2>About Us</h2>
                        <p>Founded in 2024, SavorSphere is committed to delivering the best pizza experience with high-quality ingredients and exceptional service.</p>
                    </section>

                    <section className="mb-4">
                        <h2>Our Values</h2>
                        <ul>
                            <li>Fresh Ingredients</li>
                            <li>Customer Satisfaction</li>
                            <li>Innovation in Flavors</li>
                            <li>Community Engagement</li>
                        </ul>
                    </section>

                    <section className="mb-4">
                        <h2>Contact Us</h2>
                        <p>Email: contact@savorsphere.com</p>
                        <p>Phone: +91 9876543210</p>
                        <p>Address: Chittoor, AP, India</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default About;
