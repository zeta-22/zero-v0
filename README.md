# Zero-v0

A basic e-commerce website with user authentication and product display.

## Project Structure

This project is set up as a full-stack application with:

- **Frontend**: React application in the `/frontend` directory
- **Backend**: Node.js/Express API in the `/backend` directory

## Features

- Homepage with product display
- Product detail pages
- User authentication (register/login/logout)
- User dashboard to edit profile
- Responsive design

## Deployment Instructions

### Backend Deployment (Render)

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Configure the following settings:
   - **Name**: zero-v0-api
   - **Root Directory**: backend
   - **Runtime**: Node
   - **Build Command**: npm install
   - **Start Command**: node server.js
4. Add environment variables:
   - PORT: 5000
   - JWT_SECRET: (your secret key)
   - MONGODB_URI: (your MongoDB connection string)
5. Deploy the service

### Frontend Deployment (Netlify)

1. Create a new site on Netlify
2. Connect your GitHub repository
3. Configure the following settings:
   - **Base directory**: frontend
   - **Build command**: npm run build
   - **Publish directory**: build
4. Add environment variables:
   - REACT_APP_API_URL: (your Render backend URL)
5. Deploy the site

## Local Development

### Backend Setup

```bash
cd backend
npm install
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

## Next Steps

1. Connect to a real MongoDB database
2. Implement real authentication with JWT
3. Add more product features
4. Enhance UI/UX design
