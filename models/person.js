// const moogose = require('mongoose');
import mongoose from 'mongoose';
 
//Define the person schema
const personschema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }, 
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['Chef','waiter','manager'],
        required:true
    },
    emailid:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        require:true    
    },
    mobile:{
        type:String,
        require:true
    },
});

//crete Person model
 const Person = mongoose.model('Person',personschema);
//  module.exports = Person;
export default Person;