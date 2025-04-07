# 📘 TravelSmileApp - API Documentation

This document provides an overview of all available REST APIs exposed by the **TravelSmileApp** backend.

---

## 🔐 Authentication

### ✅ POST `/auth/register`
Register a new user and return a JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "123456"
}
```

**Response:**
```json
{
  "token": "JWT_TOKEN"
}
```

---

### ✅ POST `/auth/login`
Login and receive a JWT token.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "123456"
}
```

**Response:**
```json
{
  "token": "JWT_TOKEN"
}
```

---

## ✈️ Trips

**All trip endpoints require a Bearer JWT token**

### 📥 POST `/api/trips`
Create a new trip.

**Request Body:**
```json
{
  "title": "User User",
  "description": "Busniss trip",
  "destination": "Berlin",
  "startDate": "2025-05-01",
  "endDate": "2025-05-10"
}
```

### 📤 GET `/api/trips`
Retrieve all trips.

### 📥 GET `/api/trips/{id}`
Retrieve a specific trip by ID.

### 📝 PUT `/api/trips/{id}`
Update a trip by ID.

**Request Body:** Same format as `POST`.

### ❌ DELETE `/api/trips/{id}`
Delete a trip by ID.

---

## 👤 Travelers

**All traveler endpoints require a Bearer JWT token**

### 📥 POST `/api/travelers`
Create a new traveler.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123456789"
}
```

### 📤 GET `/api/travelers`
Retrieve all travelers.

### 📥 GET `/api/travelers/{id}`
Retrieve a traveler by ID.

### 📝 PUT `/api/travelers/{id}`
Update a traveler by ID.

**Request Body:** Same format as `POST`.

### ❌ DELETE `/api/travelers/{id}`
Delete a traveler by ID.

---

## 🔐 Security

All routes (except `/auth/**`) require a JWT token in the `Authorization` header.

**Header Example:**
```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

## 📜 Swagger UI

📍 `http://localhost:8080/swagger-ui.html`

Use Swagger UI to explore and test these endpoints visually.

---
