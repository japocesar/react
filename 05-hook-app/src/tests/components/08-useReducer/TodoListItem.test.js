import { shallow } from 'enzyme';
import React from 'react';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Tests in <TodoListItem />', () => {
    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow(
        <TodoListItem
            todo = { demoTodos[0] }
            index = { 0 }
            handleDelete = { handleDelete }
            handleToggle = { handleToggle }
        />);

    test('should display the component', () => {
        expect( wrapper ).toMatchSnapshot();        
    });

    test('should call handleDelete', () => {
        wrapper.find('button').simulate('click');
        expect( handleDelete ).toHaveBeenCalledWith( demoTodos[0].id );
    })

    test('should call handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect( handleToggle ).toHaveBeenCalledWith( demoTodos[0].id );
    })

    test('should display the correct text', () => {
        expect( wrapper.find('p').text().trim() ).toBe( '1. Aprender React' );
    })
    
    test('should have the class "complete" if TODO.done is true', () => {
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(
            <TodoListItem
                todo = { demoTodos[0] }
                index = { 0 }
                handleDelete = { handleDelete }
                handleToggle = { handleToggle }
            />
        );

        expect( wrapper.find('p').hasClass('complete') ).toBe(true);
    })
      
})