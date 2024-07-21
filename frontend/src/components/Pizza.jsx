import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const url='http://localhost:8080'

const categories = [
    "Vegetarian",
    "Non-Vegetarian",
    "Vegan",
    "Specialty",
    "Classic",
    "Gourmet"
];

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const PizzaComponent = (props) => {
    const [pizzas, setPizzas] = useState([]);
    const [status, setStatus] = useState('');
    const [expanded, setExpanded] = useState({});

    useEffect(() => {
        setStatus('Loading...');
        axios.get(url + '/pizza/fetch')
            .then((posRes) => {
                setPizzas(posRes.data);
                setStatus('');
            })
            .catch((errRes) => {
                console.log(errRes);
                setStatus('Error fetching data');
            });
    }, []);

    const toggleExpand = (index) => {
        setExpanded(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const groupPizzasByCategory = () => {
        const grouped = {};

        categories.forEach(category => {
            grouped[category] = pizzas.filter(pizza => pizza.pizza_category === category);
        });

        return grouped;
    };

    const groupedPizzas = groupPizzasByCategory();

    const containerStyle = {
        marginTop: '20px'
    };

    const cardStyle = {
        border: '1px solid #ddd',
        borderRadius: '10px',
        width: '300px',
        margin: '10px',
        padding: '20px',
        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
        textAlign: 'center',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    };

    const imageStyle = {
        width: '60%',
        height: 'auto',
        margin: '0 auto'
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '10px'
    };

    const descStyle = {
        maxHeight: '50px',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
    };

    return (
        <div className='container'>
            <div style={{ color: '#17a2b8', fontSize: '2rem', textAlign: 'center' }}>All Pizzas</div>
            {
                categories.map((category, index) => (
                    <div key={index} style={containerStyle}>
                        <h2>{category}</h2>
                        <Carousel responsive={responsive}>
                            {
                                groupedPizzas[category].map((pizza, idx) => (
                                    <div key={idx} style={{ ...cardStyle, ...responsive.cardStyle }}>
                                        <img
                                            src={pizza.pizza_image}
                                            alt={pizza.pizza_name}
                                            style={{ ...imageStyle, ...responsive.imageStyle }}
                                        />
                                        <h4>{pizza.pizza_name}</h4>
                                        <div style={expanded[idx] ? {} : descStyle}>
                                            {pizza.pizza_description}
                                        </div>
                                        {pizza.pizza_description.length > 50 && (
                                            <button
                                                className="btn btn-link"
                                                onClick={() => toggleExpand(idx)}
                                                style={{ padding: 0, marginTop: '10px' }}
                                            >
                                                {expanded[idx] ? 'Show Less' : 'Learn More'}
                                            </button>
                                        )}
                                        <p><strong>Price: </strong>₹{pizza.pizza_cost}</p>
                                        {props.getCartQuantity(pizza) > 0 ? (
                                            <div>
                                                <button style={buttonStyle} onClick={() => props.handleUpdateCart(pizza, props.getCartQuantity(pizza) - 1)}>-</button>
                                                <span style={{ margin: '0 10px' }}>{props.getCartQuantity(pizza)}</span>
                                                <button style={buttonStyle} onClick={() => props.handleUpdateCart(pizza, props.getCartQuantity(pizza) + 1)}>+</button>
                                            </div>
                                        ) : (
                                            <button style={buttonStyle} onClick={() => props.addToCart(pizza)}>Add to Cart</button>
                                        )}
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                ))
            }
            <h3 className='text-info' style={{ textAlign: 'center' }}>{status}</h3>
        </div>
    );
};

export default PizzaComponent;
