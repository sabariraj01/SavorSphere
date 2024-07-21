import React, { useState } from 'react';
import '../styles/contact.css'
import '../styles/style.css'

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Message sent successfully!');
    }

    const { name, email, message } = formState;

    return (
        <div className="container mt-5">
            <div className="jumbotron bg-dark text-center">
                <h1 className="display-4">Contact SavorSphere</h1>
                <p className="lead text-light">We'd love to hear from you. Please fill out the form below to get in touch.</p>
            </div>

            <br />

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form onSubmit={handleSubmit}>
                        <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                id="floatingName"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                placeholder="Name"
                                required
                            />
                            <label htmlFor="floatingName">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input
                                type="email"
                                className="form-control"
                                id="floatingEmail"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Email"
                                required
                            />
                            <label htmlFor="floatingEmail">Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea
                                className="form-control"
                                id="floatingMessage"
                                name="message"
                                rows="5"
                                value={message}
                                onChange={handleChange}
                                placeholder="Message"
                                required
                            ></textarea>
                            <label htmlFor="floatingMessage">Message</label>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
