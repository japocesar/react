import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Tests in custom hook useFetchGifs', ()=> {
    test('should return the initial state', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Metallica') );
        const { data, loading } = result.current;
        await waitForNextUpdate();

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
    })

    test('should return an array of img and set loading to false', async () => {
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Metallica') );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect( data.length ).toBe(10);
        expect( loading ).toBe(false);
    })
    
    
})