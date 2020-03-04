require('dotenv').config();

const request = require("supertest");

const server = require("../api/server");

//  Sanity Check >>>>>>>>
describe('Auth Router', function(){
    it('should run the tests', function(){
        expect(true).toBe(true);
    })

    //  2 POST requests >>>>>>>>
    describe('POST /api/auth/', function() {
        it('should return 500!', function() {
            return request(server)
            .post('/api/auth/register')
            .send({ username:"izzy@lambda.com", password:"secure" })
            .then(res => {
                expect(res.status).toBe(500)  
            })
        })

        it('should return 200', function(){
            return request(server)
            
            .post('/api/auth/login')
            .send({ username:"izzy@lambda.com", password:"secure" })
            .then(res => {
                expect(res.status).toBe(200)
                process.env.TOKEN = res.body.token
            })
        })
    })

})

