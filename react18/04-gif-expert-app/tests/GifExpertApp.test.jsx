import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Tests in <GifExpertApp />', () => { 

    test('should match with snapshot', () => { 
        const { container } = render( <GifExpertApp /> );
        expect( container ).toMatchSnapshot();
    });

    test('should return the initial state with Loading label', () => {
        render( <GifExpertApp /> );
        expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toBe('Loading ...');
    })

    // test('should display images after form is submitted', () => {
    //     render( <GifExpertApp /> );
    //     const form = screen.getByRole('form');
    //     fireEvent.submit(form);
    // })
 })