import {fireEvent, render, screen} from '@testing-library/react'
import { CounterApp } from "../CounterApp"


describe('Prueba del counter app', () => {

    const value = 10

    test('Debe de hacer match con el snapchot', () => {

        const { container } = render(<CounterApp value = { value } />)
        expect( container ).toMatchSnapshot()
    })

    test('Debe de mostrar el valor inicial de 100', () => {
        const { getByText } = render(<CounterApp value = { value } />)
        expect( getByText( value )).toBeTruthy()
    })

    test('Debe de incrementar con el botón +1', () => {
        render( <CounterApp value={ value } /> )
        fireEvent.click( screen.getByText('+1') )
        expect( screen.getByText('11')).toBeTruthy

    })

    test('Debe decrementar con el botón -1', () => {
        render( <CounterApp value={ value } /> )
        fireEvent.click( screen.getByText('-1') )
        expect( screen.getByText('9')).toBeTruthy
        
    })

    test('Debe funcionar el botón de reset', () => {
        render( <CounterApp value={ value } /> )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        fireEvent.click( screen.getByText('+1') )
        //fireEvent.click( screen.getByText('Reset') )
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'} ))
        expect( screen.getByText(`${value}`)).toBeTruthy
        
    })
})