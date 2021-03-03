const express = require('express')
const Project = require('../../models/project')
const mongoose = require('mongoose')
const validator = require('validator')
const { body, validationResult } = require('express-validator')
const validation = require('../../validation/validation')

// Daoud added code
const addProjectController = require('./addPorject');
const readProjectsController = require('./getProjects')
const readProjectController = require('./getProject');
const updateProjectController = require('./patchProject')

const router = new express.Router()

router.post(
  '/project',
  validation.validateProject(),
  addProjectController,
);


router.get(
    '/project',
    readProjectsController,
)

router.get(
    '/project/:id',
    readProjectController,
)

router.patch(
    '/project/update/:id',
    updateProjectController
)

module.exports = router