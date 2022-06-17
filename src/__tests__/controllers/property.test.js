const bcrypt = require('bcrypt')
const supertest = require('supertest')
const app = require('../../../app')
const api = supertest(app)
const jwt = require('jsonwebtoken')

const { sequelize, adminModel } = require('../../models')

let adminAuth = {}

let project0, project1, login0, login1

const projectData0 = {
    url: 'new-building',
    projectId: 'a1b2',
    modelId: 'c3d4',
    logo: 'image',
    name: 'New building',
    adminEmail: 'iam@mymail.com',
    adminPassword: '123456qwerty',
    analytic: 'fre',
}

const projectData1 = {
    url: 'new-building1',
    projectId: 'a1b21',
    modelId: 'c3d41',
    logo: 'image1',
    name: 'New building1',
    adminEmail: 'iam@mymail1.com',
    adminPassword: '123456qwerty1',
    analytic: 'fre1',
}

beforeAll(async () => {
    try {
        await sequelize.sync({ force: true })
        const hashedPassword = await bcrypt.hash('secret', 1)

        // admin account
        let res = await adminModel.create({
            email: 'admin@email.com',
            password: hashedPassword,
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

        await api
            .post('/api/projects')
            .send(projectData0)
            .set('auth-token', adminAuth.token)

        res = await api
            .post('/api/projects')
            .send(projectData1)
            .set('auth-token', adminAuth.token)

        project0 = res.body[0]
        project1 = res.body[1]
        res = await api.post(`/api/auth/login`).send({
            email: project0.adminEmail,
            password: project0.adminPassword,
        })

        login0 = res.body

        res = await api.post(`/api/auth/login`).send({
            email: project1.adminEmail,
            password: project1.adminPassword,
        })

        login1 = res.body
    } catch (error) {}
})

afterAll(async () => {
    await sequelize.close()
})

describe('Property', () => {
    describe('Add new property', () => {
        it('should create and update a new property if user is a superadmin or admin of this project', async () => {
            //create property0
            let response = await api
                .post(`/api/properties/${project0.id}`)
                .expect(200)
                .set('auth-token', adminAuth.token)

            expect(response.body.newProperties).toHaveLength(1)
            expect(response.body.newProperties[0]).toMatchObject({
                Name: 'Property',
                Availability: 'available',
            })
            //update property0
            response = await api
                .put(
                    `/api/properties/${project0.id}/${response.body.newProperties[0].id}`
                )
                .set('auth-token', adminAuth.token)
                .send({ Availability: 'sold', Name: 'lolo' })
                .expect(200)

            let propertyNew = response.body[0]

            expect(propertyNew).toMatchObject({
                Availability: 'sold',
                Name: 'lolo',
            })
            //create property1
            response = await api
                .post(`/api/properties/${project0.id}`)
                .send({ id: propertyNew.id })
                .set('auth-token', adminAuth.token)
                .expect(200)

            expect(response.body.newProperties[1]).toMatchObject({
                Name: 'lolo',
                Availability: 'sold',
            })
            //update property1
            response = await api
                .put(
                    `/api/properties/${project0.id}/${response.body.newProperties[1].id}`
                )
                .set('auth-token', adminAuth.token)
                .send({ Availability: 'reserved', Name: 'property1' })
                .expect(200)

            propertyNew = response.body[1]

            expect(propertyNew).toMatchObject({
                Availability: 'reserved',
                Name: 'property1',
            })

            //create property2
            response = await api
                .post(`/api/properties/${project0.id}`)
                .send({ id: propertyNew.id })
                .set('auth-token', adminAuth.token)
                .expect(200)

            expect(response.body.newProperties[2]).toMatchObject({
                Availability: 'reserved',
                Name: 'property1',
            })
            //update property2
            response = await api
                .put(
                    `/api/properties/${project0.id}/${response.body.newProperties[2].id}`
                )
                .set('auth-token', adminAuth.token)
                .send({ Availability: 'available', Name: 'property2' })
                .expect(200)

            propertyNew = response.body[2]

            expect(propertyNew).toMatchObject({
                Availability: 'available',
                Name: 'property2',
            })
            //update property2 with project admin login
            response = await api
                .put(`/api/properties/${project0.id}/${propertyNew.id}`)
                .set('auth-token', login0.token)
                .send({ Availability: 'sold', Name: 'property3' })
                .expect(200)

            propertyNew = response.body[2]

            expect(propertyNew).toMatchObject({
                Availability: 'sold',
                Name: 'property3',
            })
        })

        it('should not create a new property if user is a project admin', async () => {
            await api
                .post(`/api/properties/${project0.id}`)
                .send({
                    name: 'Property',
                    Availability: 'available',
                })
                .set('auth-token', login0.token)
                .expect(401)
        })

        it('should not create a new project if user is not an admin', async () => {
            await api
                .post(`/api/properties/${project0.id}`)
                .send({
                    name: 'property0',
                    Availability: 'available',
                })
                .expect(401)
        })
    })

    describe('Get project properties', () => {
        it('should return project properties', async () => {
            const response = await api
                .get(`/api/properties/${project0.id}`)
                .expect(200)

            expect(response.body).toHaveLength(3)
        })
        it('should return 404 if no project', async () => {
            await api.get(`/api/properties/25`).expect(404)
        })
    })

    describe('Get one property', () => {
        it('should return project properties', async () => {
            let response = await api
                .get(`/api/properties/${project0.id}`)
                .expect(200)

            response = await api
                .get(`/api/properties/${project0.id}/${response.body[0].id}`)
                .expect(200)
            expect(response.body).toMatchObject({
                Name: 'lolo',
                Availability: 'sold',
            })
        })
        it('should return 404 if no project', async () => {
            await api.get(`/api/properties/25`).expect(404)
        })
    })

    describe('delete property', () => {
        it('should delete a property if user is a superadmin', async () => {
            let response = await api
                .get(`/api/properties/${project0.id}`)
                .expect(200)

            await api
                .delete(`/api/properties/${project0.id}/delete`)
                .send({ ids: [response.body[0].id] })
                .set('auth-token', adminAuth.token)
                .expect(200)
        })

        it('should return error if user is not authorized', async () => {
            let response = await api
                .get(`/api/properties/${project0.id}`)
                .expect(200)

            await api
                .delete(`/api/properties/${project0.id}/${response.body[0].id}`)
                .set('auth-token', login0.token)
                .expect(401)
        })
    })
    describe('get properties for ue', () => {
        it('should all properties for a project', async () => {
            const response = await api
                .get(`/api/properties//properties-ue/${project0.url}`)
                .expect(200)

            expect(response.body).toHaveLength(2)
        })
    })
})
