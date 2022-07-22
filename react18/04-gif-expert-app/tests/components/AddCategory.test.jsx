import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Tests in <AddCategory />', () => {
    test('should match with snapshot', () => {
        const { container } = render( <AddCategory onNewCategory={ () => {} } /> );
        expect( container ).toMatchSnapshot();
    })

    test('should change the input value', () => { 
        render( <AddCategory onNewCategory={ () => {} } /> );
        const input = screen.getByRole('textbox');
        
        fireEvent.input( input, { target: { value: 'Saitama' } } );
        expect( input.value ).toBe('Saitama');
        // screen.debug();
     })

     test('should call onNewCategory if input has value', () => { 
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( input.value ).toBe(''); 

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
      })

      test('should not call onNewCategory if inputValue is empty', () => {
        const inputValue = 'a';
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue } } );
        fireEvent.submit( form );

        expect( onNewCategory ).not.toHaveBeenCalled();

      })
})