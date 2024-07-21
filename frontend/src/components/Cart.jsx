import React from 'react';
import '../styles/cart.css';

const Cart = ({ cartItems = [], fetchCart, handleUpdateCart, handleRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.pizza_cost * item.quantity), 0);

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Your Cart</h2>
      <div className="card mb-4">
        <div className="card-body bg-gold text-center">
          <h4 className="card-title">Total: ₹{total.toFixed(2)}</h4>
        </div>
      </div>
      {cartItems.length > 0 ? (
        <div className="row">
          {cartItems.map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 bg-dark text-light">
                <div className="card-body text-center">
                  <img
                    src={item.pizza_image}
                    className="card-img-top mx-auto"
                    alt={item.pizza_name}
                    style={{ height: '100px', width: '100px', objectFit: 'cover' }}
                  />
                  <h5 className="card-title mt-2">{item.pizza_name}</h5>
                  <p className="card-text">Price: ₹{item.pizza_cost}</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-outline-primary btn-sm" onClick={() => handleUpdateCart(item, item.quantity - 1)}>-</button>
                    <span className="mx-2">{item.quantity}</span>
                    <button className="btn btn-outline-primary btn-sm" onClick={() => handleUpdateCart(item, item.quantity + 1)}>+</button>
                  </div>
                  <button className="btn btn-danger btn-sm mt-3" onClick={() => handleRemoveFromCart(item)}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
