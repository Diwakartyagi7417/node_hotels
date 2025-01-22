// const mongoose = require('mongoose');
import mongoose from 'mongoose';
//Define the MongoDB connection URL
//  const MongoURL =  'mongodb://localhost:27017/hotels' //Replace 'mydatabase' with your database name
 const MongoURL =  'mongodb+srv://diwakartyagi7417:Diwakar123@hotel.wpcbg.mongodb.net/'
  //set up MongoDB connection
  mongoose.connect(MongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
  })

  //Get  the deafult connection 
  //moogose maintains a deafult connection object representing the mongoDB connection.
  // const db = mongoose.connection;
  const db = mongoose.connection; 

  //Define event listeners for database connection
  db.on('connected',() =>{
    console.log('connected to MongoDB server'); 
  });

  db.on('error',(err) =>{
    console.error('  MongoDB connection error:',err); 
  });

    db.on('disconnected',() =>{
    console.log(' MongoDB disconnected'); 
  });

  //Export the database connection
  //  module.exports = db;
  export default db; 