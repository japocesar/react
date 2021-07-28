import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en 07-deses-arr', () => {
    test('debe retornar un arreglo con string y número', ()=> {
        // const arr = retornaArreglo();
        const [letras, numeros] = retornaArreglo();

        // expect(arr).toEqual(['ABC', 123]);
        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
    })
})