import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';

import PrimeraApp from '../PrimeraApp';

describe('Pruebas en PrimeraApp', () => {
    // test('Debe mostrar el mensaje "Hola, soy Goku"', () => {
    //     const saludo = 'Hola, soy Goku';
    //     const { getByText } = render( <PrimeraApp saludo={saludo} /> );
    //     // expect( getByText(saludo) ).toBeInTheDocument();
    // });

    test('debe mostrar <PrimeraAPP /> correctamente', () => {
        const saludo = 'Hola, mi nombre es Goku';
        const wrapper = shallow(<PrimeraApp saludo={saludo} />);

        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, mi nombre es Goku';
        const subtitulo = 'Test subtitle';
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );

        const textoParrafo = wrapper.find('p').text();
        expect(textoParrafo).toBe( 'subtitulo' );
    });
    
    
});