import { useFetchGifs } from '../../src/hooks/useFetchGifs'
import { renderHook, waitFor } from '@testing-library/react'

describe('Probando el hook useFetchGifs', () => {
    test('debe de regresar el estado inicial, es decir imágenes sea un arreglo vació y isLoadig true', () => {
        
        // el result es el resultado que regresaría el hook enseguida se monta
        // El unmount es el resultado del hook cuando se desmonta
        const { result, unmount } = renderHook( () => useFetchGifs('One punch') )
        
        // Desestructuramos el resultado
        const { images, isLoading } = result.current

        expect( images.length).toBe(0)
        expect( isLoading ).toBeTruthy()
    })

    test('debe de retornar un arreglo de imagenes y el isloading en false', async() => {
        
        // el result es el resultado que regresaría el hook enseguida se monta
        // El unmount es el resultado del hook cuando se desmonta
        const { result, unmount } = renderHook( () => useFetchGifs('One punch') )
        
        // como tengo que esperar que el hook haga su trabajo es decir que se carguen las imágenes
        // Aquí le estoy diciendo que espere a que images.length sea mayor a 0
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        )

        // Desestructuramos el resultado
        const { images, isLoading } = result.current

        expect( images.length).toBeGreaterThan(0)
        expect( isLoading ).toBeFalsy()
    })
})