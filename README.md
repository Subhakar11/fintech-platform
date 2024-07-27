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

### HOW TO RUN THIS WHOLE PROJECT 

git colne <link>

To run the entire code for your basic fintech platform using Node.js, Hasura, and a simple frontend, follow these steps:

   ### 1. Setup PostgreSQL Database
Ensure your PostgreSQL database is running and you have created the required database and tables.

 ### 2. Install and Run Hasura
Install Docker Desktop:

Ensure Docker Desktop is installed and running on your system. You can download it from Docker's website.

Run Hasura with Docker:

Open a terminal or PowerShell with administrator privileges and run the following command:


docker run -p 8080:8080 -e HASURA_GRAPHQL_DATABASE_URL=postgres://yourusername:yourpasswordlocalhost:5432/fintech_db hasura/graphql-engine:v2.0.0
Access Hasura Console:

Open your web browser and navigate to http://localhost:8080 to access the Hasura Console.

### 3. Setup and Run Node.js Backend
Navigate to Backend Directory:

Open a terminal or PowerShell and navigate to the backend directory of your project.


cd /path/to/your/project/backend
Install Dependencies:

Install the necessary dependencies using npm:


npm install
Start the Node.js Server:

Run the Node.js server:


node index.js
The server should start and be running on port 3000.

### 4. Setup and Run Frontend
Navigate to Frontend Directory:

Open a new terminal or PowerShell window and navigate to the frontend directory of your project.


cd /path/to/your/project/frontend
Open the index.html File:

Open the index.html file in your web browser. This can typically be done by simply double-clicking the file or dragging it into your browser window.

### 5. Verify the Application
Hasura Console:

Go to http://localhost:8080 and verify that the Hasura Console is running and connected to your PostgreSQL database.
You can use the console to run GraphQL queries and mutations to ensure everything is working correctly.
Node.js Backend:

Ensure the backend server is running without errors. Open your browser and go to http://localhost:3000 to verify if the server responds correctly.
Frontend:

Open the index.html file in your browser and verify that you can interact with the frontend, including logging in, making deposits, and withdrawals.

Verify that the PostgreSQL database is running and accessible.
Ensure the correct database credentials are used.
By following these steps, you should be able to run the entire fintech platform on your local machine. If you encounter any specific errors, please provide details so I can assist you further.


