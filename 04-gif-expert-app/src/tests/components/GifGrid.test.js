import React from 'react';
import { shallow } from 'enzyme';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Test in <GifGrid />', () => {
    const category = 'simpsons';

    test('should display the component', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category } />);
        expect( wrapper ).toMatchSnapshot();
    })

    test('should display items when gifs are loaded useFetchGifs ', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/folder/file.jpg',
            title: 'Cualquier imagen'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={ category } />);
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    })
    
    
})