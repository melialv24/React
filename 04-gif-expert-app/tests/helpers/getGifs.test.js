import { getGifs } from '../../src/helpers/getGifs'

describe('Pruebas en getGifs', () => {

    test('Debe de retornar un arreglo de gifs', async() => { 
        
        const gifs = await getGifs('novios')

        expect( gifs.length ).toBeGreaterThan(0)
        
        // Aquí estoy validando el primer componente 
        //nmdel array y valido que no me importa lo que traiga el id, el titulo o el url, pero que sean string
        expect( gifs[0] ).toEqual({
            id: expect.any( String ),
            title: expect.any( String ),
            url: expect.any( String )
        })
    })

})