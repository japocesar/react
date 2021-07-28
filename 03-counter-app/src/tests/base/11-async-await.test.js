import { getImagen } from '../../base/11-async-await';

describe('Pruebas de async, await y fetch', () => {
    test('Debe retornar la url de la imagen', async() => {
        const url =  await getImagen();
        expect(url.includes('https://')).toBe(true);
    });
});