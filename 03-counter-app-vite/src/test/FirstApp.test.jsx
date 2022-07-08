import { render } from '@testing-library/react'
import { FirstApp } from '../FirstApp'

describe('Pruebas en first-app', () => { 
    test('debe de hacer match con el snapshot', () => { 
        const title = 'Hola, soy Melissa'
        //renderiza el componente en memoria
        render( <FirstApp title= { title }/> )
    })
})