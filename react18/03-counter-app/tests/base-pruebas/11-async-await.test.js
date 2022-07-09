import { getImagen } from "../../src/base-pruebas/11-async-await";



describe('Tests in 11-async-await', () => {
    const api = 'EydFPR5UdsfsKYBPHyllnuE1jhd55EeP';

    test('getImagen should return the image url', async() => {
        const url = await getImagen(api);
        console.log(url)
        expect( typeof url ).toBe('string');
    })

    test('getImagen should return an error message', async() => {
        const url = await getImagen( `${ api }s` );
        console.log(url);
        expect( url ).toBe('Image not found');
    })
})