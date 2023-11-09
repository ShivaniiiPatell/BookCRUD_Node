# Book Management API

This Node.js project provides a simple API for managing books.

## Setup Instructions

Follow these steps to set up and run the project locally.

### Prerequisites

- Node.js and npm installed.

### Installation

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies:

   ```bash
   npm install
4. Add PORT, DATABASE_URI, JWT_SECRET to .env
5. Start Application:

 	```bash
   npm start
## API Endpoints

#### Get All Books

- **Endpoint:** `GET /api/books`
- **Description:** Retrieve a list of all books.
- **Example:**

   ```bash
  GET http://localhost:3000/api/books
#### Get Book by ID

- **Endpoint:** `GET /api/books/:id`
- **Description:** Retrieve details of a specific book by its ID.
- **Example:**

  ```bash
  GET http://localhost:3000/api/books/:id
#### Add a New Book

- **Endpoint:** `POST /api/books`
- **Description:** Add a new book.
- **Example:**

  ```bash
  POST http://localhost:3000/api/books
#### Update a Book

- **Endpoint:** `PUT /api/books/:id`
- **Description:** Update details of a specific book by its ID.
- **Example:**

  ```bash
  PUT http://localhost:3000/api/books/:id
#### Delete a Book

- **Endpoint:** `DELETE /api/books/:id`
- **Description:** Delete a specific book by its ID.
- **Example:**

  ```http
  DELETE http://localhost:3000/api/books/:id
