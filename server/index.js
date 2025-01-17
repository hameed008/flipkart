import dotenv from 'dotenv'
import express from 'express'
import Connection from './database/db.js';
import DefaultData from './default.js';
import Router from './routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();

//* initializing dotenv:
dotenv.config();

//* Assigning port number:
const port = process.env.PORT || '8000';
const host = process.env.HOST || 'localhost'

//* Calling database connection method:
const DATABASE_NAME = process.env.DATABASE_NAME
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
Connection(DATABASE_NAME, USERNAME, PASSWORD);
//Connection();

//* Using Cors:
app.use(cors()) // when we make multiple request on different port in the browser then it gives 'cors' error, to prevent that we are using this line.

//* Body Parser:
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true })) // we use this, because if user entered url with blank space then browaer will add random numbers in the blank spaces, that's why we need to parse the URL in order to work it properly.

//* Using Routes:
app.use('/', Router)

//* Creating express server:
app.listen(port, () => { console.log(`Server is listening at http://${host}:${port}`) })

//* Calling DefaultData function to insert documents to database:
DefaultData()