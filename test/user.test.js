const { expect } = require('chai')
const request = require('supertest')
const { response } = require('../src/app')
const app = require('../src/app')
const User = require('../src/models/user')
const {userOneId, userOne, setupDatabase, userTwoId} = require('./fixtures/db')

beforeEach(setupDatabase)

test('should create a new user', async() => {
    const response = await request(app).post('/users').send({
        name: 'KayedWajeehObeidat',
        email: 'kayed@exampleeeee.com',
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
            const user = await User.findById(userOneId)
            expect(user.name).equal('kayed')
})










// const chai = require('chai')
// const chaiHttp = require('chai-http')
// const app = require('../src/index')
// const { expect } = chai

// chai.use(chaiHttp)

//     describe('Users', () => {
//         describe('GET /users', () => {
//             it('should return all users', (done) => {
//                 chai.request(app)
//                     .get('/users')
//                     .end((err, res) => {
//                         if(err) done(err)
//                         expect(res).to.have.status(200)
//                         expect(res).to.be.an('object')
//                         expect(res.body.status).to.deep.equals('success')
//                         // expect(res.body.users).to.be.an('object')
//                         done()
//                     })
//             })
//         })
//     })