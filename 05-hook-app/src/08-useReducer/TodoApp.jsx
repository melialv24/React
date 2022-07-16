import { useEffect } from "react"
import { useReducer } from "react"
import { TodoAdd } from "../components/TodoAdd"
import { TodoList } from "../components/TodoList"
import { todoReducer } from "./todoReducer"



export const TodoApp = () => {

    const initialState = [
        /*{
            id: new Date().getTime(),
            description: 'recolectar el peñon del alma',
            done: 'false'
        }*/
    ]

    const init = () => {
        return JSON.parse(localStorage.getItem('todos') || [])
    } 

    const [todos , dispatch]  = useReducer( todoReducer , initialState, init )

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify( todos ))
    },
    [todos])

    const handleNewTodo = ( todo ) => {

        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action )
    }

    return (
        <>

            <h1> TodoApp: 10, <small> pendientes: 2 </small> </h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos}/>
                </div>
            </div>

            <div className="col-5">
                <h4> Agregar Todo </h4>
                <hr/>

                <TodoAdd onNewTodo={ handleNewTodo } />
            </div>

        </>
    )
}
