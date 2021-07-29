import React from 'react';
import { mount } from "enzyme";
import { HeroScreen } from '../../../components/heroes/HeroScreen';
import { MemoryRouter, Route } from 'react-router-dom';

describe('Tests in <HeroScreen />', ()=>{

    const history = {
        length: 10,
        goBack: jest.fn(),
        push: jest.fn()
    }

    

    test('should display the component redirect if no arguments in url', () => {

        const wrapper =  mount(
            <MemoryRouter initialEntries={ ['/hero'] }>
                <HeroScreen history={ history } />
            </MemoryRouter>
        );

        expect( wrapper.find('Redirect').exists() ).toBe(true);
    })


    test('should display a hero if parameter is fine', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-wolverine'] }>
                <Route path="/hero/:heroId" component={ HeroScreen } />
            </MemoryRouter>
        );
        
        expect( wrapper.find('.row').exists() ).toBe(true);
    })

    test('should return to the last screen with PUSH', () => {
        const history = {
            length: 1,
            goBack: jest.fn(),
            push: jest.fn()
        }

        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-wolverine'] }>
                <Route 
                    path="/hero/:heroId"
                    component={ () => <HeroScreen history={ history } /> } />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect( history.push ).toHaveBeenCalledWith('/');
        expect( history.goBack ).not.toHaveBeenCalled();
    })
    

    test('should return to the last screen with GOBACK', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-wolverine'] }>
                <Route 
                    path="/hero/:heroId"
                    component={ () => <HeroScreen history={ history } /> } />
            </MemoryRouter>
        );

        wrapper.find('button').prop('onClick')();
        expect( history.push ).toHaveBeenCalledTimes(0);
        expect( history.goBack ).toHaveBeenCalled();
    })

    test('should trigger redirect if hero doesnt exist', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={ ['/hero/marvel-wolverine12'] }>
                <Route 
                    path="/hero/:heroId"
                    component={ () => <HeroScreen history={ history } /> } />
            </MemoryRouter>
        );

        expect( wrapper.text() ).toBe('');
    })
    
    
    

})