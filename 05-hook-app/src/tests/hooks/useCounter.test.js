import { renderHook } from '@testing-library/react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { useCounter } from '../../hooks'

describe('Pruebas en el useCounter', () => {
    test('Debe de retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() )
        const { counter, decrement, increment, reset } = result.current

        expect( counter ).toBe(10)
        expect( decrement ).toEqual( expect.any(Function) )

    })

    test('Debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook( () => useCounter(100) )
        const { counter, decrement, increment, reset } = result.current
        expect( counter ).toBe(100)
    })

    test('Debe de incrementar el contador', () => {
        const { result } = renderHook( () => useCounter(100) )
        const { counter, increment } = result.current

        act(() => {
            increment()
            increment(2)
        })

        expect( result.current.counter ).toBe(101)

    })

    test('Debe decrementar el contador', () => {

        const { result } = renderHook(() => useCounter(100))
        const { decrement } = result.current

        act(() => {
            decrement()
            decrement(2)
        })

        expect( result.current.counter ).toBe(97)

    })

    test('Debe funcionar el reset', () => {
        const {result} = renderHook(() => useCounter(100))
        const { reset, decrement } = result.current

        act(() => {
            decrement(3)
            reset()
        })

        expect( result.current.counter ).toBe(100)
    })

})