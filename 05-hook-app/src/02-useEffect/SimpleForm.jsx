import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {


    const [formState, setFormState] = useState({
        username: 'Melissa',
        email: 'melissaal@gmail.com'
    })

    const { username, email } = formState

    const onInputChange = ({target}) => {

        setFormState({
            ...formState, [target.name]: target.value
        })

    }

    useEffect(()=>{
        console.log('el form cambió')
    },[formState])

    return (
        <>
            <h1> Formulario Simple </h1>
            <hr/>

            <input
                type='text'
                className="form-control"
                placeholder="Username"
                name='username'
                value={formState.username}
                onChange={onInputChange}
            />

            <input
                type='email'
                className="form-control mt-2"
                placeholder="melissa@gmail.com"
                name='email'
                value={formState.email}
                onChange={onInputChange}
            />
            {
                username === 'strider2' && <Message/>
            }
            
        </>
    )
}
