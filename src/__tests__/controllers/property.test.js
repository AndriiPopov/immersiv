const bcrypt = require("bcrypt");
const supertest = require("supertest");
const app = require("../../../app");
const api = supertest(app);
const jwt = require("jsonwebtoken");

const { sequelize, adminModel } = require("../../models");

let adminAuth = {};

let project0, project1, login0, login1;

const projectData0 = {
    url: "new-building",
    projectId: "a1b2",
    modelId: "c3d4",
    logo: "image",
    name: "New building",
    adminEmail: "iam@mymail.com",
    adminPassword: "123456qwerty",
    analytic: "fre",
};

const projectData1 = {
    url: "new-building1",
    projectId: "a1b21",
    modelId: "c3d41",
    logo: "image1",
    name: "New building1",
    adminEmail: "iam@mymail1.com",
    adminPassword: "123456qwerty1",
    analytic: "fre1",
};

beforeAll(async () => {
    try {
        await sequelize.sync({ force: true });
        const hashedPassword = await bcrypt.hash("secret", 1);

        // admin account
        let res = await adminModel.create({
            email: "admin@email.com",
            password: hashedPassword,
        });

        const adminLogin = await api.post("/api/auth/login").send({
            email: "admin@email.com",
            password: "secret",
        });

        // take the result of the POST /users/auth which is a JWT
        // store it in the auth object
        adminAuth.token = adminLogin.body.token;

        // store the id from the token in the auth object
        adminAuth.user_id = jwt.decode(adminAuth.token).id;

        await api
            .post("/api/projects")
            .send(projectData0)
            .set("auth-token", adminAuth.token);

        res = await api
            .post("/api/projects")
            .send(projectData1)
            .set("auth-token", adminAuth.token);

        project0 = res.body[0];
        project1 = res.body[1];
        res = await api.post(`/api/projects/${project0.id}/login`).send({
            email: project0.adminEmail,
            password: project0.adminPassword,
        });

        login0 = res.body;

        res = await api.post(`/api/projects/${project1.id}/login`).send({
            email: project1.adminEmail,
            password: project1.adminPassword,
        });

        login1 = res.body;
    } catch (error) {}
});

afterAll(async () => {
    await sequelize.close();
});

