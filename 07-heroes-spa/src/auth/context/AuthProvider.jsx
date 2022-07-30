import { useReducer } from "react"
import { types } from '../types/types'
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"

const initialState = {
    logged: false
}

export const AuthProvider = ({ children }) => {

    // la función de inicialización se encarga de establecer las propiedades iniciales
    const init = () => {
        const user = JSON.parse(localStorage.getItem('user'))

        return{
            logged: !!user,
            user: user
        }
    }

    const [authState, dispatch] = useReducer( authReducer, {} , init  )

    const onLogin = ( name= '' ) => {

        const user = {id:'ABC', name }
        
        const action = {
            type: types.login,
            payload: user
        }

        localStorage.setItem('user', JSON.stringify(user) )

        dispatch(action)
    }

    const onLogout = () => {
        
        localStorage.removeItem('user')
        const action = {
            type: types.logout
        }
        dispatch(action)
    }

    return (
        <AuthContext.Provider value={{ logout: onLogout ,login: onLogin, ...authState }}>
            { children }
        </AuthContext.Provider>
    )
}
