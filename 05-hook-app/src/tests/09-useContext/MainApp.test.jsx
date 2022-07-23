import { render, screen } from 'react'
import { MemoryRouter } from 'react-router-dom'
import { MainApp } from '../../09-useContext/MainApp'

describe('probando el componente MainApp', () => {
    test('debe de mostrar el homePage', () => {

        // el memory es un remplazo del browserRouter en el main.jsx
        render( 
            <MemoryRouter>
                <MainApp/> 
            </MemoryRouter>
        )

        expect( screen.getByText('HomePage')).toBeTruthy()
    })

    test('debe mostrar el LoginPage', () => {
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp/> 
            </MemoryRouter>
        )

        expect( screen.getByText('LoginPage')).toBeTruthy()
    })
})