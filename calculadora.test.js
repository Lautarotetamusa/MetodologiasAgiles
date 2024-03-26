const assert = require('assert');
const calculadora = require('./calculadora.js');

it('Sumar 2 + 2', function () {
    const a = 2;
    const b = 2;
    const result = 2 + 2;

    assert.equal(calculadora.sumar(a, b), result);
});

it('Multiplicar 5 * 2', function () {
    const a = 5;
    const b = 2;
    const result = 5 * 2;

    assert.equal(calculadora.multiplicar(a, b), result);
});

it('Multiplicar por 0', function () {
    const a = 0;
    const b = 2;
    const result = 0;

    assert.equal(calculadora.multiplicar(a, b), result);
});
