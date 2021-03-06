const request = require('supertest')
const app = require('../src/index')
const User = require('../src/models/user')
const Task = require("../src/models/task")
const Project = require("../src/models/project")
const {userOneId, userOne, taskOneId, taskOne, projectOne, projectOneId, setupDatabase} = require('./fixtures/db')

beforeEach(setupDatabase)

//test user routes

test('should create a new user', async() => {
    const response = await request(app).post('/users').send({
        name: 'KayedWajeeh',
        email: 'kayed@hotmail.com',
        password: 'Kayed12345',
        age: 20
    }).expect(201)
})


test('Should get user', async() => {
    const response = await request(app)
                            .get(`/users/${userOneId}`)
                            .send()
                            .expect(200)
})


test('Should get all users', async() => {
    await request(app)
            .get('/users')
            .send()
            .expect(200)
})

test('Should update user', async() => {
        await request(app)
            .patch(`/users/update/${userOneId}`)
            .send({ name: 'kayed' })
            .expect(200)
            const user = await User.findByIdAndUpdate(userOneId)
            expect(user.name).toBe('kayed')
})

//test task routes

test('should create a new task', async() => {
    const response = await request(app).post('/tasks').send({
        title: 'Title',
        description: 'Nothing',
        status: 'in progress',
        creator: 'kayed',
        assignee: 'kayed'
    }).expect(201)
})

test('Should get one task', async() => {
    const response = await request(app)
                            .get(`/tasks/${taskOneId}`)
                            .send()
                            .expect(200)
})

test('Should get all tasks', async() => {
    await request(app)
            .get('/tasks')
            .send()
            .expect(200)
})

test('Should update task', async() => {
    await request(app)
        .patch(`/tasks/update/${taskOneId}`)
        .send({ description: 'complete test using jest' })
        .expect(200)
        const task = await Task.findByIdAndUpdate(taskOneId)
        expect(task.description).toBe('complete test using jest')
})

//Project routes

test('should create a new project', async() => {
    const response = await request(app).post('/project').send({
        title: 'Unknown Project',
        completed: false,
    }).expect(201)
})

test('Should get one project', async() => {
    const response = await request(app)
                            .get(`/project/${projectOneId}`)
                            .send()
                            .expect(200)
})

test('Should get all projects', async() => {
    await request(app)
            .get('/project')
            .send()
            .expect(200)
})

test('Should update project', async() => {
    await request(app)
        .patch(`/project/update/${projectOneId}`)
        .send({ completed: true })
        .expect(200)
        const project = await Project.findByIdAndUpdate(projectOneId)
        expect(project.completed).toBe(true)
})