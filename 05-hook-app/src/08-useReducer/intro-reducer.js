const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del alma',
    done: 'false'
}]


// los reducer reciben dos argumentos, el estado y la acción, la cción indica como queremos que cambie el estado 
const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }

    return state
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del alma',
    done: 'false'
}

// Aquí creamos la acción que queremos que ejecute, el type es la acción que queremos que realice
// y el payload es el nuevo estado que le queremos agregar 
const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}


// el primer argumento es el estado actual
todos = todoReducer( todos, addTodoAction )

console.log({ state: todos })