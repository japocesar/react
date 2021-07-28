import { useCounter } from '../../hooks/useCounter';
import { renderHook, act } from '@testing-library/react-hooks';

describe('Tests in useCounter', ()=> {
    test('should return default values', () => {
        const { result } = renderHook(() => useCounter()); //10
        expect( result.current.counter ).toBe(10);
        expect( typeof result.current.increment ).toBe('function');
        expect( typeof result.current.decrement ).toBe('function');
        expect( typeof result.current.reset ).toBe('function');
    })

    test('should return 100 as counter', () => {
        const { result } = renderHook(() => useCounter(100));
        expect( result.current.counter ).toBe(100);
    })

    test('should increment counter', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { increment } = result.current;
        act( () => increment() );

        const { counter } = result.current;
        expect(counter).toBe(101);
    })

    test('should decrement counter', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;
        act( () => decrement() );

        const { counter } = result.current;
        expect(counter).toBe(99);
    })

    test('should reset counter', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { increment, reset } = result.current;
        act( () => {
            increment();
            reset();
        });

        const { counter } = result.current;
        expect(counter).toBe(100);
    })
    
    
})