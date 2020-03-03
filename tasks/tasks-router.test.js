//require('dotenv').config();

//console.log(process.env.TOKEN)

const request = require("supertest");

const server = require("../api/server");

describe('Tasks Router', function(){
    it('should run the tests', function(){
        expect(true).toBe(true);
    })

    let token;
    describe('List users tasks', function(){
        it('Should return tasks after login', function(){
            return request(server)
            .post('/api/auth/login')
            .send({ username:"izzy@lambda.com", password:"secure" })
            .then(res => {
                token = res.body.token
                return request(server)
                .get('/api/tasks/')
                .set({authorization:token})
                .then(res => {
                    expect(res.type).toMatch(/json/)
                })
            })
        })
    })
})