const expect = require('expect');
const utils  = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('Should add two numbers', () => {
            let res = utils.add(33, 11);
            
            expect(res).toBe(44).toBeA('number');
        });
        
        it('Should add two numbers async', (done) => {
            utils.asyncAdd(4, 3, (sum) => {
                expect(sum).toBe(7).toBeA('number');
                done();
            })
        });
    });

    describe('#square', () => {
        it('Should square a number', () => {
            let res = utils.square(2);
        
            expect(res).toBe(4).toBeA('number');
        });

        it('Should square a number async', (done) => {
            utils.asyncSquare(3, (sqr) => {
                expect(sqr).toBe(9);
                done();
            })
        });
    });
    
    it('Should verify first and last names are set', () => {
        let user = {
            age : 23
        };
    
        let res  = utils.setName(user, 'Ulisses Caon');
    
        expect(res).toInclude({
            firstName: 'Ulisses',
            lastName : 'Caon'
        });
    });
    
    
});