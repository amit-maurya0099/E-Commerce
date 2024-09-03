# E-Commerce 
## Overview
This project is a full-fledged E-commerce platform built using the MERN stack (MongoDB, Express.js, React, and Node.js). It allows users to browse products, add them to their cart, and proceed to checkout with a smooth user interface.

## Features
- **User Authentication:** Users can register, login, and manage their profiles.
- **Product Management:** Admins can add, update, and delete products.
- **Shopping Cart:** Users can add items to their cart, adjust quantities, and remove items.
- **Checkout Process:** Users can review their orders, provide shipping details, and make payments.
- **Order History:** Users can view their past orders and track their current orders.
- **Admin Dashboard:** Admins can manage users, products, and view sales statistics.
  
 ### Note:- Payment gateway is yet to be integrated.

 ## Demo Video
 
 
## TechStack
- **Frontend**: React with Tailwind CSS for styling.
- **Backend:** Node.js with Express.js for building RESTful APIs.
- **Database:** MongoDB for storing user and product data.
- **State Management:** Redux Toolkit for managing application state.
- **Authentication:** JSON Web Tokens (JWT) for secure authentication.
- **Payment Integration:** Stripe API for handling payments.

## Getting Started

To set up the E-Commerce on your local machine, follow the instructions below.

### Prerequisites

- [Node.js](https://nodejs.org) installed on your machine.
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager.

### Installation

1. Clone the repository:
    ```bash
    git clone 
   
    ```

2. Install the dependencies:
    - For the backend:
      ```bash
      cd backend
      npm install
      ```
    - For the frontend:
      ```bash
      cd frontend
      npm install
      ```

3. Create a `.env` file in the backend directory and add your environment variables:
    ```bash
    PORT=5000
    MONGO_URI=your_mongo_connection_string
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

4. Run the application:
    - Backend:
      ```bash
      npm run server
      ```
    - Frontend:
      ```bash
      npm start
      ```

