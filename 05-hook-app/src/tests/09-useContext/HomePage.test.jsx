import { render, screen} from '@testing-library/react'
import { useContext } from 'react'
import { UserContext } from '../../09-useContext/context/UserContext'
import { HomePage } from '../../09-useContext/HomePage'



describe('Pruebas en el HomePage', () => {

    const user = {
        id: 1,
        name: 'melissa'
    }

    test('debe mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}>
                <HomePage/>
            </UserContext.Provider>
        )
        
        const preTag = screen.getByLabelText('pre')
        //.innerHtml es para imprimir lo que está en el screen
        expect( preTag.innerHTML).toBe('null')

    })

    test('debe mostrar el componente CON el usuario', () => {

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage/>
            </UserContext.Provider>
        )
        
        const preTag = screen.getByLabelText('pre')
        //.innerHtml es para imprimir lo que está en el screen
        expect( preTag.innerHTML).toContain(user.name)

    })
})