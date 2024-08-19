# Full-Stack Authentication System

## Overview

This repository contains a full-stack web application that provides secure user authentication using **Express.js**, **EJS (Embedded JavaScript Templates)**, **Passport.js**, and **Mongoose**. The project demonstrates effective handling of user login and registration with a focus on security and ease of use.

## Key Features

- **User Registration and Login**: Utilizes **Passport-local** and **Passport-local-mongoose** for managing user credentials securely.
- **Password Security**: Implements automatic hashing and salting of passwords through Mongoose plugins, ensuring that sensitive information is protected.
- **Dynamic HTML Rendering**: Uses **EJS** for creating a responsive and interactive user interface.
- **Session Management**: Manages user sessions securely with **Express.js**, allowing for persistent login states across routes.

## Tech Stack

- **Backend**: 
  - Node.js
  - Express.js
- **Frontend**: 
  - EJS
  - CSS
- **Authentication**: 
  - Passport.js
  - Passport-local
  - Passport-local-mongoose
- **Database**: 
  - MongoDB with Mongoose

## Usage
-**Registration**: Navigate to the registration page to create a new user account.
-**Login: Access** the login page to authenticate using your registered credentials.
-**Session Management**: After logging in, sessions are managed securely to maintain authentication states.
