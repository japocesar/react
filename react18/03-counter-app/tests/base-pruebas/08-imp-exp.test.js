import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../../src/data/heroes';

describe('Tests in 08-imp-exp', () => {
    test('getHeroeById should return a heroe by Id', () => { 
        const id = 1;
        const hero = getHeroeById(id);
        
        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
     })

     test('getHeroeById should return undefined if id doesnt exist', () => { 
        const id = 100;
        const hero = getHeroeById(id);
        expect( hero ).toBeFalsy();
     })


     test('getHeroesByOwner should return an array with DC heroes', () => { 
        const owner = 'DC';
        const heroesTest = getHeroesByOwner(owner);

        expect( heroesTest.length ).toBe(3);

        expect( heroesTest ).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ])

          expect( heroesTest ).toEqual( heroes.filter( ( heroe ) => heroe.owner === 'DC' ))
      })

     test('getHeroesByOwner should return an array with Marvel heroes', () => {
        const owner = 'Marvel';
        const heroesTest = getHeroesByOwner(owner);

        expect( heroesTest ).toEqual( heroes.filter( ( heroe ) => heroe.owner === 'Marvel' ))
     })
})