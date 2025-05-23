# todo_backend

A secure and scalable Todo List REST API built with **Node.js**, **Express.js**, **MongoDB**, **Mongoose**, **TypeScript**, and **JWT Authentication**. Includes a scheduled **CRON job** to mark expired todos as completed.

---

## 🚀 Features

- ✅ User registration and login with **JWT-based authentication**
- ✅ Secure CRUD operations for personal todo items
- ✅ Each todo has `title`, `description`, `dueDate`, `completed`, and `user`
- ✅ Daily **CRON job** marks expired todos as completed
- ✅ Built with **TypeScript** and follows best practices
- ✅ Organized and modular project structure

---

## 📁 Project Structure

```
src/
│
├── controllers/        # Route handler logic
├── middlewares/        # Authentication middleware
├── models/             # Mongoose models
├── routes/             # Route definitions
├── jobs/               # CRON job logic
├── config/             # DB connection config
└── server.ts           # Entry point
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/rcs_janu/todo_backend.git
cd todo_backend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the root directory:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/todo_db
JWT_SECRET=your_jwt_secret
```

### 4. Start the development server

```bash
npm run dev
```

---

## 🛠 API Endpoints

### 🔐 Authentication

#### `POST /api/user-auth/register`
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

#### `POST /api/user-auth/login`
```json
{
  "email": "user@example.com",
  "password": "yourpassword"
}
```

> Returns: `{ "token": "..." }`

---

### 📝 Todos

All routes below require an `Authorization` header:
```
<token>
```

#### `GET /api/todos/all` — Get all user todos  
#### `POST /api/todos/add` — Create a new todo
```json
{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs",
  "dueDate": "2025-05-25T23:59:00.000Z"
}
```

#### `PUT /api/todos/update/:id` — Update a todo  
#### `DELETE /api/todos/delete/:id` — Delete a todo

---

## ⏰ CRON Job

A CRON job runs **daily at midnight** and automatically sets `completed = true` for all todos whose `dueDate` has passed.

To test locally (every minute), change in `cron/job.ts`:

```ts
cron.schedule('* * * * *', ...) // every minute
```

---

## 📦 Scripts

| Command         | Description                     |
|----------------|---------------------------------|
| `npm run dev`  | Start server with nodemon       |
| `npm run build`| Compile TypeScript              |
| `npm start`    | Start compiled JS in production |

---