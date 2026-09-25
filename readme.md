# Mindly

A full-stack note-taking application built with React, Node.js, Express, and MongoDB.

Mindly allows users to create, view, and manage notes through a clean and responsive interface.

## Live Demo

Try the live application:

**[Live Demo](https://mindly-v40i.onrender.com/)**

## Features

- View all notes
- Create new notes with a title and content
- View individual note details
- Delete notes
- Navigate between different pages
- Responsive design for desktop and mobile
- RESTful API for note management
- MongoDB for persistent data storage
- API rate limiting with Upstash
- Separate frontend and backend applications

## Technologies Used

### Frontend

- React
- React Router
- Axios
- JavaScript
- Tailwind CSS
- DaisyUI
- Lucide React
- React Hot Toast
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- REST API
- Upstash Redis
- Upstash Rate Limit
- CORS
- Dotenv
- Nodemon

## Project Structure

```text
Mindly/
├── backend/
│   ├── src/
│   │   └── server.js
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── ...
│
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MongoDB
- Upstash Redis account

### Installation

Clone the repository:

```bash
git clone https://github.com/ali-khezri/Mindly.git
cd Mindly
```

Install dependencies:

```bash
npm run build
```

This installs dependencies for both the frontend and backend and builds the frontend application.

### Environment Variables

Create a `.env` file inside the `backend` directory and add the required environment variables:

```env
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

Add any other environment variables required by the backend configuration.

## Running the Application

### Development

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in a separate terminal:

```bash
cd frontend
npm run dev
```

The frontend will be available at the local Vite development URL.

### Production

Build the application:

```bash
npm run build
```

Start the backend:

```bash
npm start
```

## API

The backend provides a RESTful API for managing notes.

Typical operations include:

```text
GET     /api/notes
GET     /api/notes/:id
POST    /api/notes
DELETE  /api/notes/:id
```

The API communicates with MongoDB through Mongoose.

## Rate Limiting

Mindly uses Upstash Redis and `@upstash/ratelimit` to limit API requests and help protect the backend from excessive traffic.

## Architecture

Mindly follows a simple full-stack architecture:

```text
React Frontend
      │
      │ HTTP Requests
      ▼
Express REST API
      │
      ▼
Mongoose
      │
      ▼
MongoDB
```

Upstash Redis and Rate Limit are used alongside the backend to handle API rate limiting.

## License

This project is intended for educational and portfolio purposes.

---

## Author

**Ali Khezri** — [Github](https://github.com/ali-khezri) | [LinkedIn](https://www.linkedin.com/in/ali-khezri)

---
