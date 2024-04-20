# Financial Management Application

## Team members

Muratova Alnura 22B030399,
Assylbekova Ayazhan 22В030310, 
Bagdatova Ingkar 22В030521

## Project description

This is a web application for managing personal finances. The application allows users to track their income and expenses, view financial overviews, and categorize transactions.

## Features

- **User Authentication**: Secure user authentication using JWT-based authentication.
- **Transaction Management**: Allows users to add, view, update, and delete transactions.
- **Category Management**: Users can categorize transactions for better organization.
- **Financial Overview**: Provides users with an overview of their financial status.
- **CRUD Operations**: Supports Create, Read, Update, and Delete operations for transactions.

## Technologies Used

- **Front End**:
  - Angular
  - HTML/CSS
  - TypeScript
- **Back End**:
  - Django
  - SQlite
- **Authentication**:
  - JWT (JSON Web Tokens)

## API Endpoints

- **Authentication**:
  - `POST /api/auth/login/`: User login.
  - `POST /api/auth/logout/`: User logout.
- **Transactions**:
  - `GET /api/transactions/`: Retrieve all transactions.
  - `POST /api/transactions/`: Create a new transaction.
  - `GET /api/transactions/{id}/`: Retrieve a specific transaction.
  - `PUT /api/transactions/{id}/`: Update a specific transaction.
  - `DELETE /api/transactions/{id}/`: Delete a specific transaction.
- **Categories**:
  - `GET /api/categories/`: Retrieve all categories.
  - `POST /api/categories/`: Create a new category.
  - `GET /api/categories/{id}/`: Retrieve a specific category.
  - `PUT /api/categories/{id}/`: Update a specific category.
  - `DELETE /api/categories/{id}/`: Delete a specific category.
- **Budgets**:
  - `GET /api/budgets/`: Retrieve all budgets.
  - `POST /api/budgets/`: Create a new budget.
  - `GET /api/budgets/{id}/`: Retrieve a specific budget.
  - `PUT /api/budgets/{id}/`: Update a specific budget.
  - `DELETE /api/budgets/{id}/`: Delete a specific budget.

## Relationships

- **User - Transaction**: One-to-Many relationship where one user can have multiple transactions.
- **Transaction - Category**: Many-to-Many relationship where a transaction can belong to multiple categories, and a category can have multiple transactions.
