import {MemoryRouter, useNavigate} from 'react-router-dom'
import { SearchPage } from '../../../heroes/pages/SearchPage'
import { fireEvent, screen } from '@testing-library/react'

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate()
}))

describe('Pruebas en SearchPages', () => {
    test('debe de mostrarse correctamente con valores por defecto', () => {
        const { container } =render(
            <MemoryRouter>
                <SearchPage/>
            </MemoryRouter>
        )

        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar a batman y el input con el valor del queryString', () => {
        const { container } =render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        expect(input.value).toBe('batman')
        const img = screen.getByRole('img')
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg')
        const divSearch = screen.getByLabelText('alertDanger')
        expect(divSearch.style.display).toBe('none')
    })

    test('debe de mostrar un error si no se encuentra el hero', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const divSearch = screen.getByLabelText('alertDanger')
        expect(divSearch.style.display).toBe('')
    })

    test('debe de llamar el navigate a la pantalla nueva', () => {

        beforeEach(() => jest.clearAllMocks())

        const { container } = render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage/>
            </MemoryRouter>
        )

        const input = screen.getByRole('textbox')
        const inputValue = 'superman'
        const form = screen.getByLabelText('form')

        fireEvent.input(input, { target: {name: 'searchText', value: inputValue} } )
        fireEvent.submit(form)

        expect(mockedUseNavigate).toHaveBeenCalledWith(`?=${inputValue}`)

    })
})