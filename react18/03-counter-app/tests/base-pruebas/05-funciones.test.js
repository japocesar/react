import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"

describe('Tests in 05-funciones', () => { 
    test('getUser should return an object', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect( testUser ).toEqual( user );
    })

    test('getUsuarioActivo should return the active user', () => { 
        
        const name = "Cesar";
        const user = getUsuarioActivo( name );

        expect( user ).toEqual({
            uid: 'ABC567',
            username: name
        });
     })
 })