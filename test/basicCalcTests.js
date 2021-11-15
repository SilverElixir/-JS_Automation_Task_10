const assert = require('chai').assert;
const calculate = require('../basicCalc').calculator;

describe('Basic Calculator (positive tests)', () => {
    it('test add operation - positive numbers', async () => {
        assert.equal(calculate(100, 23, '+'), 123, 'Add operation is broken');
    }),
    it('test subtract operation - positive numbers', async () => {
        assert.equal(calculate(215, 76, '-'), 139, 'Subtract operation is broken');
    }),
    it('test divide operation - positive numbers', async () => {
        assert.equal(calculate(123, 3, '/'), 41, 'Divide operation is broken');
    }),
    it('test multiply operation - positive numbers', async () => {
        assert.equal(calculate(7, 15, '*'), 105, 'Multiply operation is broken');
    }),
    it('test add operation - negative numbers', async () => {
        assert.equal(calculate(100, -23, '+'), 77, 'Add operation is broken');
    }),
    it('test subtract operation - negative numbers', async () => {
        assert.equal(calculate(134, -146, '-'), 280, 'Subtract operation the negative number is broken');
    }),
    it('test divide operation - negative numbers', async () => {
        assert.equal(calculate(-81, -9, '/'), 9, 'Divide operation with negative numbers is broken');
    }),
    it('test multiply operation - negative numbers', async () => {
        assert.equal(calculate(-17, 9, '*'), -153, 'Multiply operation with negative number is broken');
    })
}
);

describe('Basic Calculator (negative tests)', () => {
    it('break add operation - number + text', async () => {
        assert.equal(calculate(100, 'twenty three', '+'), 'a and b should be numbers only. Please try again',
        'Handling non-number (string text) case is broken');
    }),
    it('break subtract operation - number + number as string', async () => {
        assert.equal(calculate(100, '23', '-'), 'a and b should be numbers only. Please try again',
        'Handling non-number (number as string) case is broken');
    }),
    it('test subtract operation - non-default sign', async () => {
        assert.equal(calculate(215, 76, '?'), `Please provide on of the signs: + (add), - (subtract), * (multiply) or '/ (divide)`, 
        'Handling of non-default calculator sign case is broken');
    }),
    it('break divide operation - cannot divide by 0', async () => {
        assert.equal(calculate(27, 0, '/'), `ArithmeticError: You can't divide by 0. Please provide another number`, 
        'Divide operation is broken');
    })
}
);