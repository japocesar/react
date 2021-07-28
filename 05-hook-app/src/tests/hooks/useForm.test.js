import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Tests in useForm', () => {
    const initialForm = {
        name: 'Cesar',
        email: 'test@test.com'
    };

    test('should return a default form', () => {
        const { result } = renderHook(() => useForm( initialForm ));
        const [ values, handelInputChange, reset  ] = result.current;
        
        expect( values ).toEqual({ name: 'Cesar', email: 'test@test.com' });
        expect( typeof handelInputChange ).toBe('function');
        expect( typeof reset ).toBe('function');
    })

    test('should change the form values ( name )', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handelInputChange,  ] = result.current;
        const obj = { target: { name: 'name', value: 'Octavio' } };
        act(() => handelInputChange(obj))
        const [ values ] = result.current;

        expect( values ).toEqual({...initialForm, name:'Octavio'});
    })

    test('should restore the form with RESET', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [ , handelInputChange, reset] = result.current;
        const obj = { target: { name: 'name', value: 'Octavio' } };
        act(() => {
            handelInputChange(obj);
            reset();            
        })
        const [ values ] = result.current;

        expect( values ).toEqual(initialForm);
    })
    
    
    
})