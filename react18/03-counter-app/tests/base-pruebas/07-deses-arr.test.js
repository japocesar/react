import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('Tests in 07-deses-arr', () => {
    test('should return a number and a string', () => {
        const [letters, numbers] = retornaArreglo();
        
        expect( letters ).toBe('ABC');
        expect( numbers ).toBe(123);

        expect(typeof letters).toBe("string");
        expect(typeof numbers).toBe("number");

        expect( letters ).toEqual( expect.any(String) );
    })
})