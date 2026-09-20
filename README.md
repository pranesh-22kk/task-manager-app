# Simple Task Manager App

A simple full-stack Task Manager application built using React.js, Node.js, Express.js, and MongoDB.

## Features

- Create tasks with title and description
- View all tasks
- Update task status between Pending and Completed
- Delete tasks
- Persistent task storage using MongoDB
- Responsive and clean user interface

## Tech Stack

### Frontend
- React.js
- JavaScript
- CSS
- Vite

### Backend
- Node.js
- Express.js
- REST API

### Database
- MongoDB
- Mongoose

## Project Structure

```text
task-manager/
│
├── backend/
│   ├── models/
│   │   └── Task.js
│   ├── .env
│   ├── db.js
│   ├── server.js
│   └── package.json
│
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx
│   └── index.css
│
├── .gitignore
├── README.md
└── package.json
