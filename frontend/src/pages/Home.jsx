import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/home.css';
import p1 from '../images/Designer (2).png'
import p2 from '../images/Designer (1).png'
import p3 from '../images/Designer.png' 

const Home = ({ isAuthenticated }) => {
    const [wish, setWish] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const date = new Date().getHours();
        if (date < 12) {
            setWish('Good Morning');
        } else if (date < 16) {
            setWish('Good Afternoon');
        } else if (date < 20) {
            setWish('Good Evening');
        } else {
            setWish('Good Night');
        }
    }, []);

    const handleBuyNowClick = () => {
        if (isAuthenticated) {
            navigate('/pizza');
        } else {
            navigate('/login');
        }
    };

    return (
        <div className="container mt-5">
            <div className="jumbotron text-center">
                <h1 className="display-4">
                    {isAuthenticated
                        ? `${wish}, ${sessionStorage.getItem('name')}!`
                        : 'Welcome to SavorSphere!'}
                </h1>
                <p className="lead">Your ultimate destination for the most delicious pizzas.</p>
                <hr className="my-4" />
            </div>

            <section className="mt-5">
                <h2 className="text-center mb-4">Featured Pizzas</h2>
                <div className="row">

                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm h-100">
                            <img src={p1} className="card-img-top" alt="Margherita Pizza" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Margherita Pizza</h5>
                                <p className="card-text">Classic delight with 100% real mozzarella cheese, topped with tangy tomato sauce and fresh basil.</p>
                                <button className="btn btn-primary mt-auto" onClick={handleBuyNowClick}>Order Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm h-100">
                            <img src={p2} className="card-img-top" alt="Pepperoni Pizza" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Pepperoni Pizza</h5>
                                <p className="card-text">Loaded with delicious pepperoni and topped with extra mozzarella cheese for a perfect bite.</p>
                                <button className="btn btn-primary mt-auto" onClick={handleBuyNowClick}>Order Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card mb-4 shadow-sm h-100">
                            <img src={p3} className="card-img-top" alt="Veggie Pizza" />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">Veggie Pizza</h5>
                                <p className="card-text">A vibrant mix of fresh veggies, with a hint of garlic and a drizzle of olive oil.</p>
                                <button className="btn btn-primary mt-auto" onClick={handleBuyNowClick}>Order Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;
