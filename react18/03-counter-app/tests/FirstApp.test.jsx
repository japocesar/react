import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Tests in FirstApp', () => {
    // test('should match with snapshot', () => {
    //     const title = "I'm Batman";
    //     const { container } = render( <FirstApp title={ title } /> );

    //     expect( container ).toMatchSnapshot();

    // })

    test('should display the title in an h1', () => { 
        const title = "I'm Batman";
        const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );
        expect( getByText(title) ).toBeTruthy();

        // const h1 = container.querySelector('h1');
        // expect( h1.innerHTML ).toContain( title );
        // expect( h1 ).toBeTruthy();

        expect( getByTestId('test-title').innerHTML ).toContain( title );
     })

     test('should display the subtitle sent by props', () => { 
        const title = "I'm Batman";
        const subtitle = 'This is a subtitle';
        const { getByText } = render( 
            <FirstApp 
                title={ title } 
                subtitle= { subtitle }    
            /> 
        );
        
        expect( getByText( subtitle ) ).toBeTruthy();
      })
})