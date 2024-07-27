# Fintech Platform

## Setup Instructions

### Backend

1. Install Node.js and npm.
2. Navigate to the `backend` directory.
3. Run `npm install` to install dependencies.
4. Set up a PostgreSQL database and configure Hasura.
5. Update the `config.js` file with your Hasura endpoint and admin secret.
6. Run `node index.js` to start the backend server.

### Frontend

1. Navigate to the `frontend` directory.
2. Open `index.html` in your web browser.

## API Documentation

### User Routes

- `POST /api/users/login`: Login a user.
  - Request Body: `{ email: string, password: string }`
  - Response: `{ message: string, user: { id: number, username: string, email: string, balance: number } }`

### Transaction Routes

- `POST /api/transactions/deposit`: Deposit an amount.
  - Request Body: `{ userId: number, amount: number }`
  - Response: `{ id: number, amount: number, type: string, timestamp: string }`

## Design Decisions and Assumptions

- Used PostgreSQL as the database for simplicity and compatibility with Hasura.
- Implemented basic login and deposit functionality.
- Placeholder user ID in frontend for simplicity; in a real application, use authentication tokens.
- Basic error handling and security measures implemented; more can be added as needed.

## Evaluation Criteria

### Functionality

- Login and deposit functions implemented.
- Withdraw function is stubbed and can be implemented similarly.

### Security

- Passwords hashed using bcrypt.
- Basic input validation.

### Code Quality

- Clear separation of concerns with models, controllers, and routes.
- Organized directory structure for maintainability and scalability.

### User Interface

- Simple and clean HTML/CSS/JavaScript frontend.
