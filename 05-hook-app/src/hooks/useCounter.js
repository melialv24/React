import { useState } from "react"


export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = ( value = 3 ) => {
        setCounter( counter + value )
    }

    const decrement = ( value = 3 ) => {

        if (counter === 0) return 

        setCounter( counter - value  )
    }

    const handleReset = () => {
        setCounter( initialValue )
    }

    return {
        counter,
        increment,
        decrement,
        handleReset
    }

}