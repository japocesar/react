import { getHeroById } from './08-imp-exp';

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        // Tarea
        // Importar getHeroeById
        const heroe = getHeroById(2);
        resolve(heroe);
        // reject('No se pudo completar');
    }, 2000);
});

promesa.then((heroe) => {
        console.log(heroe);
    })
    .catch((err) => console.warn(err)); */


const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroById(id);
            heroe ? resolve(heroe) : reject(`No existe el heroe con el id ${id}`);
            // resolve(heroe);
        }, 2000);
    });

    // return promesa;
};

getHeroeByIdAsync(2)
    // .then(heroe => console.log('Heroe ', heroe))
    // .catch(err => console.warn(err));
    .then(console.log)
    .catch(console.warn);