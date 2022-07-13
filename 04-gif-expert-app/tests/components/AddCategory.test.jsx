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

})