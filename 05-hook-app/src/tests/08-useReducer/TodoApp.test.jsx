import { useTodos } from '../../hooks/useTodos'
import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../08-useReducer/TodoApp'

jest.mock('../../hooks/useTodos')

describe('Pruebas en TodoApp', () => {

    useTodos.mockReturnValue({
        todos:[
            {id:1, description: 'id 1', done: false},
            {id:2, description: 'id 2', done: true}
        ],
        todosCount: 2, 
        pendingTodosCount: 1, 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn(),  
        handleNewTodo: jest.fn(), 
    })

    test('debe de mostrar el componente correctamente', () => {

        render(<TodoApp/>)

        expect( screen.getByText('id 1')).toBeTruthy()

    })
})