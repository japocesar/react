import React from 'react'
import { mount } from 'enzyme';
import { HomeScreen } from '../../components/09-useContext/HomeScreen';
import { UserContext } from '../../components/09-useContext/UserContext';

describe('Tests in <HomeScreen />', () => {
    const user = {
        name: 'Cesar',
        email: 'test@test.com'
    }
    const wrapper = mount(
        <UserContext.Provider value={{
            user,
        }}>
            <HomeScreen />
        </UserContext.Provider>
    );

    test('should display the component', () => {
        expect( wrapper ).toMatchSnapshot();
    })
    
})