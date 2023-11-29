import  request  from "supertest";
import { app } from "../src/config/app";
import db from "../src/data/db";

describe("testing users register process", () => {
    let response : request.Response;
    describe("GET companies from Companies Table", () => {
        beforeEach(async () => {
            response = await request(app).get('/companies').send();
        })
        test('Should return a response with status 200 and type json, when I send a Get request', async() => {
               
            expect(response.status).toBe(200);
            expect(response.headers['content-type']).toContain('json');

        })
        test("Should return all Companies",async() => {
            
            expect(response.body).toBeInstanceOf(Object);
                 
        }) 
    })
    afterAll(async () => {db.close()})
})