describe("Property", () => {
    describe("Add new property", () => {
        it("should create a new property if user is a superadmin or admin of this project", async () => {
            await api
                .post(`/api/properties/${project0.id}`)
                .send({
                    name: "property0",
                    status: "available",
                })
                .expect(200)
                .set("auth-token", adminAuth.token);
            await api
                .post(`/api/properties/${project0.id}`)
                .send({
                    name: "property1",
                    status: "sold",
                })
                .expect(200)
                .set("auth-token", adminAuth.token);

            let response = await api
                .post(`/api/properties/${project0.id}`)
                .send({
                    name: "property2",
                    status: "reserved",
                })
                .expect(200)
                .set("auth-token", adminAuth.token);

            expect(response.body).toHaveLength(3);
            expect(response.body[0]).toMatchObject({
                name: "property0",
                status: "available",
            });
            expect(response.body[1]).toMatchObject({
                name: "property1",
                status: "sold",
            });
            expect(response.body[2]).toMatchObject({
                name: "property2",
                status: "reserved",
            });
        });

        it("should not create a new property if user is a project admin", async () => {
            await api
                .post(`/api/properties/${project0.id}`)
                .send({
                    name: "property1",
                    status: "sold",
                })
                .set("auth-token", login0.token)
                .expect(401);
        });

        it("should not create a new project if user is not an admin", async () => {
            await api
                .post(`/api/properties/${project0.id}`)
                .send({
                    name: "property0",
                    status: "available",
                })
                .expect(401);
        });
    });

    describe("Get project properties", () => {
        it("should return project properties", async () => {
            const response = await api
                .get(`/api/properties/${project0.id}`)
                .expect(200);

            expect(response.body).toHaveLength(3);
        });
        it("should return 404 if no project", async () => {
            await api.get(`/api/properties/25`).expect(404);
        });
    });

    describe("Get one property", () => {
        it("should return project properties", async () => {
            let response = await api
                .get(`/api/properties/${project0.id}`)
                .expect(200);

            response = await api
                .get(`/api/properties/${project0.id}/${response.body[0].id}`)
                .expect(200);
            console.log(project0);
            expect(response.body).toMatchObject({
                name: "property0",
                status: "available",
            });
        });
        it("should return 404 if no project", async () => {
            await api.get(`/api/properties/25`).expect(404);
        });
    });

    describe("Update property", () => {
        it("should update a property if user is a superadmin", async () => {
            let response = await api
                .get(`/api/properties/${project0.id}`)
                .expect(200);

            const propertyOld = response.body[0];
            response = await api
                .put(`/api/properties/${project0.id}/${response.body[0].id}`)
                .set("auth-token", adminAuth.token)
                .send({ status: "sold", name: "lolo" })
                .expect(200);

            const propertyNew = response.body.find(
                (i) => i.id === propertyOld.id
            );

            expect(propertyOld.id).toEqual(propertyNew.id);
            expect(propertyNew).toMatchObject({ status: "sold", name: "lolo" });
        });

        it("should return error if user is project admin", async () => {
            let response = await api
                .get(`/api/properties/${project0.id}`)
                .expect(200);

            const propertyOld = response.body[0];
            response = await api
                .put(`/api/properties/${project0.id}/${response.body[0].id}`)
                .set("auth-token", login0.token)
                .send({ status: "sold", name: "lolo" })
                .expect(401);
        });
    });

    describe("delete property", () => {
        it("should delete a property if user is a superadmin", async () => {
            let response = await api
                .get(`/api/properties/${project0.id}`)
                .expect(200);

            const propertyOld = response.body[0];
            response = await api
                .delete(`/api/properties/${project0.id}/${response.body[0].id}`)
                .set("auth-token", adminAuth.token)
                .expect(200);
        });

        it("should return error if user is not authorized", async () => {
            let response = await api
                .get(`/api/properties/${project0.id}`)
                .expect(200);

            const propertyOld = response.body[0];
            response = await api
                .delete(`/api/properties/${project0.id}/${response.body[0].id}`)
                .set("auth-token", login0.token)
                .expect(401);
        });
    });

    describe("Update status", () => {
        it("should update a status if user is a superadmin or project admin", async () => {
            let response = await api
                .get(`/api/properties/${project0.id}`)
                .expect(200);

            const propertyOld = response.body[0];
            response = await api
                .put(`/api/properties/${project0.id}/status/${propertyOld.id}`)
                .set("auth-token", adminAuth.token)
                .send({ status: "reserved" })
                .expect(200);

            const propertyNew = response.body.find(
                (i) => i.id === propertyOld.id
            );

            expect(propertyOld.id).toEqual(propertyNew.id);
            expect(propertyNew).toMatchObject({ status: "reserved" });

            response = await api
                .put(`/api/properties/${project0.id}/status/${propertyOld.id}`)
                .set("auth-token", adminAuth.token)
                .send({ status: "available" })
                .expect(200);

            const propertyNew1 = response.body.find(
                (i) => i.id === propertyOld.id
            );

            expect(propertyOld.id).toEqual(propertyNew1.id);
            expect(propertyNew1).toMatchObject({ status: "available" });
        });

        it("should return error if user is other project admin", async () => {
            let response = await api
                .get(`/api/properties/${project0.id}`)
                .expect(200);

            const propertyOld = response.body[0];
            response = await api
                .put(
                    `/api/properties/${project0.id}/status/${response.body[0].id}`
                )
                .set("auth-token", login1.token)
                .send({ status: "sold" })
                .expect(403);
        });
    });
});
