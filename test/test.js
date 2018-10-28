var assert = require('assert');
const recursion = require('../src/index.js');



describe('Function recursion', () => {
    it('0', () => {

        let tree = {
            "value": 100,
            "r": {
                "value": 123,
                "l": {
                    "value": 49
                },
                "r": {
                    "value": 13
                }
            },
            "l": {
                "value": 123,
                "l": {
                    "value": 12
                },
                "r": {
                    "value": 123,
                    "l": {
                        "value": 12
                    },
                    "r": {
                        "value": 123,
                        "l": {
                            "value": 12
                        }
                    }
                }
            }
        };

    	assert.deepEqual(recursion(tree), 
            [ [ 100 ],
        	  [ 123, 123 ],
        	  [ 49, 13, 12, 123 ],
        	  [ 12, 123 ],
        	  [ 12 ] 
            ]
        );
    })
    it('1', () => {
        let tree = {"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}};

        let array = recursion(tree);
        assert.deepEqual(array, [[100], [90, 120], [70,99,110,130]])
    })

    it('2', () => {
        let tree = {"value":100};

        let array = recursion(tree);
        assert.deepEqual(array, [[100]])
    })

    it('3', () => {
        let tree = {};

        let array = recursion(tree);
        assert.deepEqual(array, [])
    })

    it('4', () => {
        let tree = {"value": 1,"left":{"value": 2,"right":{"value":3}}};

        let array = recursion(tree);
        assert.deepEqual(array, [[1],[2],[3]])
    })
});