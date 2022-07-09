import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from "../../src/data/heroes";

describe('Tests in 09-promesas', () => { 
    test('getHeroeByIdAsync should return a heore', ( done ) => {
        const id = 1;
        getHeroeByIdAsync( id ).then( hero => {
            expect( hero ).toEqual( heroes.find( h => h.id === 1 ) );
            done();
        });
    })


    test('getHeroeByIdAsync should return an error if hero doesn exist', ( done ) => {
        const id = 100;
        getHeroeByIdAsync( id ).catch( error => {
            expect( error ).toBe( 'No se pudo encontrar el héroe ' + id );
            done();
        });
    })
 })