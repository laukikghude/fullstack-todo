require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const tasksRouter = require('./routes/tasks');

const app = express();
app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/fullstack_todo';
// show whether MONGO_URI was loaded from environment (masked for safety)
const usingEnv = !!process.env.MONGO_URI;
console.log('MONGO_URI loaded from .env:', usingEnv);

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('MongoDB connected'))
  .catch(err => console.error('Error:', err));

app.use('/api/tasks', tasksRouter);
app.use(express.static(path.join(__dirname, '..', 'frontend')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '..', 'frontend', 'index.html'))
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
