import { getGifs }  from '../../helpers/getGifs';

describe('Tests in getGifs helper', () => {
    test('should return 10 elements', async () => {
        const gifs = await getGifs('Simpsons');
        expect( gifs.length ).toBe(10);
    })

    test('should return an empty array if category is not providen', async () => {
        const gifs = await getGifs('');
        expect( gifs.length ).toBe(0);
    })
    
    
})