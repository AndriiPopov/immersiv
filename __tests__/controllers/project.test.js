const bcrypt = require("bcrypt");
const supertest = require("supertest");
const app = require("../../app");
const api = supertest(app);
const jwt = require("jsonwebtoken");
const adminModel = require("../../models/admin.model");
const sequelize = require("../../database/sequelize");

let adminAuth = {};

beforeAll(async () => {
    try {
        await sequelize.sync({ force: true });
        const hashedPassword = await bcrypt.hash("secret", 1);

        // admin account
        await adminModel.create({
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
    } catch (error) {
        console.log(error);
    }
});

afterAll(async () => {
    await sequelize.close();
});

const projectData0 = {
    url: "new-building",
    projectId: "a1b2",
    modelId: "c3d4",
    logo: "image",
    name: "New building",
};

const projectData1 = {
    url: "new-building1",
    projectId: "a1b21",
    modelId: "c3d41",
    logo: "image1",
    name: "New building1",
};

const projectData2 = {
    url: "new-building2",
    projectId: "a1b22",
    modelId: "c3d42",
    logo: "image2",
    name: "New building2",
};

const projectData01 = {
    url: "new-building0",
    projectId: "a1b220",
    modelId: "c3d420",
    logo: "image20",
    name: "New building20",
    published: true,
    featured: true,
};
const projectData02 = {
    url: "new-building0",
    projectId: "a1b220",
    modelId: "c3d420",
    logo: "image20",
    name: "New building20",
    published: false,
    featured: true,
};
describe("Project", () => {
    describe("Add new project", () => {
        it("should create a new project if user is an admin", async () => {
            let response = await api
                .post("/api/projects")
                .send(projectData0)
                .expect(200)
                .set("auth-token", adminAuth.token);

            expect(response.body).toHaveLength(1);
            expect(response.body[0]).toMatchObject(projectData0);

            response = await api
                .post("/api/projects")
                .send(projectData1)
                .expect(200)
                .set("auth-token", adminAuth.token);
            expect(response.body).toHaveLength(2);
            expect(response.body[1]).toMatchObject(projectData1);

            response = await api
                .post("/api/projects")
                .send(projectData2)
                .expect(200)
                .set("auth-token", adminAuth.token);
            expect(response.body).toHaveLength(3);
            expect(response.body[2]).toMatchObject(projectData2);

            await api
                .post("/api/projects")
                .send(projectData0)
                .expect(500)
                .set("auth-token", adminAuth.token);

            await api
                .post("/api/projects")
                .send({ ...projectData0, url: undefined })
                .expect(500)
                .set("auth-token", adminAuth.token);
        });

        it("should not create a new project if user is not an admin", async () => {
            await api.post("/api/projects").send(projectData0).expect(401);
        });
    });

    describe("Get project by id", () => {
        it("should return a project", async () => {
            const response = await api
                .get(`/api/projects/new-building`)
                .expect(200);

            expect(response.body).toMatchObject(projectData0);
        });
        it("should return 404 if no project", async () => {
            await api.get(`/api/projects/dsfdsfsd`).expect(404);
        });
    });

    describe("Get all projects", () => {
        it("should return all project in database if user is an admin", async () => {
            const response = await api
                .get("/api/projects")
                .expect(200)
                .set("auth-token", adminAuth.token);

            expect(response.body).toHaveLength(3);
        });
        it("should not return all projects in database if user is not an admin", async () => {
            await api.get("/api/projects").expect(401);
        });
    });

    describe("Update project", () => {
        it("should update a project if user is an admin", async () => {
            let response = await api
                .put(`/api/projects/new-building`)
                .set("auth-token", adminAuth.token)
                .send(projectData01)
                .expect(200);
            expect(response.body).toHaveLength(3);
            expect(response.body[2]).toMatchObject(projectData01);

            response = await api
                .put(`/api/projects/new-building0`)
                .set("auth-token", adminAuth.token)
                .send(projectData02)
                .expect(200);
            expect(response.body).toHaveLength(3);
            expect(response.body[2]).toMatchObject(projectData02);
        });

        it("should return error if user is not authorized", async () => {
            await api
                .put(`/api/projects/new-building`)
                .send(projectData01)
                .expect(401);
        });
        it("should return error if project is not found", async () => {
            await api
                .put(`/api/projects/sdfsdfds`)
                .send(projectData01)
                .expect(401);
        });
    });
    describe("get featured project", () => {
        it("should return a featured project", async () => {
            const response = await api
                .get(`/api/projects/__featured__`)
                .expect(200);

            expect(response.body.featured).toBeTruthy();
        });
    });

    describe("delete project", () => {
        it("should delete a project if user is an admin", async () => {
            const response = await api
                .delete(`/api/projects/new-building1`)
                .set("auth-token", adminAuth.token)
                .expect(200);
            expect(response.body).toHaveLength(2);
        });

        // it("should not delete a featured project", async () => {
        //     await api
        //         .delete(`/api/projects/new-building0`)
        //         .set("auth-token", adminAuth.token)
        //         .expect(500);
        // });

        it("should return error if user is not authorized", async () => {
            await api.delete(`/api/projects/new-building0`).expect(401);
        });
    });
});
