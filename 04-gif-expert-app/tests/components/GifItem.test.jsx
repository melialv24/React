import {render, screen} from '@testing-library/react'
import { GifItem } from "../../src/components/GifItem"

describe('Probando el componente GifItem', () => { 7

    const title = 'MELISSA ERES HERMOSA'
    const url = 'http://localhost/PRUEBA%20DE%20URL'

    test('Debe hacer match con el snapshot', () => { 
        const { container } = render(<GifItem title={title} url={url} />)
        expect( container ).toMatchSnapshot()
    })

    test('Probar las props que recibe GifItem', () => { 

        render(<GifItem title={title} url={url}/>)
        // Esto mismo lo podemos hacer desestructurando las propiedades del screen
        //expect( screen.getByRole('img').src).toBe( url )

        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url )
    })

})