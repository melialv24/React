import { retornaArreglo } from "../base-pruebas/07-deses-arr"

describe('Preubas en 07-deses-arr', () => { 
    test('debe de retornar un string yt un número', () => { 
        const [ letters, numbers] = retornaArreglo()

        //expect( letters ).toBe('ABC')
        expect( numbers ).toBe(123)

        expect( typeof letters ).toBe( 'string' )
        expect( typeof numbers ).toBe( 'number' )
        
        // Aquí le estoy diciendo que espera cualquier tipo de string
        expect( letters ).toEqual( expect.any(String) )
    })
})