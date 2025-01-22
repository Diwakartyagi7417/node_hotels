// import express from 'express';
// const router = express.router();
import express from 'express';
const router = express.Router();
import Person from './../models/person.js';
// console.log(person);

//post method to add a person 
router.post('/', async (req, res) => {
    try {
        const data = req.body //Assuming the request body contains the person data
        console.log(data)
        const existingPerson = await Person.findOne({ emailid: req.body.emailid });
        if (existingPerson) {
            return res.status(400).json({ error: 'A person with this email already exists.' });
        }

        //create a new person document using the mongoose model
        const newPerson = new Person(data);

        //save the new person to the database
        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' });
    }
})

//Get method to get the person
router.get('/', async (rep, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' });
    }
})

router.get('/:workType', async (req, res) => {
    try {
        const workType = req.params.workType; // Extract the work type from the URL parameter
        if (workType == 'Chef' || workType == 'manager' || workType == 'waiter') {

            const response = await Person.find({work: workType});
            console.log('response fetched');
            res.status(200).json(response);

        } else {
            res.status(404).json({ error: 'Invaild work type' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' });
    }
})

export default router;
