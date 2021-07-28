const nombre = 'Cesar';
const apellidos = 'Carrasco';

const nombreCompleto = `${nombre} ${apellidos}`;
console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombreCompleto)}`)