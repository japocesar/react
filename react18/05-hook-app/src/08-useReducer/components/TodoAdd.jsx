import React, { useState } from 'react'
import { useForm } from '../../hooks';

export const TodoAdd = ({ onNewTodo }) => {

    // const [newTodo, setNewTodo] = useState('');
    const {  description, onInputChange, onResetForm } = useForm({
        description: ''
    });

    const onSubmit = (event) => {
        event.preventDefault();
        if ( description.trim().length < 3 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description,
        };

        onNewTodo && onNewTodo( newTodo );
        onResetForm();
    };


  return (
    <form onSubmit={ onSubmit }>
        <input
            type="text"
            placeholder="What's to do?"
            className="form-control"
            name="description"
            value={ description }
            onChange={ onInputChange }
        />

        <button
            type="submit"
            className="btn btn-primary mt-3"    
        >
            Add
        </button>
    </form>
  )
}
