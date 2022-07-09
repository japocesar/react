import { render, screen, fireEvent } from '@testing-library/react';
import { CounterApp } from '../src/CounterApp';

describe('Tests in CounterApp', () => {
    const initialValue = 10;

    test('should match with snapshot', () => {
        const { container } = render(<CounterApp value={ initialValue } />);
        expect( container ).toMatchSnapshot();
    })

    test('should display the value 10', () => { 
        render(<CounterApp value={ 100 } />);
        expect( screen.getByText(100) ).toBeTruthy();
        // console.log( screen.getByRole('heading', { level: 2 }).innerHTML );
        // expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toBe( value.toString() );
     })

     test('should increment with button +1', () => {
        render(<CounterApp value={ initialValue } />);
        fireEvent.click( screen.getByText( "+1" ) );
        expect( screen.getByText('11') ).toBeTruthy();
     })

     test('should decrement with button -1', () => {
        render(<CounterApp value={ initialValue } />);
        fireEvent.click( screen.getByText( "-1" ) );
        expect( screen.getByText('9') ).toBeTruthy();
     })

     test('should reset with button "reset"', () => {
        render(<CounterApp value={ 355 } />);
        fireEvent.click( screen.getByText( "+1" ) );
        fireEvent.click( screen.getByText( "+1" ) );
        fireEvent.click( screen.getByText( "+1" ) );
        // screen.debug();
        // fireEvent.click( screen.getByText( "Reset" ) );
        fireEvent.click( screen.getByRole('button', { name: 'btn-reset' }) );
        // screen.debug();

        expect( screen.getByText( 355 ) ).toBeTruthy();
     })
})