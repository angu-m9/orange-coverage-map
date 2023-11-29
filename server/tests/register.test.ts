import  request  from "supertest";
import app from "../src/config/app"
import db from "../src/data/db";
import User from "../src/models/userModel";

describe("testing users register process", () => {
    let response: request.Response;
    const newUser = {
      user_name: "test",
      user_lastname: "test",
      company_id: 1,
      postal_code: "test",
    };
  
    
    beforeEach(async () => {
     
      await User.destroy({
        where: {
          user_name: newUser.user_name,
          user_lastname: newUser.user_lastname,
          company_id: newUser.company_id,
          postal_code: newUser.postal_code,
        }
      });
  
     
      response = await request(app)
        .post('/register')
        .send(newUser);
    });
  
    test('Should return a response with status 201 and type json, when I send a Post request', async () => {
      expect(response.status).toBe(201); 
      expect(response.headers['content-type']).toContain('json');
    });

    
  
    test("Should create a new user and an uuid at the same time", async () => {
      expect(response.body).toBeInstanceOf(Object);
      expect(response.body.user_id).toBeDefined(); 
    });
  

    afterEach(async () => {
      await User.destroy({
        where: {
          user_name: newUser.user_name,
          user_lastname: newUser.user_lastname,
          company_id: newUser.company_id,
          postal_code: newUser.postal_code,
        }
      });
    });
  
   
    afterAll(async () => {
      await db.close();
    });
  });
  
