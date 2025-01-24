// const express = require('express')
// const app = express();
// const db = require('./db')
import express from 'express';
const app = express()
import db from './db.js';

import { config } from 'dotenv'; 
config(); 


// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;
// const Person = require('./models/person');
// import Person from './models/person.js';
// import menuItem from './models/Men.js';
// import menuItem from './models/Menu.js';
// console.log(menuItem);

app.get('/', function (req, res) {
    res.send('Welcome to my hotel...How i can help you ?,we have list of menu')
})


//Import the router files
import personRoutes from './routes/personRoutes.js';
import menuItemRoutes from './routes/menuItemRoutes.js';

 //use the routers
 app.use('/person', personRoutes);
 app.use('/menu', menuItemRoutes);



app.listen(PORT, () => {
    console.log('listening on port 3000');
})