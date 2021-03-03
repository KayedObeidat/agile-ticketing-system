const express = require('express')
const User = require('../../models/user')
const mongoose = require('mongoose')
const validator = require('validator')
const validation = require('../../validation/validation')

const addUserControler = require('./addUser');
const readUsersController = require('./getUsers');
const readUserController = require('./getUser');
const updateUserController = require('./patchUser');

const router = new express.Router()


router.post(
    '/users', 
    validation.validate(),
    addUserControler
)

router.get(
    '/users',
    readUsersController
)

router.get(
    '/users/:id',
    readUserController,
)

router.patch(
    '/users/update/:id',
    updateUserController
)

module.exports = router