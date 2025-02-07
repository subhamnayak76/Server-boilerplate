# Express.js Boilerplate with Prisma, PostgreSQL, and MVC Architecture

This is a boilerplate setup for an Express.js application with Prisma ORM, PostgreSQL database, and MVC architecture. It includes features like rate limiting, compression, security headers, caching, logging with Winston, validation with Zod, and global error handling.

## Features

- **Express.js**: Web framework for Node.js.
- **Prisma**: ORM for database interactions.
- **PostgreSQL**: Relational database.
- **Rate Limiting**: Limits repeated requests to public APIs.
- **Compression**: Compresses response bodies for faster transmission.
- **Helmet**: Sets various HTTP headers for security.
- **Caching**: Caches responses to improve performance.
- **Winston**: Logging library for better monitoring.
- **Zod**: Schema declaration and validation library.
- **Global Error Handling**: Centralized error handling for the application.

## Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- PostgreSQL database

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/subhamnayak76/Server-boilerplate

## Project Setup Guide

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory and add your environment variables:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase?schema=public"
PORT=3000
```

### 4. Initialize Prisma
Initialize Prisma and set up your database schema:

```sh
npx prisma init
```
Edit the `prisma/schema.prisma` file to define your database models.

### 5. Migrate Your Database
Run the following commands to create the necessary tables in your PostgreSQL database:

```sh
npx prisma migrate dev --name init
npx prisma generate
```

### 6. Start the Server
Start the server using Nodemon for development:

```sh
npm run dev
```
Or start the server in production mode:

```sh
npm start
```

### 7. Access the Application
Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to access the application.

---

## Project Structure

- **controllers/**: Contains the controller logic for handling requests.
- **models/**: Contains the model logic for interacting with the database.
- **routes/**: Contains the route definitions.
- **middleware/**: Contains custom middleware for the application.
- **validations/**: Contains Zod schemas for request validation.
- **logger.js**: Configuration for Winston logging.
- **errorHandler.js**: Global error handling middleware.
- **app.js**: Entry point for the Express application.



