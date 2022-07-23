import { fireEvent, render, screen } from '@testing-library/react'
import { LoginPage } from '../../09-useContext/LoginPage'
import { UserContext } from '../../09-useContext/context/UserContext'


describe('prbando el LoginPage', () => {

    const user = {
        id: 1, 
        name: 'melissa'
    }

    const setUserMock = jest.fn()

    test('debe de mostrar el user si viene', () => {

        render(
            <UserContext.Provider>
                <LoginPage  value={{ user }} />
            </UserContext.Provider>
        )

        expect(screen.getByLabelText('pre')).toContain(user.name)

    })

    test('ver que se ejecute la función cuando se presioné el botón', () => {

        render(
            <UserContext.Provider>
                <LoginPage  value={{ user, setUser: setUserMock }} />
            </UserContext.Provider>
        )

        const buttonSetUser = screen.getByRole('button')
        fireEvent.click(buttonSetUser)

        expect( setUserMock ).toHaveBeenCalled()
    })
})