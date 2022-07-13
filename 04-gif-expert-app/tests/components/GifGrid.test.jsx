import { render, screen } from "@testing-library/react"
import { GifGrid } from '../../src/components/GifGrid'
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('Probando GifGrid', () => {

    category='Amor'

    test('debe de mostrar el loading inicialmente', () => {

        // Aquí voy a simular los valores que va a regresar el hook
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GifGrid category={category} />)
        expect( screen.getByText('Cargando...'))
        expect( screen.getByAltText( category ))
    })

    test('Debe de mostrar items cuando se cargan las imágenes mediante el useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'http://localhost/saitama.jpg'
            },
            {
                id: 'ABC',
                title: 'Goku',
                url: 'http://localhost/goku.jpg'
            }
        ]

        // Aquí voy a simular los valores que va a regresar el hook
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: false
        })

        render( <GifGrid category={category} />)
        expect( screen.getAllByRole('img').length).toBe(2)
    })
})