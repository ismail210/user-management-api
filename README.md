<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 🚀 User Management API

## 📌 Description

This project is a backend API built using NestJS for managing users.

It includes secure authentication and authorization using JWT, and uses MongoDB as the database.

The goal of this project is to demonstrate a clean, modular, and scalable backend architecture focused on user management.

---

## ✨ Features

* User registration & login
* JWT-based authentication
* Protected routes (authorization)
* Password hashing (secure storage)
* Full CRUD operations for users
* Modular architecture (NestJS best practices)

---

## 🛠️ Technologies Used

* NestJS
* MongoDB
* Mongoose
* JSON Web Token
* Node.js
* TypeScript

---

## 📦 Installation

```bash
git clone https://github.com/your-username/user-management-api.git
cd user-management-api
npm install
```

---

## ▶️ Running the App

```bash
# development
npm run start:dev

# production
npm run start:prod
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

## 🔐 Authentication

This API uses JSON Web Token for authentication.

After login, include the token in request headers:

```bash
Authorization: Bearer <your_token>
```

---

## 📚 API Endpoints

### Auth

* `POST /auth/register` → Register new user
* `POST /auth/login` → Login user

### Users (Protected)

* `GET /users` → Get all users
* `POST/users` → Create user
* `GET /users/:id` → Get user by ID
* `PATCH /users/:id` → Update user
* `DELETE /users/:id` → Delete user

---

## 📁 Project Structure

```
src/
│── auth/        # Authentication logic
│── users/       # User module
│── common/      # Shared utilities
│── config/      # Configuration files
│── main.ts
```

---

## 🧪 Future Improvements

* Role-Based Access Control (RBAC)
* Unit & E2E testing
* Swagger API documentation

---

## 🤝 Contributing

Feel free to fork this repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.
