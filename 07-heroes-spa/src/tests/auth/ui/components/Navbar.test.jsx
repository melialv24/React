import {fireEvent, render, screen} from '@testing-library/react'
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../../auth'
import { Navbar } from '../../../../ui/components/Navbar'

const mockedUseNavigate = jest.fn()

// Aquí le estoy diciendo que cuando sea llamado el useNavigate 
// Este me llame al mock creado previamente
// y que el resto de funciones que nos brinda la librería actuen de la misma manera 
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate()
}))

describe('Pruebas en el Navbar.jsx', () => {
    test('Verificar que se muestre el nombre si la persona está logueada', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Melissa Alvarez',
                id:'ABC'
            }
        }

        render( 
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText(contextValue.user.name)).toBeTruthy()

    })

    test('debe de llamar el logout y navigate cuando se hace click en el botón', () => {
        const contextValue = {
            logged: true,
            user: {
                name: 'Melissa Alvarez',
                id:'ABC'
            },
            logout: jest.fn()
        }

        beforeEach(() => jest.clearAllMocks())

        render( 
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        
        const buttonLogout = screen.getByRole('button')
        fireEvent.click(buttonLogout)

        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login',{'replace': true})

    })
})