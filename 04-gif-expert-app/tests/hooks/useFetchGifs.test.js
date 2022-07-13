import { useFetchGifs } from '../../src/hooks/useFetchGifs'
import {renderHook} from '@testing-library/react'

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

    test('debe de retornar un arreglo de imagenes y el isloading en false', () => {
        
        // el result es el resultado que regresaría el hook enseguida se monta
        // El unmount es el resultado del hook cuando se desmonta
        const { result, unmount } = renderHook( () => useFetchGifs('One punch') )
        
        // Desestructuramos el resultado
        const { images, isLoading } = result.current

        expect( images.length).toBe(0)
        expect( isLoading ).toBeTruthy()
    })
})