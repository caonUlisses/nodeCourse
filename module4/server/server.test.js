const request = require('supertest');
let app       = require('./server').app;
const expect  = require('expect');

describe('Server', () => {

    describe('GET /', () => {
        it('Should return Hello World', (done) => {
            request(app)
                .get('/')
                .expect('Hello World')
                .end(done)
        });
    });
    
    describe('GET /users', () => {
        it('Should return a list of users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Silvia',
                        age : 24
                    });
                })
                .end(done)
        });
    });

});
