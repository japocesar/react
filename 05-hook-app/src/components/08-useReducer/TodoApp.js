import React, { useReducer, useEffect } from 'react';
import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './styles.css';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    /* Handlers */
    const handleDelete  = ( id ) => {
        const actionDelete = {
            type: 'delete',
            payload: id
        }
        dispatch( actionDelete );
    }

    const handleToggle = (id) => {
        const action = {
            type: 'toggle',
            payload: id
        }
        dispatch( action );
    }

    const handleAddTodo = ( newTodo ) => {
        dispatch({
            type: 'add',
            payload: newTodo
        });
    }

    return (
        <div>
            <h1>Todo App ( {todos.length} )</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* TodoList, ( todos, handleDelete, handleToggle ) */}
                    <TodoList
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />
                </div>

                <div className="col">
                    <TodoAdd
                        handleAddTodo={ handleAddTodo }    
                    />
                </div>
            </div>
            
        </div>
    )
}
