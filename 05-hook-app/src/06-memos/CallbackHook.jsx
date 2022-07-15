import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    const incrementF = useCallback(
        () => {
            setCounter( (counter) => counter + 1)
        },
        [],
    )
    
    return (
        <>
            <h1> useCallback Hook: {counter} </h1>
            <hr/>

            <ShowIncrement increment={ incrementF } />
        </>
    )
}

//useCallback sirve para memorizar funciones y regresa uan función que yo puedo utilizar, esa función memorizada solo se va a volver a procesar cuando algo cambia 