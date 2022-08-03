import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AuthContext } from '../../../auth'
import { AppRouter } from '../../../router/AppRouter'

describe('Pruebas en AppRouter', () => {
    test('debe de mostrar el login si no está autenticado', () => {
            
        const contextValue = {
            logged: false
        }
        
        render(
                <MemoryRouter initialEntries={['/marvel']}>
                    <AuthContext.Provider value={contextValue}>
                        <AppRouter/>
                    </AuthContext.Provider>
                </MemoryRouter>
        )

        expect( screen.getAllByText('Login').length ).toBe(2)
    })

    test('debe de mostrar el componente de marvel si está autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Melissa',
                id: 'ABC'
            }
        }

        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )

        // Que la longitud sea mayor o igual a 1
        expect( screen.getAllByText('Marvel').length).toBeGraterThanOrEqual(1)


    })
})