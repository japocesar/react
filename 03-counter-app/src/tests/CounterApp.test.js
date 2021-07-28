import React from 'react';
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas en CounterApp', () => {

    let wrapper = shallow(<CounterApp />);
    beforeEach(() => {
        wrapper = shallow(<CounterApp />);
    });

    test('Debe mostrar <CounterApp /> correctamente', () => {
       expect(wrapper).toMatchSnapshot();
    });
    
    test('Debe mostrar el contador en 100 enviado por props', () => {
        const wrapper = shallow(<CounterApp value={100} />);
        const valorContador = wrapper.find('h2').text();
        expect(~~valorContador).toBe(100);
    });

    test('debe incrementar con el boton +1', () => {
        wrapper.find('button').at(0).simulate('click');
        const valorContador = wrapper.find('h2').text();
        expect(~~valorContador).toBe(11);
    });
    
    test('debe decrementar con el boton -1', () => {
        wrapper.find('button').at(2).simulate('click');
        const valorContador = wrapper.find('h2').text();
        expect(~~valorContador).toBe(9);
    });
    
    test('debe resetear el valor con el boton reset', () => {
        const wrapper = shallow(<CounterApp value={105} />);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const valorContador = wrapper.find('h2').text();
        expect(~~valorContador).toBe(105);
    })
    
});