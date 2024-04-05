import express from  'express';
import bodyParser from 'body-parser';
import db from './Db/db.js';
import eventRouter from './Router/Event.js';
import { configDotenv } from 'dotenv';
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());

//Mounting the events router 

app.use('/events', eventRouter);

db.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  });
  
  db.on('error', err => {
    console.error('MongoDB connection error:', err);
  });