import { useForm } from '../../hooks/useForm'

describe('Pruebas en el useForm', () => {

    test('Debe de regresar el objeto por defecto', () => {

        const initialForm = {
            name: 'melissa',
            email: 'meli@gmail.com'
        }
        
        const { result } = renderHook( () => useForm(initialForm) )
        const {onInputChange, onResetForm, name, email} = result.current
        
        expect( name ).toBe('melissa')

    })

    test('Debe de cambiar el nombre del formulario', () => {

        const initialForm = {
            name: 'melissa',
            email: 'meli@gmail.com'
        }

        const target = {
            name: 'name',
            value: 'melissa nuevo'
        }
        
        const { result } = renderHook( () => useForm(initialForm) )
        const { onInputChange } = result.current

        act(() => {
            onInputChange(target)
        })

        expect(result.current.name).toBe('melissa nuevo')
        

    })

})