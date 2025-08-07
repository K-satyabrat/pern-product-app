# PERN Product Store

This is a full-stack product store application built with the PERN stack (PostgreSQL, Express, React, Node.js).

## Project Structure

```
pern-product-store/
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── productController.js
│   ├── lib/
│   │   └── arcjet.js
│   ├── routes/
│   │   └── productRoutes.js
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/
│   │   ├── constants/
│   │   └── pages/
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── public/
│       └── vite.svg
├── package.json
```

## Backend
- **Express.js** server (`backend/server.js`)
- **PostgreSQL** database connection (`backend/config/db.js`)
- **Arcjet** for bot and rate-limit protection (`backend/lib/arcjet.js`)
- **Product API routes** (`backend/routes/productRoutes.js`)
- **Product controller** (`backend/controllers/productController.js`)

## Frontend
- **React** app (`frontend/src/`)
- **Vite** for development and build
- **Tailwind CSS** for styling
- **DaisyUI** for UI components

## Getting Started

### Backend
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend
1. Navigate to the `frontend` folder:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend development server:
   ```sh
   npm run dev
   ```

## Features
- Product listing and details
- Rate limiting and bot protection (Arcjet)
- Modern UI with React and Tailwind CSS
