import { shallow } from 'enzyme';
import React from 'react';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from "../../fixtures/demoTodos";

describe('Tests in <TodoList />', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    const wrapper = shallow(
        <TodoList 
            todos = { demoTodos }
            handleToggle = { handleDelete }
            handleDelete = { handleToggle }
        />
    );

    test('should display the component', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('should display the number of items as 2 <TodoListItem />', () => {
        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );
        expect( wrapper.find('TodoListItem').at(0).prop('handleToggle') ).toEqual( expect.any(Function) );
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
    })
    
    
})