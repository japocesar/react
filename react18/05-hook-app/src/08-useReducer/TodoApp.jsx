import { useTodo } from "../hooks";
import { TodoList, TodoAdd } from "./components";

/*
    Homework:
    * Todo List -> ul
    * TodoItem -> foreach item
    * TodoAdd -> form
*/

//const initialState = [
// {
//     id: new Date().getTime(),
//     description: 'Get the Soul Stone',
//     done: false,
// },
//];

// const init = () => {
//     return JSON.parse( localStorage.getItem('todos') ) || []; // If null then return an empty array
// }

export const TodoApp = () => {

    // const [todos, dispatch] = useReducer( todoReducer, initialState, init );
    const { todos, onNewTodo, onDeleteTodo, onToggleTodo, todosCount, pendingTodosCount } = useTodo();

    return (
        <>
            <h1>Todo App  { todosCount }, <small>To Do: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={ todos }  onDeleteTodo={ onDeleteTodo }  onToggleTodo={ onToggleTodo } />
                </div>
                <div className="col-5">
                    <h4>Add TODO</h4>
                    <hr />
                    
                    <TodoAdd onNewTodo={ onNewTodo } />

                </div>
            </div>

        </>
    )
}
