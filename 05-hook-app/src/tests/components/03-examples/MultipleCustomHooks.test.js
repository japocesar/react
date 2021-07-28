import React from 'react';
import { shallow } from 'enzyme';
import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Tests in MultipleCustomHooks', () => {

    useCounter.mockReturnValue({
        counter: 1,
        increment: () => {}
    });

    test('should display correctly', () => {
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        });
        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper).toMatchSnapshot();
    })

    test('should display the info', () => {
        useFetch.mockReturnValue({
            data: [{
                author: 'Cesar',
                quote: 'Testing'
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow(<MultipleCustomHooks />);

        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Testing');
        expect(wrapper.find('footer').text().trim()).toBe('Cesar');
    })
    
    
})