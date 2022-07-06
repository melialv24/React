import { getImagen } from "../base-pruebas/11-async-await"

describe('Probando el archivo 11-asyn-await', () => { 
    test('getImagen debe de retornar el URL de la imagen', async() => { 
        const url = await getImagen()
        console.log(url)

        expect( typeof url ).toBe('string')
    })
})