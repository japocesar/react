//Desestructuracion

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const useContext = ({ nombre, edad, clave, rango = 'Capitán' }) => {
    // console.log(nombre, edad, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.134,
            lng: -12.3443,
        }
    }
}

const avenger = useContext(persona);

const { nombreClave, anios, latlng: { lat, lng } } = useContext(persona);

// console.log(avenger)
console.log(nombreClave, anios);
console.log(lat, lng)