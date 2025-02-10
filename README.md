# GoShopping Backend

A Node.js backend server for the GoShopping e-commerce application, featuring user authentication and database integration.

## Tech Stack

### Backend Technologies
- Node.js
- Express.js
- PostgreSQL (User data storage)
- JWT (JSON Web Token for authentication)

## Features

- User Authentication System (Register/Login)
- JWT-based Token Authentication
- RESTful API Design
- PostgreSQL Database Integration

## Installation

1. Clone the repository
```bash
git clone https://github.com/maomao0007/goshopping-backend.git
cd goshopping-backend
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file in the root directory with the following variables:
```
PORT=5001
DB_USER=your_db_username
DB_PASSWORD=your_db_password
DB_HOST=localhost  
DB_PORT=5432          
DB_NAME=your_db_name
JWT_SECRET=your_jwt_secret_key
```

4. Start the server
```bash
npm start
```

## API Endpoints

### Base Routes
- `GET /` - Home page
- `GET /api` - Test API endpoint
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

## Database Schema

### Users Table
```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
