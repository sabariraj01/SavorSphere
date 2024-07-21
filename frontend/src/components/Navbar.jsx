import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import '../styles/style.css';

const Navbar = ({ isAuthenticated, handleLogout, cartItemCount, customerName }) => {
    const iconStyle = {
        fontSize: '24px',
        color: '#EAEAEA',
        margin: '0 10px',
        position: 'relative'
    };

    const cartCountStyle = {
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        backgroundColor: 'red',
        color: '#fff',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px'
    };

    const buttonStyle = {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0',
        margin: '0 10px'
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">SavorSphere</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                        {isAuthenticated && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/pizza">Pizzas</Link>
                            </li>
                        )}
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {isAuthenticated ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link loginName" style={{ color: '#EAEAEA', margin: '0 10px' }}>{`Hi, ${customerName}`}</span>
                                </li>
                                <li className="nav-item">
                                    <Link to="/cart" className="nav-link" style={iconStyle}>
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                        {cartItemCount > 0 && <span style={cartCountStyle}>{cartItemCount}</span>}
                                    </Link>
                                </li>
                                <li className="nav-item button-logout">
                                    <button onClick={handleLogout} className="nav-link button-logout" style={buttonStyle}>
                                        <FontAwesomeIcon icon={faSignOutAlt} style={iconStyle} />
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link to="/login" className="nav-link" style={iconStyle}>
                                    <FontAwesomeIcon icon={faSignInAlt} />
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
