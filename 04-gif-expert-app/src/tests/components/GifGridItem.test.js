import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Tests in <GifGridItem />', () => {
    const title = 'Gif title';
    const url = 'gifUrl';
    const wrapper = shallow(<GifGridItem title={ title } url={ url } />);

    test('should display the component', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should have a paragraph with title', () => {
       const p = wrapper.find('p');
       expect( p.text().trim() ).toBe( title );
    })

    test('should have an img with alt and src', () => {
      const img = wrapper.find('img');
      expect( img.prop('src') ).toBe( url );
      expect( img.prop('alt') ).toBe( title );
    })

    test('should have a div with class animate__fadeIn', () => {
        const div = wrapper.find( 'div' );
        console.log(div.html())
        expect( div.prop('className') ).toContain('animate__fadeIn');
    })
    
    
})