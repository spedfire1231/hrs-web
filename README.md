# Project Overview

This is the HRS Web Project which aims to provide a comprehensive solution for managing human resources seamlessly.

## Features
- Employee Management
- Leave Management
- Payroll Processing

# Setup Instructions

## Prerequisites
- Node.js (version 14 or above)
- npm (version 6 or above)

## Installation
1. Clone the repository:  
   `git clone https://github.com/spedfire1231/hrs-web.git`
2. Navigate to the project directory:  
   `cd hrs-web`
3. Install dependencies:  
   `npm install`

## Running the Application
- To start the application, run:  
  `npm start`

# API Documentation

## Endpoints
1. **GET /api/employees**  
   Fetch all employees.
2. **POST /api/employees**  
   Add a new employee.  
   - **Request Body:** `{"name": "string", "position": "string"}`  
   - **Response:** 201 Created or error message.

3. **DELETE /api/employees/{id}**  
   Remove an employee by ID.  
   - **Response:** 204 No Content or error message.

For more details on API usage, please refer to the API documentation located in the `/docs` directory.