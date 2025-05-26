const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB (commented out until we have a real DB connection)
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error('MongoDB connection error:', err));

// User model (simple version for now)
const userSchema = {
  name: String,
  email: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
};

// Product model (simple version for now)
const productSchema = {
  name: String,
  price: Number,
  description: String
};

// Routes
app.get('/', (req, res) => {
  res.send('Zero-v0 API is running');
});

// Mock products for now
const products = [
  { id: 1, name: 'Product 1', price: 99.99, description: 'This is the first product' },
  { id: 2, name: 'Product 2', price: 149.99, description: 'This is the second product' },
  { id: 3, name: 'Product 3', price: 199.99, description: 'This is the third product' },
];

// Products routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

// User routes
app.post('/api/users/register', (req, res) => {
  const { name, email, password } = req.body;
  
  // In a real app, we would check if user exists and hash password
  // For now, we'll just return a success message and mock token
  
  const token = 'mock-jwt-token';
  
  res.status(201).json({
    _id: 'mock-user-id',
    name,
    email,
    token
  });
});

app.post('/api/users/login', (req, res) => {
  const { email, password } = req.body;
  
  // In a real app, we would validate credentials
  // For now, we'll just return a success message and mock token
  
  const token = 'mock-jwt-token';
  
  res.json({
    _id: 'mock-user-id',
    name: 'User',
    email,
    token
  });
});

app.put('/api/users/profile', (req, res) => {
  const { name, password } = req.body;
  
  // In a real app, we would update the user in the database
  // For now, we'll just return the updated user
  
  res.json({
    _id: 'mock-user-id',
    name,
    email: 'user@example.com'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
