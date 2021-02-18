const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const validator = require('validator')
const services = require('../services/user')
const { body, validationResult } = require('express-validator')
const validation = require('../validation/validation')

router.post('/users', 
    validation.validate('createUser'),
    services.createUser
)

router.get('/users',
    services.readUsers
)

router.get('/users/:id', async(req, res) => {
    try{
        const user = await User.findById(req.params.id)
        if(!user){
            res.status(404).send()
        }
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)
    }
})

router.patch('/users/update/:id', async(req, res) => {
    const updates = Object.keys(req.body)
    const allwoedUpdates = ['name', 'password', 'age']
    const isValidOperation = updates.every((update) => {
        return allwoedUpdates.includes(update)
    })

    if(!isValidOperation){
        return res.status(400).send({Error: 'Invalid Updates'})
    }

    try{
       const user = await User.findById(req.params.id)
       updates.forEach((update) => {
        user[update] = req.body[update]
    })
    await user.save()
    if(!user){
        res.status(404).send()
    }
    res.send(user)
 }catch(e){
    res.status(400).send(e)
 }

})


module.exports = router