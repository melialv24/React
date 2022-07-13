import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({
    onNewCategory
}) => {

    const [ inputValue, setInputValue ] = useState('Amor') 

    const onInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if( inputValue.trim().length <= 1 ) return
        onNewCategory( inputValue.trim() )
        setInputValue('')
    }

    return (
        <form aria-label='form' onSubmit={ onSubmit }>
            <input
                type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange= {onInputChange}
            />
        </form>

    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired
}
