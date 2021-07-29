import { mount } from 'enzyme';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRoutes } from '../../routers/DashboardRoutes';

describe('Tests in <DashboardRoutes />', () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: {
            logged: true,
            name: 'Cesar'
        }
    }

    test('should display the component', () => {
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>   
                <MemoryRouter>
                    <DashboardRoutes />
                </MemoryRouter> 
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.text-info').text().trim()).toBe('Cesar');
    })
    
})