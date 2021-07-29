import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Tests in <SearchScreen />', () => {

    test('should display the component wih values by default', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search'] }>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.alert-info').text().trim() ).toBe('Search a hero');

    })


    test('should display the component wih a hero if url has params', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=batm'] }>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe('batm');

    })


    test('should display the component wih a hero if url has wrong params', () => {
        
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=batm1'] }>
                <Route path="/search" component={ SearchScreen } />
            </MemoryRouter>
        );

        expect( wrapper.find('input').prop('value') ).toBe('batm1');
        expect( wrapper.find('.alert').exists() ).toBe(true);

    })


    test('should trigger the history push fn', () => {
        
        const history = {
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/search?q=batm'] }>
                <Route 
                    path="/search" 
                    component={ () => <SearchScreen history={ history } /> } />
            </MemoryRouter>
        );

        wrapper.find('input').simulate('change', {
             target: {
                 name: 'searchText',
                 value: 'batman'
             }
        });

        wrapper.find('form').prop('onSubmit')({
            preventDefault(){}
        });

        expect( history.push ).toHaveBeenCalledWith(`?q=batman`);

    })
    

})