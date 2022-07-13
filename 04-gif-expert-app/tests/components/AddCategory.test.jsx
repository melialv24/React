import { render, screen, fireEvent } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en AddCategory', () => {
    test('Debe de cambiar el valor de la caja de texto', () => { 

        render( <AddCategory onNewCategory={() => {}}/> )

        // Aquí tomo el input
        const input = screen.getByRole('textbox')

        // y aquí trabajo con el evento de ese input, el evento input recibe como parametro 
        //el elemento que va a recibir el evento
        // Como segundo parametro recibe evento que estaría recibiendo el componente
        fireEvent.input( input, { target: { value: 'saitama' }} )
    
        // Arriba solo estaba haciendo los eventos, ahora voy a decir lo que espero 
        // que suceda de eso
        expect( input.value ).toBe( 'saitama' )
    })

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {

        const inputValue = 'Saitama'
        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={onNewCategory}/> )

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input( input, { target: { value: inputValue }})
        fireEvent.submit( form )
        //screen.debug()

        expect( input.value ).toBe('')

        // Evaluar que la función haya sido llamada
        expect( onNewCategory ).toHaveBeenCalled()

        //Para decir el número de veces que la función debió ser llamada
        expect( onNewCategory ).toHaveBeenCalledTimes(1)

        // Evaluar que haya sido llamada con el valor de Saitama
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue )
    })


    test('No debe de llamar el onNewCategory si el input está vació', () => {

        const onNewCategory = jest.fn()

        render( <AddCategory onNewCategory={onNewCategory}/> )

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        
        fireEvent.input( input, { target: { value: '' } } )
        fireEvent.submit( form )

        // se espera que no se llame
        expect( onNewCategory ).not.toHaveBeenCalled()
    })
})