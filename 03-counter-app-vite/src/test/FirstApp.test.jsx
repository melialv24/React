import {render} from '@testing-library/react'
import { FirstApp } from '../FirstApp'

describe('Pruebas en first-app', () => { 
    test('debe de hacer match con el snapshot', () => { 
        //renderiza el componente en memoria
        render( <FirstApp/> )
    })
})