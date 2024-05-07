const assert = require('assert');
const calculadora = require('./calculadora.js');

it('Vacio', function () {
    const cadena = ""
    const result = 0;

    assert.equal(calculadora.pepito(cadena), result);
});

it('Lleno', function () {
    const cadena = "1,2"
    const result = 3;

    assert.equal(calculadora.pepito(cadena), result);
});

it('\n', function () {
    const cadena = "1,2,4\n5,6"
    const result = 18;

    assert.equal(calculadora.pepito(cadena), result);
});

it('\n', function () {
    const cadena = "//;\n1;2;4;5;6"
    const result = 18;

    assert.equal(calculadora.pepito(cadena), result);
});

it('\n', function () {
    const cadena = "-5"
    const result = "No se permiten negativos -5";

    assert.equal(calculadora.pepito(cadena), result);
});

