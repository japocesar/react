import React from 'react';
import { shallow }  from 'enzyme';
import { GifExpertApp } from '../GifExpertApp';

describe('Tests in <GifExpertApp />', () => {
    test('should display the component', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect( wrapper ).toMatchSnapshot();
    });

    test('should display a categories list', () => {
        const categories = ['Simpsons', 'Wolverine'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
    
});