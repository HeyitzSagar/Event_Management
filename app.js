import express from  'express';
import bodyParser from 'body-parser';
import db from './Db/db.js';
import eventRouter from './Router/Event.js';
import { configDotenv } from 'dotenv';


const app = express();
