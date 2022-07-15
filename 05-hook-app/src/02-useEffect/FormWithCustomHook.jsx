import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";
import { Message } from "./Message";


export const FormWithCustomHook = () => {

    const {  formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

    return (
        <>
            <h1> Formulario Simple </h1>
            <hr/>

            <input
                type='text'
                className="form-control"
                placeholder="Username"
                name='username'
                value={username}
                onChange={onInputChange}
            />

            <input
                type='email'
                className="form-control mt-2"
                placeholder="melissa@gmail.com"
                name='email'
                value={email}
                onChange={onInputChange}
            />

            <input
                type='password'
                className="form-control mt-2"
                placeholder="Contraseña"
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Reset</button>

            {
                username === 'strider2' && <Message/>
            }
            
        </>
    )
}
