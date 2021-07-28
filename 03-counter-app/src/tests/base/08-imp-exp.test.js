import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en 08-imp-exp.js', () => {
    test('Debe retornar un heroe por Id', () => {
        const id = 1;
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( h => h.id === id );

        expect(heroe).toEqual(heroeData);
    })

    test('Debe retornar undefined si heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    })

    test('Debe regresar un arreglo con los heroes de DC ', () => {
        const owner = 'DC';
        const heroesList = getHeroesByOwner(owner);
        const heroesDC = heroes.filter( h => h.owner === 'DC' );
        
        expect(heroesList).toEqual(heroesDC);
    })

    test('Deebe retornar un arreglo con los heroes de Marvel ', () => {
        const owner = 'Marvel';
        const heroesList = getHeroesByOwner(owner);
        // const heroesMarvel = heroes.filter( h => h.owner === 'Marvel' );

        expect(heroesList.length).toBe(2);
    })
    
    
})