import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Auth from './components/Auth.jsx';
import Pizza from './components/Pizza.jsx';
import Home from './pages/Home';
import Cart from './components/Cart';
import axios from 'axios';

const url = 'https://savorsphere.onrender.com';
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [customerName, setCustomerName] = useState('')


  useEffect(() => {
    if (isAuthenticated) {
      fetchCart();
      const storedCustomerName = sessionStorage.getItem('name'); 
      if (storedCustomerName) {
        setCustomerName(storedCustomerName);
      }
    }
  }, [isAuthenticated]);


  const fetchCart = () => {
    const userToken = sessionStorage.getItem('userToken');
    if (userToken) {
      axios.get(`${url}/cart/fetch`)
        .then((response) => {
          const userCartItems = response.data.filter(item => item.cust_name === userToken);
          setCartItems(userCartItems);
        })
        .catch((error) => {
          console.log('Error fetching cart:', error);
        });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('userToken');
    setCartItems([]);
  };

  const addToCart = (product) => {
    const userToken = sessionStorage.getItem('userToken');
    if (!userToken) return;

    axios.get(`${url}/cart/fetch`)
      .then((response) => {
        const userCartItems = response.data.filter(item => item.cust_name === userToken);
        const existingItem = userCartItems.find(item => item.pizza_id === product.pizza_id);
        if (existingItem) {
          handleUpdateCart(product, existingItem.quantity + 1);
        } else {
          axios.post(`${url}/cart/insert`, {
            pizza_id: product.pizza_id,
            pizza_name: product.pizza_name,
            pizza_image: product.pizza_image,
            pizza_cost: product.pizza_cost,
            cust_name: userToken,
            quantity: 1
          }).then(() => {
            fetchCart();
          }).catch((error) => {
            console.log('Error adding to cart:', error);
          });
        }
      })
      .catch((error) => {
        console.log('Error fetching cart:', error);
      });
  };

  const handleUpdateCart = (product, quantity) => {
    const userToken = sessionStorage.getItem('userToken');
    if (!userToken) return;

    axios.get(`${url}/cart/fetch`)
      .then((response) => {
        const userCartItems = response.data.filter(item => item.cust_name === userToken);
        const existingItem = userCartItems.find(item => item.pizza_id === product.pizza_id);
        if (existingItem) {
          if (quantity <= 0) {
            handleRemoveFromCart(product);
          } else {
            axios.put(`${url}/cart/update`, {
              pizza_id: product.pizza_id,
              cust_name: userToken,
              quantity
            }).then(() => {
              fetchCart();
            }).catch((error) => {
              console.log('Error updating cart:', error);
            });
          }
        }
      })
      .catch((error) => {
        console.log('Error fetching cart:', error);
      });
  };

  const handleRemoveFromCart = (product) => {
    const userToken = sessionStorage.getItem('userToken');
    if (!userToken) return;

    axios.get(`${url}/cart/fetch`)
      .then((response) => {
        const userCartItems = response.data.filter(item => item.cust_name === userToken);
        const existingItem = userCartItems.find(item => item.pizza_id === product.pizza_id);
        if (existingItem) {
          axios.delete(`${url}/cart/delete`, {
            data: {
              pizza_id: product.pizza_id,
              cust_name: userToken
            }
          }).then(() => {
            fetchCart();
          }).catch((error) => {
            console.log('Error removing from cart:', error);
          });
        }
      })
      .catch((error) => {
        console.log('Error fetching cart:', error);
      });
  };

  const getCartQuantity = (product) => {
    const userToken = sessionStorage.getItem('userToken');
    const item = cartItems.find(item => item.pizza_id === product.pizza_id && item.cust_name === userToken);
    return item ? item.quantity : 0;
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div>
        <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} cartItemCount={cartItemCount} customerName={customerName}/>
        <main>
          <Routes>
            <Route path="/" element={<Home isAuthenticated={isAuthenticated} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} fetchCart={fetchCart} handleUpdateCart={handleUpdateCart} handleRemoveFromCart={handleRemoveFromCart} />} />
            <Route path="/login" element={<Auth setIsAuthenticated={(auth) => { setIsAuthenticated(auth); setCartItems([]); }} />} />
            <Route path="/pizza" element={isAuthenticated ? <Pizza addToCart={addToCart} getCartQuantity={getCartQuantity} handleUpdateCart={handleUpdateCart} /> : <Home isAuthenticated={isAuthenticated} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
