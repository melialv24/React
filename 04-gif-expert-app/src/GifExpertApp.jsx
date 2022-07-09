import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Amor', 'Peluches'])
    const onAddCategory = () => {
        setCategories([...categories, 'valorant'])
    }

    return (
        <>
            {/** Titulo */}
            <h1> GifExpertApp </h1>

            {/** Input */}
            <AddCategory />

            {/** Listado de Gif */}
            <button onClick={onAddCategory()}> Agregar </button>
            <ol>
                { categories.map( (categoria, i) => {
                        return <li key={ catgoria }> {categoria} </li>
                    })
                }
            </ol>
                {/** Gif Item */}
        </>
    )
}
