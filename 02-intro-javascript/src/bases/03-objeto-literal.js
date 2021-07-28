const persona = {
    nombre: 'César',
    apellido: 'Carrasco',
    edad: 32,
    direccion: {
        ciudad: 'Aguascalientes',
        zip: 20000,
        lat: 14.212,
        lng: 34.921,
    }
};

const persona2 = {...persona };
persona2.nombre = 'Peter';

console.log(persona);
console.table({ persona2 });