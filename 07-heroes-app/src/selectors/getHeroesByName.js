import { heroes } from '../data/heroes';

export const getHeroesByName = ( name = '' ) => {
    const filteredHeroes = name !== '' 
        ? heroes.filter( hero => hero.superhero.toLowerCase().includes(name.toLowerCase()) )
        : [];
    return filteredHeroes;
}
