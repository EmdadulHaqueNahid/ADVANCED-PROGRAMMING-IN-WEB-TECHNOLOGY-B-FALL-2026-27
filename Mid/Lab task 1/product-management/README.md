# Product & Employee Management API (NestJS)

## Student Details
| SL | Name                  | ID         | Section |
|----|-----------------------|------------|---------|
| 1 | MD EMDADUL HAQUE NAHID | 21-44446-1 | B       |

## Tech Stack
NestJS, TypeORM, PostgreSQL

## Database Setup
1. Install PostgreSQL and pgAdmin.
2. Create a database named `shop_db`.
3. Copy `.env.example` to `.env` and put your own PostgreSQL password.

## Installation & Run
```bash
npm install
npm run start:dev
```
The server runs at `http://localhost:3000`. Tables are created automatically by TypeORM.

## Endpoints

### Products
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /products | Create a product |
| GET | /products | Get all products |
| GET | /products/:id | Get product by ID |
| PATCH | /products/:id | Update a product |
| DELETE | /products/:id | Delete a product |

### Employees
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /employees | Create an employee |
| GET | /employees | Get all employees |
| GET | /employees/:id | Get employee by ID |
| PATCH | /employees/:id | Update an employee |
| DELETE | /employees/:id | Delete an employee |

## Screenshots
Postman screenshots are in the `screenshots/` folder.