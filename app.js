import express from  'express';
import bodyParser from 'body-parser';
import connectDB from './Db/db.js'
import {eventRouter} from './Router/Event.js';
import { configDotenv } from 'dotenv';
configDotenv();
const app = express();
connectDB();
const port = process.env.PORT || 3001;
app.use(bodyParser.json());

//Mounting the events router 

app.use('/events', eventRouter);

app.get("/", (req, res) => {
  res.send("Starting the Event api !");
});

app.listen(process.env.PORT, () => {
  console.log(`Running on the Port number ${process.env.PORT}`);
});