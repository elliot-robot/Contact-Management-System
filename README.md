# Contact-Management-System
Full-Stack App with React, Node.js, and PostgreSQL". A Dockerised full-stack application for managing contacts and phone numbers, built with React (frontend), Express.js (backend), and PostgreSQL (database). Features CRUD operations, 1-to-many relationships, and API integration.
# Contact Management System  
**Full-Stack Application with React, Node.js, PostgreSQL, and Docker**  

## 📌 Overview  
A Dockerized full-stack application for managing contacts and their associated phone numbers. Built as part of **CSE3CWA/CSE5006 Assignment 2 (Sem 2, 2023)**.  

## 🛠️ Technologies  
- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: PostgreSQL  
- **Containerization**: Docker, Docker Compose  
- **API Routes**: RESTful endpoints for CRUD operations  

## ✅ Key Features  
1. **1-to-Many Relationship**: Contacts can have multiple phone numbers.  
2. **CRUD Operations**:  
   - Add/delete contacts and phone numbers.  
   - Fetch data via API (`GET /api/contacts`, `POST /api/phones`).  
3. **Docker Integration**:  
   - Pre-configured with `docker-compose.yml` for seamless setup.  
   - Nginx reverse proxy for frontend-backend communication.  
4. **React Components**: Dynamic UI with state management for real-time updates.  

## 🚀 Setup & Installation  
1. **Clone the repository**:  
   ```bash
   git clone https://github.com/your-username/assignment-2.git
   cd assignment-2
