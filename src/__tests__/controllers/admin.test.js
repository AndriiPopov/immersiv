const bcrypt = require('bcrypt')
const supertest = require('supertest')
const app = require('../../../app')
const api = supertest(app)
const jwt = require('jsonwebtoken')

const { sequelize, adminModel } = require('../../models')

let adminAuth = {}

beforeAll(async () => {
    try {
        await sequelize.sync({ force: true })
        const hashedPassword = await bcrypt.hash('secret', 1)

        // admin account
        await adminModel.create({
            email: 'admin@email.com',
            password: hashedPassword,
            locked: true,
        })

        const adminLogin = await api.post('/api/auth/login').send({
            email: 'admin@email.com',
            password: 'secret',
        })

        // take the result of the POST /users/auth which is a JWT
        // store it in the auth object
        adminAuth.token = adminLogin.body.token

        // store the id from the token in the auth object
        adminAuth.user_id = jwt.decode(adminAuth.token).id
    } catch (error) {
        console.log(error)
    }
})

afterAll(async () => {
    await sequelize.close()
})

describe('Admin', () => {
    describe('Add new admin', () => {
        it('should create a new admin if user is an admin', async () => {
            let response = await api
                .post('/api/admins')
                .send({ email: 'email2@mail.com' })
                .expect(200)
                .set('auth-token', adminAuth.token)

            expect(response.body[1].email).toEqual('email2@mail.com')
        })

        it('should not create a new admin if user is not an admin', async () => {
            await api
                .post('/api/admins')
                .send({ email: 'asdasd@sasa.com' })
                .expect(401)
        })
    })

    describe('delete admin', () => {
        it('should not delete a locked admin', async () => {
            const response = await api
                .delete(`/api/admins/admin@email.com`)
                .set('auth-token', adminAuth.token)
                .expect(200)
            expect(response.body).toHaveLength(2)
        })

        it('should not delete a new admin if user is not an admin', async () => {
            await api.delete(`/api/admins/email2@mail.com`).expect(401)
        })
        it('should delete a admin if user is an admin', async () => {
            const response = await api
                .delete(`/api/admins/email2@mail.com`)
                .set('auth-token', adminAuth.token)
                .expect(200)
            expect(response.body).toHaveLength(1)
        })
    })
})
