var assert = require('assert');
const make = require('./src/index.js');



describe('Function recursion', () => {
    it('0', () => {
 

    	assert.equal( make(15)(34, 21, 666)(41)((a,b) => a+b), 777);
    })
    it('1', () => {
 

        assert.equal( make(15)(34, 21, 666)(41)((a,b) => a-b), -747);
    })
    it('2', () => {
        assert.equal( make(15)((a,b) => a+b), 15);
    })

    //некогда делать еще
});