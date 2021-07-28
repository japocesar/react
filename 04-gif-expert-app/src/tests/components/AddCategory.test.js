import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Tests in <Add Category />', () => {
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    })

    test('should display the component', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should change input', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate('change', { target: { value: value } });
        expect( wrapper.find('p').text().trim() ).toBe( value );
    })

    test('should NOT post on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){}  });
        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('should call setCategories and clean the input', () => {
        const input = wrapper.find('input');
        const value = 'Hola mundo';
        input.simulate( 'change', { target: { value: value } } );
        wrapper.find('form').simulate('submit', { preventDefault(){} });
        // expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
        expect( input.prop('value') ).toBe('');
    })
    
    
    
    
})