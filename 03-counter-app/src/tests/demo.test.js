describe('Pruebas en archivo demo.test.js', () => {
    test('deben ser iguales los strings', () => {
        //Inicializacion
        const mensaje = 'Hola mundo';
        
        //Estimulo
        const mensaje2 = `Hola mundo`;

        //Observar Comportamiento
        expect(mensaje).toBe(mensaje2);
    })
});
