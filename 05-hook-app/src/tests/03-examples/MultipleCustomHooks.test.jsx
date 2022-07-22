import { render, screen } from '@testing-library/react'
import { MultipleCustomHooks } from '../../03-examples/MultipleCustomHooks'

describe('Pruebas en MultipleCustomHook', () => {

    test('debe de mostrar el componente por defecto', () => {

       render( <MultipleCustomHooks/> )

       expect( screen.getByText('Loading...'))
       expect( screen.getByText('BreakingBad Quotes'))
       
       const button = screen.getByRole('button')
       expect( button.disabled ).toBeTruthy()

       // el screen tiene la información tal cual se encuentra en ese momento el componente
       screen.debug()

    })

    test('debe de mostrar un quote', () => {
        
    })

})