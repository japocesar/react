import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Tests in 02-template-string', () => { 
    test('getSaludo should return "Hola Cesar"', () => {
        const name = 'Cesar';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`)
     })
 })