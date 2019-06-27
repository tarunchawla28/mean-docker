const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { User } = require('../model/user')

router.post('/', async (req, res) => {
    console.log(req.body);
    if (!req.body.firstname && !req.body.lastname) {
        res.status(400).send('Please send correct data');
    }
    const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname
    })
    await user.save();
    res.send(user);
})

router.get('/', async (req, res) => {
    const users = await User.find();
    res.send(users);
});

router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send('The user with given id was not found');
    res.send(user);
})


router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
        firstname: req.body.firstname,
        lastname:req.body.lastname
    }, {
            new: true
        })
    if (!user) return res.status(404).send('The user with given id was not found');
    res.send(user);
})
module.exports = router
