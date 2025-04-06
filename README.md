# 🌍 TravelSmileApp – Full Stack Angular & Spring Boot

## 📖 Overview

TravelSmileApp is a full-stack web application that allows users to manage trips and travelers. Key features include:

- JWT-based authentication
- Register with auto-login
- CRUD operations for trips and travelers
- Confirmation popups for deletions
- Swagger UI for API exploration

---

## 🛠️ Tech Stack

| Frontend      | Backend        |
|---------------|----------------|
| Angular 17+   | Spring Boot 3+ |
| RxJS          | Spring Security |
| Bootstrap     | Spring Data JPA |
| Vite / SCSS   | MySQL          |
| JWT           | Hibernate      |

---

## 🚀 How to Run the Application Locally

### 🧱 Requirements

- Node.js (v16 or higher)
- Angular CLI
- Java 17+
- Maven
- MySQL

---

### 1. 🖥️ Backend (Spring Boot)

#### ✅ Step 1: Create the database

```
CREATE DATABASE travelsmile;
```
#### ✅ Step 2: Configure the connection
Edit src/main/resources/application.properties:

```
spring.datasource.url=jdbc:mysql://localhost:3306/travelsmile
spring.datasource.username=root
spring.datasource.password=yourpassword
```
#### ✅ Step 3: Run the backend

cd travelSmileAppBackend
./mvnw spring-boot:run
The backend will run on http://localhost:8080

### 2. 💻 Frontend (Angular)
```
cd travelSmileAppFrontEnd
npm install
ng serve
```
The frontend will be available at http://localhost:4200

## 🔑 Sample Credentials
You can register a new account, or use this sample:
```
{
  "email": "test@example.com",
  "password": "123456"
}
```
## 📜 Swagger UI

Once the backend is running, access the API documentation at:

🔗 http://localhost:8080/swagger-ui.html

## 📦 Features
 - Login/Register with JWT

 - Auto-login after registration

 - Trip management (list, add, edit, delete)

 - Traveler management (list, add, edit, delete)

 - Confirmation popup before deletion

 - Protected routes using AuthGuard

 - API documentation via Swagger

