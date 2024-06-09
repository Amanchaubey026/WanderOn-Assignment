# Secure User Authentication System
## Introduction

FashionFusion is designed to provide a seamless and enjoyable shopping experience for fashion enthusiasts. From trendy apparel to chic accessories, FashionFusion brings the latest styles to your fingertips. This project not only showcases a visually appealing user interface but also incorporates essential features for a complete e-commerce solution.

## Project Type

Frontend

## Deplolyed App

Frontend: https://fashionfusion04.netlify.app/

Backend: https://mock-server-app-1.onrender.com/

## Directory Structure
```
📦 
├─ README.md
├─ client
│  ├─ .env
│  ├─ .eslintrc.cjs
│  ├─ .gitignore
│  ├─ README.md
│  ├─ index.html
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  └─ vite.svg
│  ├─ src
│  │  ├─ App.css
│  │  ├─ App.jsx
│  │  ├─ assets
│  │  │  ├─ react.svg
│  │  │  └─ video.mp4
│  │  ├─ components
│  │  │  ├─ Auth
│  │  │  │  ├─ Login.jsx
│  │  │  │  ├─ PrivateRoute.jsx
│  │  │  │  └─ SignUp.jsx
│  │  │  ├─ Footer.jsx
│  │  │  ├─ Navbar.jsx
│  │  │  └─ miscellaneous
│  │  │     ├─ DataFetcher.jsx
│  │  │     └─ ProfileModal.jsx
│  │  ├─ context
│  │  │  └─ AuthContext.jsx
│  │  ├─ index.css
│  │  ├─ main.jsx
│  │  ├─ pages
│  │  │  ├─ About.jsx
│  │  │  ├─ Authentication.jsx
│  │  │  ├─ Homepage.jsx
│  │  │  └─ Products.jsx
│  │  └─ utils
│  │     └─ vars.js
│  └─ vite.config.js
└─ server
   ├─ .gitignore
   ├─ config
   │  └─ db.config.js
   ├─ controller
   │  ├─ product.controller.js
   │  └─ user.controller.js
   ├─ index.js
   ├─ middlewares
   │  ├─ auth.middleware.js
   │  └─ errorHandler.middleware.js
   ├─ models
   │  ├─ blacklist.schema.js
   │  └─ user.schema.js
   ├─ package-lock.json
   ├─ package.json
   └─ routes
      ├─ product.routes.js
      └─ user.routes.js
```



## Features
  Intuitive User Interface: A clean and user-friendly interface to enhance the browsing and shopping experience.
   
  User Authentication: Secure user registration and login.

  Product Catalog: Explore a diverse range of fashion items conveniently categorized for easy navigation.

  Shopping Cart: Effortlessly add and manage your favorite items with an interactive shopping cart.
 
  Responsive Design: Enjoy a consistent and visually appealing experience across various devices.

- User Profiles: Guests can create profiles and see exclusive collection.
- Admin Profile: Admin can handle Server Data

## test credentials
  <p>login: test3@example.com</p>
  <p>password: password123</p>

  
## Installation & Getting started

Detailed instructions on how to install, configure, and get the project running.

```bash
git clone https://github.com/Amanchaubey026/WanderOn-Assignment/tree/main

### To get inside FrontEnd directory
cd client
npm install

### To get inside Backend directory
cd server
npm install

```

## Usage

To start FrontEnd

```bash
npm run dev

```

To start Backend

```bash
npm run server

```

## Snapshot of Website
<br/>
![sample3](https://github.com/Amanchaubey026/WanderOn-Assignment/assets/98681520/d13da9f9-6ebc-4d66-9b8a-c0c9b972e095)

![image](https://github.com/Amanchaubey026/WanderOn-Assignment/assets/98681520/c40725d0-88b2-43cb-a209-7d518296ca34)

![sample4](https://github.com/Amanchaubey026/WanderOn-Assignment/assets/98681520/e87dd9bf-4c08-47f0-9618-0080de3607cb)

![sample5](https://github.com/Amanchaubey026/WanderOn-Assignment/assets/98681520/e627f517-89ad-40f4-8b23-95e3d47d03ac)

![sample2](https://github.com/Amanchaubey026/WanderOn-Assignment/assets/98681520/516425a7-8f2f-40aa-8d6f-65bc6f11f053)

![sample6](https://github.com/Amanchaubey026/WanderOn-Assignment/assets/98681520/97e23adc-9ddb-41cf-aeb8-ebf233cbf18e)





## API Endpoints

Backend Applications provide a list of your API endpoints, methods, brief descriptions.

<p>POST /api/users/signup - create a new user with validation and registration logic</p>
<p>POST /api/users/login - authenticate a user with validation and authentication logic</p>
<p>POST /api/users/logout - log out a user</p>

### Protected Route
<p>GET /api/products - retrieve all products with authentication</p>


## Technology Stack

### List and provide a brief overview of the technologies used in the project.

- React.js
- Chakra-ui
- ExpressJS
- NodeJS
- MongoDB


