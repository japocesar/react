
const initialState = [{
    id: 1,
    todo: 'Get the Soul Stone',
    done: false,
}];


const todoReducer = ( state = initialState, action = {} ) => {

    switch (action.type) {
        case '[TODO] add todo':
            return [...state, action.payload];
            break;
    
        default:
            break;
    }
    
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Get the Power Stone',
    done: false,
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction );

console.log({ state: todos })