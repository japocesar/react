import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Tests in todoReducer', () => {

    test('should return thhe default state', () => {
        const state = todoReducer(demoTodos, {});

        expect( state ).toEqual( demoTodos );
    })
    
    test('should add a new todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Jest',
            done: false
        };
        const addAction = {
            type: 'add',
            payload: newTodo
        };
        const state = todoReducer(demoTodos, addAction);
        
        expect( state.length ).toBe(3);
        expect( state ).toEqual([...demoTodos, newTodo])
    })

    test('should delete a todo', () => {
        const actionDelete = {
            type: 'delete',
            payload: 1
        }
        const state = todoReducer( demoTodos, actionDelete );
        expect( state.length ).toBe(1);
        expect( state ).toEqual( [demoTodos[1]] );
    })

    test('should toggle a todo', () => {
        const actionToggle = {
            type: 'toggle',
            payload: 1
        }
        const state = todoReducer(demoTodos, actionToggle);
        expect( state[0].done ).toBe(true);
        expect( state[1] ).toEqual( demoTodos[1] );
    })
    
    
    
})