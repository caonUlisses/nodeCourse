const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app');

describe('App', () => {
    let db = {
        saveUser: expect.createSpy()
    };
    app.__set__("db", db);

    it('Should call the spy correctly', () => {
        let spy = expect.createSpy();
        spy('Ulisses', 23);
        expect(spy).toHaveBeenCalledWith('Ulisses', 23);
    });

    it('Should call saveUser with user object', () =>{
        let email = 'ulissescaon@gmail.com';
        let password = '1234';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    })
});