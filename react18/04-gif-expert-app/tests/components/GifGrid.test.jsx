import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Tests in <GifGrid />', () => {

    const category = 'One Punch';

    test('should display the loading', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        });

        render( <GifGrid category={ category } /> );
        expect( screen.getByText('Loading ...') );
        expect( screen.getByText( category ) );
     })

     test('should display items when useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        });
        render( <GifGrid category={ category } /> );

        // screen.debug();
        expect( screen.getAllByRole('img').length ).toBe(2);
      })
})