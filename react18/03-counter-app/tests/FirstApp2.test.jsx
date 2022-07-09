import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Tests in FirstApp', () => {
    const title = "I'm Batman";
    const subtitle = 'This is a subtitle';

    test('should match with snapshot', () => { 
        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();
    })

    test('should display the message "Im Batman"', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByText( title ) ).toBeTruthy();
        // screen.debug();
    })

    test('should display the title in an h1', () => {
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole('heading', { level: 1 }).innerHTML ).toContain( title );
    })

    test('should display the subtitle by props', () => { 
        render( 
            <FirstApp 
                title={ title } 
                subtitle= { subtitle }    
            /> 
        );
        expect( screen.getAllByText( subtitle ).length ).toBe(1);
     })
})