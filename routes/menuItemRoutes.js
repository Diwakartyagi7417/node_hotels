import express from 'express';
const router = express.Router();

import MenuItem from './../models/Menu.js';
// console.log(MenuItem);



//post method to add a Menu Item 
router.post('/', async (req, res) => {
    try {
        const data = req.body //Assuming the request body contains the menuitem data
        console.log(data)
        const existingMenuItem = await MenuItem.findOne({ name: req.body.name });
        if (existingMenuItem) {
            return res.status(400).json({ error: 'A menuitem with this name already exists.' });
        }

        //create a new menuitem document using the mongoose model
        const newMenu = new MenuItem(data);

        //save the new menuitem to the database
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' });
    }
})

//Get method to get the menu items   
router.get('/', async (rep, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server Error' });
    }
})

export default router;