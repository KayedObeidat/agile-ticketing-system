const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')

router.post('/users', async(req, res) => {
    const user = new User(req.body)
        try{
            await user.save()
            res.status(201).send(user)
        } catch(e) {
            res.status(400).send(e)
        }
})

router.get('/users', async(req, res) => {
    try{
        const users = await User.find({  })
        res.status(200).send(users)
    }catch(e){
        res.status(400).send(e)
    }
})

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