//Funciones

const saludar = function(nombre) {
    return `Hola ${nombre}`;
}

const saludar2 = nombre => `Hola ${nombre}`;

console.log(saludar2('Cesar'));


//Si return es un objeto
const getUser = () => ({
    uid: 'ABC123',
    username: 'japosai',
});

console.log(getUser());

//Tarea
// * Arrow Fn
// Retorna obj
const getUsuarioActivo = (nombre) => ({
    uid: '567',
    username: nombre,
});

const usuarioActivo = getUsuarioActivo('Octavio');
console.log(usuarioActivo)