import {render} from '@testing-library/react'
import { CounterApp } from "../CounterApp"


describe('Prueba del counter app', () => {

    const value = 10

    test('Debe de hacer match con el snapchot', () => {

        const { container } = render(<CounterApp value = { value } />)
        expect( container ).toMatchSnapshot()
    })

    test('Debe de mostrar el valor inicial de 100', () => {
        const { container, getByText } = render(<CounterApp value = { value } />)
        expect( getByText( value )).toBeTruthy()
    })
})