const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [, p2] = personajes;
console.log(p2);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//Tarea
// 1. nombre
// 2. setNombre
const useState = (valor) => {
    return [valor, () => console.log('Hola Mundo')];
}

// const arr = useState('Goku');
const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();