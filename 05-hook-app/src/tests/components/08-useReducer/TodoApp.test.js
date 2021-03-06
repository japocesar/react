import React from 'react';
import { mount, shallow } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from 'react-dom/test-utils';


describe('Tests in <TodoApp />', () => {
    const wrapper = shallow(<TodoApp />);
    Storage.prototype.setItem = jest.fn();

    test('should display the component', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should add a TODO', () => {
        const wrapper = mount( <TodoApp /> );
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
            wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[1] );
        })

        expect( wrapper.find('h1').text().trim() ).toBe( `Todo App ( 2 )` );
        expect( localStorage.setItem ).toHaveBeenCalledTimes(2);
    })

    test('should remove a TODO', () => {
        wrapper.find('TodoAdd').prop('handleAddTodo')( demoTodos[0] );
        wrapper.find('TodoList').prop('handleDelete')( demoTodos[0].id );
        
        expect( wrapper.find('h1').text().trim() ).toBe( `Todo App ( 0 )` );
    })
    
    
    
})