import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';

const BASE_URL = 'https://savorsphere.onrender.com';

const Auth = ({ setIsAuthenticated }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        const errors = {};
        if (!email || !validateEmail(email)) {
            errors.email = 'Please enter a valid email address.';
        }
        if (!password) {
            errors.password = 'Please enter your password.';
        }
        if (!isLogin) {
            if (!name) {
                errors.name = 'Please enter your name.';
            }
            if (!address) {
                errors.address = 'Please enter your address.';
            }
            if (!contact) {
                errors.contact = 'Please enter your contact number.';
            }
            if (password !== confirmPassword) {
                errors.confirmPassword = 'Passwords do not match.';
            }
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleLogin = async () => {
        if (!validateForm()) return;
        try {
            const response = await axios.get(`${BASE_URL}/custs/fetch`, {
                params: { email }
            });

            const user = response.data.find(user => user.cust_email === email && user.cust_password === password);

            if (user) {
                setIsAuthenticated(true);
                sessionStorage.setItem('userToken', email);
                sessionStorage.setItem('name', user.cust_name);
                navigate('/'); 
            } else {
                alert('Invalid email or password. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login.');
        }
    };

    const handleRegister = async () => {
        if (!validateForm()) return;
        try {
            const checkResponse = await axios.get(`${BASE_URL}/custs/fetch`, {
                params: { email }
            });

            const userExists = checkResponse.data.some(user => user.cust_email === email);

            if (userExists) {
                alert('User already exists. Please login.');
                setIsLogin(true);
            } else {
                const response = await axios.post(`${BASE_URL}/custs/insert`, {
                    cust_name: name,
                    cust_password: password,
                    cust_email: email,
                    cust_address: address,
                    cust_contact: contact
                });

                if (response.status === 200) {
                    alert('Registration successful! Please login.');
                    setIsLogin(true);
                } else {
                    alert('Registration failed. Please try again.');
                }
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('An error occurred during registration.');
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                    {isLogin ? (
                        <div className="card p-4 bg-dark text-light">
                            <h2 className="mb-4 text-center text-gold">Login</h2>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <small className="text-danger">{errors.email}</small>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <small className="text-danger">{errors.password}</small>}
                            </div>
                            <button className="btn btn-gold" onClick={handleLogin}>Login</button>
                            <button className="btn btn-link text-gold" onClick={() => setIsLogin(false)}>Go to Register</button>
                        </div>
                    ) : (
                        <div className="card p-4 bg-dark text-light">
                            <h2 className="mb-4 text-center text-gold">Register</h2>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                {errors.name && <small className="text-danger">{errors.name}</small>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    className="form-control mb-3"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <small className="text-danger">{errors.email}</small>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {errors.password && <small className="text-danger">{errors.password}</small>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control mb-3"
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                {errors.confirmPassword && <small className="text-danger">{errors.confirmPassword}</small>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                                {errors.address && <small className="text-danger">{errors.address}</small>}
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control mb-3"
                                    placeholder="Contact"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                />
                                {errors.contact && <small className="text-danger">{errors.contact}</small>}
                            </div>
                            <button className="btn btn-gold" onClick={handleRegister}>Register</button>
                            <button className="btn btn-link text-gold" onClick={() => setIsLogin(true)}>Go to Login</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Auth;
