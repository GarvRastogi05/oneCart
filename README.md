<h1 align="center">🛒 oneCart</h1>

<p align="center">
  <b>A full-stack e-commerce application built with React, Node.js, Express, MongoDB, Firebase, and Razorpay.</b>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React.js-blue?style=flat-square" />
  <img src="https://img.shields.io/badge/Backend-Node.js-green?style=flat-square" />
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen?style=flat-square" />
  <img src="https://img.shields.io/badge/Payments-Razorpay-blueviolet?style=flat-square" />
  <img src="https://img.shields.io/badge/Auth-Firebase-orange?style=flat-square" />
  
</p>

---

## 🚀 Overview  
**oneCart** is a modern shopping platform that allows users to browse, add to cart, and purchase products securely using **Razorpay**.  
The app uses **Firebase** for authentication and hosting, ensuring a smooth, secure user experience from login to checkout.  

## 🚀 Project Overview  
oneCart is designed to provide a streamlined shopping/cart experience — enabling users to browse items, add to cart, modify quantities, and proceed to checkout. The project comprises two separate parts:  
- **Frontend** (in the `frontend/` directory) — built with React.  
- **Backend** (in the `backend/` directory) — built with Node.js and Express (with routes, controllers, etc.).  

## 🧱 Features  
- 🔐 **Firebase Authentication** (Login/Signup with Email or Google)  
- 🛍️ **Add to Cart / Remove from Cart / Update Quantity**  
- 💳 **Razorpay Payment Gateway Integration**  
- 🗃️ **MongoDB Database** for storing products, users, and orders  
- ⚡ **RESTful API** built with Node.js & Express  
- 🎨 **React.js Frontend** for an interactive user experience  
- 📱 **Responsive Design** (works on mobile and desktop)  
- ☁️ **Firebase Hosting** for deployment  


## 🛠️ Getting Started  

### Prerequisites  
- Node.js & npm installed  
- (Optional) MongoDB or another database if the backend uses one  
- React environment (create-react-app / or equivalent)  

### Installation & Running  
1. Clone the repository  
   ```bash
   git clone https://github.com/GarvRastogi05/oneCart.git
   cd oneCart
2. Install backend dependencies and start the server
   ```bash
   cd backend
   npm install
   npm run dev 
3. Install frontend dependencies and start the client
   ```bash
    cd frontend
    npm install
    npm run dev
4. Firebase Configuration
   In src/firebaseConfig.js, add your Firebase project details:
   ```javascript
   import { initializeApp } from "firebase/app";
  
   const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
   };

   export const app = initializeApp(firebaseConfig);
   This enables Firebase authentication and hosting for the frontend.

# Environment Variables

  You may need to set up an .env file in the backend/ directory with variables such as:
  
    PORT=8000
    MONGODB_URL="enter your mongodb url"
    JWT_SECRET="EWQS25554cfdXHWSJW4Y53"
    ADMIN_EMAIL="admin@onecart.com"
    ADMIN_PASSWORD="admin1234567"
    CLOUDINARY_NAME="enter your cloud name"
    CLOUDINARY_API_KEY="enter your api key"
    CLOUDINARY_API_SECRET="enter your api secret"
    RAZORPAY_KEY_ID="enter your key id"
    RAZORPAY_KEY_SECRET="enter your key secret"



💳Razorpay Integration : 
1. Razorpay is used for secure online payments.
2. During checkout, a payment order is created using Razorpay’s API on the backend.
3. The frontend then opens the Razorpay payment window where users can complete their transaction.
4. On success, the backend verifies the payment signature before marking the order as complete.




🎨 Technologies Used : 

| Category       | Technology                        |
| -------------- | --------------------------------- |
| Frontend       | React.js, HTML5, CSS3, JavaScript |
| Backend        | Node.js, Express.js               |
| Database       | MongoDB (Mongoose)                |
| Authentication | Firebase                          |
| Payments       | Razorpay                          |
| Hosting        | Firebase Hosting                  |
| Other          | Axios, React Router, dotenv       |




👥 Contributing :
Contributions are always welcome!
1. Fork this repository
2. Create a new branch (git checkout -b feature/your-feature-name)
3. Commit your changes (git commit -m 'Added new feature')
4. Push to your branch (git push origin feature/your-feature-name)
5. Create a pull request.


<p align="center">💙 Developed by <b>Garv Rastogi</b></p> ```
   
