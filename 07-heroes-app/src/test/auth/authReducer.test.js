import { authReducer } from '../../auth/authReducer';
import { types } from '../../types/types';

describe('Tests in authReducer', () => {


    test('should return the state by default', () => {
        const state = authReducer({ logged: false }, {});
        expect( state ).toEqual({ logged: false });
    });

    test('should authenticate and set user name', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Cesar'
            }
        }
        const state = authReducer({ logged: false }, action);
        expect( state ).toEqual({ logged: true, name: 'Cesar' });
    })

    test('should delete user name and set logged in false', () => {
        const action = {
            type: types.logout
        }
        const state = authReducer({ logged: true, name: 'Cesar' }, action);
        expect( state ).toEqual({ logged: false });
    })
    
    
    
})