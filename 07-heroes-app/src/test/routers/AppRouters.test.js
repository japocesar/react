import { mount } from "enzyme";
import { AuthContext } from "../../auth/AuthContext";
import { AppRouter } from "../../routers/AppRouter"

describe('Tests in <AppRouters />', () => {

    test('should display login if not logged', () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: {
                logged: false
            }
        }

        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>    
                <AppRouter />
            </AuthContext.Provider>
        );
    })
    

})