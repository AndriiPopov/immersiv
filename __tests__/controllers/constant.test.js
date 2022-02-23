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

const data0 = { email: "lolo@mail.com", phone: "123", call: "345" };
const data1 = { email: "lolo2@mail.com", phone: "1232", call: "3452" };

describe("Constant", () => {
    describe("Update constant info", () => {
        it("should update constant if user is an admin", async () => {
            let response = await api
                .put("/api/constant")
                .send(data0)
                .set("auth-token", adminAuth.token)
                .expect(200);

            expect(response.body).toHaveLength(1);
            expect(response.body[0]).toEqual(data0);

            response = await api
                .put("/api/constant")
                .send(data1)
                .set("auth-token", adminAuth.token)
                .expect(200);

            expect(response.body).toHaveLength(1);
            expect(response.body[0]).toEqual(data1);
        });

        it("should not create a new admin if user is not an admin", async () => {
            await api.put("/api/constant").send(data0).expect(401);
        });
    });
});
