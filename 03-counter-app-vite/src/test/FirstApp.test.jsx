import {getAllByAltText, render} from '@testing-library/react'
import { FirstApp } from '../FirstApp'

describe('Pruebas en first-app', () => { 
    
    /*test('debe de hacer match con el snapshot', () => { 
        const title = 'Hola, soy Melissa'
        //renderiza el componente en memoria
        const { container } =  render( <FirstApp title = {title}/> )
        expect( container ).toMatchSnapshot()
    })*/

    test('Debe mostrar el titulo en un h1', () => {
        const title = 'Hola, soy Melissa'
        const { container, getByText, getByTestId } =  render( <FirstApp title = {title} /> )
        expect( getByText(title) ).toBeTruthy()

        //aquí le estoy diciendo que busque por el testId= 'test-title' y mire si contiene el titulo
        expect( getByTestId( 'test-title' ).innerHTML ).toContain( title )
        
        /*const h1 = container.querySelector('h1')

        // otra forma de hacer que debe mostrar el titulo en un h1
        //expect( screen.getByRole('heading',{level: 1}).innerHTML).toContain( title )

        // Este es para decir que espera que contenga el titulo, más no que sea estrictamente igual
        expect(h1.innerHTML).toContain( title )*/
        
    })

    test('Debe mostrar el subtitulo enviado por props', () => {

        const title = 'Hola, soy Melissa'
        const subTitle = 'Hola,  soy un componente'
        const { container, getByText, getAllByText } =  render( <FirstApp title= {title} subTitle={ subTitle } /> )
        //expect( getByText(subTitle) ).toBeTruthy()

        // aquí le digo que la longitud de los que tienen el texto del subtitulo sea igual al establecido
        expect( getAllByText(subTitle).length ).toBe(1)

        //aquí le estoy diciendo que si existe el subtitulo
        //expect( getByText( subTitle ) ).toBeTruthy( )
        
        /*const h1 = container.querySelector('h1')
        // Este es para decir que espera que contenga el titulo, más no que sea estrictamente igual
        expect(h1.innerHTML).toContain( title )*/
        
    })
})