import React from 'react'
import { mount } from "enzyme";
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router-dom';

describe('Tests in >PrivateRoute />', () => {

    const props = {
        location: {
            pathname: '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();

    test('should display the component if is logged and save localStorage', () => {

        const wrapper = mount(
            <MemoryRouter>  
                <PrivateRoute
                    isAuthenticated={ true } 
                    component={ () => <span>Ready!</span> } 
                    {...props}
                />
            </MemoryRouter>
        );

        expect( wrapper.find('span').exists() ).toBe(true);
        expect( localStorage.setItem ).toHaveBeenCalledWith( 'lastPath', '/marvel' )
    })

    test('should block the component if auth is false', () => {
        const wrapper = mount(
            <MemoryRouter>  
                <PrivateRoute
                    isAuthenticated={ false } 
                    component={ () => <span>Ready!</span> } 
                    {...props}
                />
            </MemoryRouter>
        );
        expect( wrapper.find('span').exists() ).toBe(false);
    })
    
    
})
