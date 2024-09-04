# 🍕 SavorSphere 🍕  
**SavorSphere** is a luxurious and user-friendly pizza ordering web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). It provides customers with a seamless experience to browse, order, and manage their favorite pizzas.

## 🖼 Sample Images
**🏠 Home Page**

![image](https://github.com/user-attachments/assets/6f68f8bf-1755-4f6f-ba20-69526b98fbf5)

**🍕 Pizza Page**

![image](https://github.com/user-attachments/assets/5e2849f4-a308-4db3-8d09-3ef7e0ecfbd2)

**🛒 Cart Page**

![image](https://github.com/user-attachments/assets/17a6389c-ecec-46ae-aa58-e89ead104d07)


## 📑 Table of Contents
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Setup and Installation](#️-setup-and-installation)
- [Usage](#-usage)
- [API Endpoints](#-api-endpoints)
- [Sample Images](#-sample-images)
- [Contribution](#-contribution)
- [License](#-license)

## 🎯 Features
### 1. **🔐 User Authentication & Session Management**
- **Login & Registration**: Users can securely sign up and log in using their email, password, and other credentials. Session management is handled using **session storage**, ensuring user state persistence across the app.
- **Password Security**: Passwords are encrypted using **bcrypt** for secure storage.
- **Session-Based Authentication**: The app uses session storage for managing user authentication and authorization, ensuring user-specific actions like cart management.

### 2. **🍕 Pizza Catalog**
- **Dynamic Pizza Listing**: Displays categorized pizzas (e.g., Vegetarian, Non-Vegetarian, Vegan) using a responsive carousel.
- **Real-time Data Fetching**: Pizzas are fetched from the backend and displayed in the UI with descriptions, images, and prices.

### 3. **🛒 Shopping Cart**
- **Add/Update/Remove Pizzas**: Users can add pizzas to their cart, adjust quantities, or remove items. Cart updates are instantly reflected in the frontend and backend.
- **Cart Persistence**: The cart is user-specific, and the state is maintained using session tokens.

### 4. **📦 Order Management**
- **CRUD Operations**: Users can perform Create, Read, Update, and Delete operations on cart items and pizzas.
- **Cart Total Calculation**: The total price is dynamically calculated based on the number of items in the cart.

### 5. **🖥 Backend API**
- **RESTful API**: The backend provides various endpoints to interact with pizzas, cart, and customers.

### 6. **📂 Database & Models**
- **MongoDB with Mongoose**: All pizza, cart, and customer data is stored in **MongoDB**, with **Mongoose** used for schema definition and interaction.

## 🛠 Tech Stack
### 1. **Frontend**
- **React.js**: Used for creating dynamic UI components and managing state with hooks.
- **Axios**: For making HTTP requests to the backend.
- **Bootstrap**: Provides styling and responsive design for a polished UI.

### 2. **Backend**
- **Node.js & Express.js**: Handles routing, middleware, and API endpoint creation.
- **Mongoose**: ORM for MongoDB, defining schemas for Pizza, Cart, and Customer models.

### 3. **Security**
- **Helmet.js**: Ensures the app is secured with HTTP headers.
- **CORS**: Configured to allow secure cross-origin resource sharing.

### 4. **APIs**
- **Cart API**: Manages adding, updating, and deleting items in the user’s cart.
- **Pizza API**: Handles pizza CRUD operations.
- **Customer API**: Manages customer-related operations such as login, registration, and updating customer details.

### 5. **Database**
- **MongoDB Atlas**: Remote database for storing customer, pizza, and cart data.

## ⚙️ Setup and Installation
### Prerequisites
- **Node.js** (v12 or higher)
- **MongoDB** (local or Atlas)

### Installation Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/sabariraj01/SavorSphere.git
    cd SavorSphere
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up MongoDB:
   - Use a local MongoDB instance or connect to MongoDB Atlas.
   - Update the `.env` file with the MongoDB URI and desired port:
     ```bash
     MONGO_URL=your_mongodb_uri
     PORT=3000
     ```

4. Run the server:
    ```bash
    npm start
    ```

5. Run the frontend:
    Navigate to the frontend folder and start the React app:
    ```bash
    cd frontend
    npm start
    ```

6. Open your browser at `http://localhost:3000` to view the app.

## 🚀 Usage
1. **Login or Register**: Users can log in or create an account to start ordering pizzas.
2. **Browse Pizzas**: Explore a dynamic, categorized list of pizzas. Add them to your cart based on preferences.
3. **Manage Cart**: Increase or decrease the quantity of items, or remove them from the cart.
4. **Place an Order**: After finalizing the cart, users can proceed with placing an order (future enhancement).

## 📡 API Endpoints

### Cart Endpoints
- **GET** `/cart/fetch`: Fetch all items in the cart.
- **POST** `/cart/insert`: Add a new item to the cart.
- **PUT** `/cart/update`: Update an item in the cart.
- **DELETE** `/cart/delete`: Remove an item from the cart.

### Pizza Endpoints
- **GET** `/pizza/fetch`: Fetch all available pizzas.
- **POST** `/pizza/insert`: Add a new pizza.
- **PUT** `/pizza/update`: Update pizza details.
- **DELETE** `/pizza/delete`: Delete a pizza.

### Customer Endpoints
- **GET** `/custs/fetch`: Fetch customer data.
- **POST** `/custs/insert`: Register a new customer.
- **PUT** `/custs/update`: Update customer details.
- **DELETE** `/custs/delete`: Delete a customer.



## 🤝 Contribution
Contributions are welcome! Please follow these steps:
1. Fork the project.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## 📄 License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
