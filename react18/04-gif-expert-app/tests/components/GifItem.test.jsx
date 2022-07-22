import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('Tests in <GifItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

    test('should match snapshot', () => {
        const { container } = render( <GifItem title={ title } url={ url } /> );
        expect( container ).toMatchSnapshot();
    })

    test('should display the image with the given url and alt', () => {
        render(<GifItem url={ url } title={ title } /> );
        // screen.debug();
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('should display the title in the component', () => { 
        render( <GifItem title={ title } url={ url } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
     })
})